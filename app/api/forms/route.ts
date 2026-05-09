import { NextRequest, NextResponse } from "next/server";
import type { FormPayload, FormType } from "@/lib/forms";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwaqwR4OvfDAkRbzr1X-fufvSYbpOVVPGCf1opGlaB5KKU-KiSoJSYqoqgi2MszZw23/exec";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORM_TYPES = new Set<FormType>([
  "lead_hero",
  "contact",
  "newsletter_products",
]);

type ValidationResult =
  | { ok: true; payload: FormPayload }
  | { ok: false; message: string; status: number };

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "La solicitud no tiene un formato válido." },
      { status: 400 },
    );
  }

  const validation = validatePayload(body);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, message: validation.message },
      { status: validation.status },
    );
  }

  const userAgent = request.headers.get("user-agent") || "";
  const scriptPayload = toAppsScriptParams(validation.payload, userAgent);

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: scriptPayload,
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "No se pudo conectar con Google Sheets. Inténtalo más tarde.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Información enviada correctamente.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "No se pudo enviar la información. Revisa tu conexión e inténtalo de nuevo.",
      },
      { status: 502 },
    );
  }
}

function validatePayload(body: unknown): ValidationResult {
  if (!isRecord(body)) {
    return {
      ok: false,
      message: "La solicitud no tiene un formato válido.",
      status: 400,
    };
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return {
      ok: false,
      message: "No se pudo procesar la solicitud.",
      status: 400,
    };
  }

  const formType = body.formType;
  const email = getString(body.email);
  const source = getString(body.source);
  const page = getString(body.page);
  const name = getString(body.name);
  const subject = getString(body.subject);
  const message = getString(body.message);
  const incentive = getString(body.incentive);

  if (typeof formType !== "string" || !FORM_TYPES.has(formType as FormType)) {
    return { ok: false, message: "Tipo de formulario no válido.", status: 400 };
  }

  if (!source || !page) {
    return {
      ok: false,
      message: "Faltan metadatos del formulario.",
      status: 400,
    };
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return {
      ok: false,
      message: "Ingresa un correo electrónico válido.",
      status: 400,
    };
  }

  if ((formType === "lead_hero" || formType === "contact") && !name) {
    return { ok: false, message: "Ingresa tu nombre.", status: 400 };
  }

  if (formType === "contact" && (!subject || !message)) {
    return {
      ok: false,
      message: "Completa el asunto y el mensaje.",
      status: 400,
    };
  }

  return {
    ok: true,
    payload: {
      formType: formType as FormType,
      source,
      page,
      name,
      email,
      subject,
      message,
      incentive,
      company: getString(body.company),
    },
  };
}

function toAppsScriptParams(payload: FormPayload, userAgent: string) {
  const params = new URLSearchParams();

  params.set("timestamp", new Date().toISOString());
  params.set("receivedAt", new Date().toISOString());
  params.set("formType", payload.formType);
  params.set("source", payload.source);
  params.set("name", payload.name || "");
  params.set("email", payload.email);
  params.set("subject", payload.subject || "");
  params.set("message", payload.message || "");
  params.set("incentive", payload.incentive || "");
  params.set("page", payload.page);
  params.set("userAgent", userAgent);

  return params;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
