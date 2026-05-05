"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { initialFormState, submitForm, type FormState } from "@/lib/forms";

export function NewsletterForm() {
  const pathname = usePathname();
  const [state, setState] = useState<FormState>(initialFormState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", message: "Suscribiendo..." });

    try {
      const result = await submitForm({
        formType: "newsletter_products",
        source: "Newsletter de productos",
        page: pathname,
        email: String(formData.get("email") || ""),
        company: String(formData.get("company") || ""),
        incentive: "Rituales de bienestar y ofertas exclusivas"
      });

      form.reset();
      setState({ status: "success", message: result.message });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "No pudimos completar la suscripción."
      });
    }
  }

  return (
    <form className="mx-auto flex max-w-md flex-col gap-4 md:grid md:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
      <input
        className="rounded-lg border border-outline-variant bg-surface px-6 py-4"
        name="email"
        placeholder="Tu correo electrónico"
        required
        type="email"
      />
      <label className="hidden" aria-hidden="true">
        Empresa
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        className="label-caps rounded-lg bg-primary px-8 py-4 text-white transition hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-70"
        disabled={state.status === "submitting"}
        type="submit"
      >
        {state.status === "submitting" ? "Enviando..." : "Suscribirse"}
      </button>
      {state.message ? (
        <p
          className={`text-sm md:col-span-2 ${
            state.status === "success" ? "text-primary-container" : state.status === "error" ? "text-red-700" : "text-stone-500"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
