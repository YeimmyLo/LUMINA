"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { initialFormState, submitForm, type FormState } from "@/lib/forms";

export function ContactForm() {
  const pathname = usePathname();
  const [state, setState] = useState<FormState>(initialFormState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", message: "Enviando mensaje..." });

    try {
      const result = await submitForm({
        formType: "contact",
        source: "Página de contacto",
        page: pathname,
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || ""),
        company: String(formData.get("company") || ""),
      });

      form.reset();
      setState({ status: "success", message: result.message });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "No pudimos enviar el mensaje.",
      });
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <label className="space-y-2">
          <span className="label-caps text-primary">Nombre completo</span>
          <input
            className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-secondary"
            name="name"
            placeholder="¿Cómo podemos dirigirnos a ti?"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="label-caps text-primary">Correo electrónico</span>
          <input
            className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-secondary"
            name="email"
            placeholder="hola@ejemplo.com"
            required
            type="email"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="label-caps text-primary">Asunto</span>
        <input
          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-secondary"
          name="subject"
          placeholder="¿Sobre qué te gustaría hablar?"
          required
          type="text"
        />
      </label>

      <label className="block space-y-2">
        <span className="label-caps text-primary">Tu mensaje</span>
        <textarea
          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-secondary"
          name="message"
          placeholder="Cuéntanos qué necesitas..."
          required
          rows={6}
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Empresa
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-10 py-4 font-medium text-white shadow-md transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
        disabled={state.status === "submitting"}
        type="submit"
      >
        {state.status === "submitting" ? "Enviando..." : "Enviar mensaje"}
        <Icon name="arrow_forward" className="text-sm" />
      </button>

      {state.message ? (
        <p
          className={`text-sm ${
            state.status === "success"
              ? "text-primary-container"
              : state.status === "error"
                ? "text-red-700"
                : "text-stone-500"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
