"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { leadMagnet } from "@/data/home";
import { initialFormState, submitForm, type FormState } from "@/lib/forms";

export function LeadForm() {
  const pathname = usePathname();
  const [state, setState] = useState<FormState>(initialFormState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", message: "Enviando información..." });

    try {
      const result = await submitForm({
        formType: "lead_hero",
        source: "Hero principal",
        page: pathname,
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        company: String(formData.get("company") || ""),
        incentive: leadMagnet.incentive
      });

      form.reset();
      setState({ status: "success", message: result.message });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "No pudimos enviar el formulario."
      });
    }
  }

  return (
    <form className="rounded-xl border border-surface-variant bg-white/90 p-6 shadow-2xl backdrop-blur" onSubmit={handleSubmit}>
      <h2 className="mb-2 font-display text-2xl text-primary">{leadMagnet.title}</h2>
      <p className="mb-6 text-sm leading-6 text-on-surface-variant">{leadMagnet.description}</p>

      <label className="mb-4 block">
        <span className="label-caps mb-2 block text-primary">Nombre</span>
        <input
          className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-secondary"
          name="name"
          placeholder="Tu nombre"
          required
        />
      </label>

      <label className="mb-6 block">
        <span className="label-caps mb-2 block text-primary">Correo electrónico</span>
        <input
          className="w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-secondary"
          name="email"
          placeholder="tu@email.com"
          required
          type="email"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Empresa
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="label-caps w-full rounded-full bg-primary-container px-8 py-4 text-white shadow-lg transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
        disabled={state.status === "submitting"}
        type="submit"
      >
        {state.status === "submitting" ? "Enviando..." : leadMagnet.cta}
      </button>

      <p className="mt-4 text-center text-xs text-stone-500">Sin spam. Solo consejos útiles y ofertas de Lumina.</p>
      {state.message ? (
        <p
          className={`mt-4 text-center text-sm ${
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
