export type FormType = "lead_hero" | "contact" | "newsletter_products";

export type FormPayload = {
  formType: FormType;
  source: string;
  page: string;
  name?: string;
  email: string;
  subject?: string;
  message?: string;
  incentive?: string;
  company?: string;
};

export type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

export const initialFormState: FormState = {
  status: "idle",
  message: "",
};

export async function submitForm(
  payload: FormPayload,
): Promise<{ message: string }> {
  const response = await fetch("/api/forms", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as {
    message?: string;
  } | null;

  if (!response.ok) {
    throw new Error(
      data?.message || "No pudimos enviar el formulario. Inténtalo nuevamente.",
    );
  }

  return {
    message: data?.message || "Información enviada correctamente.",
  };
}
