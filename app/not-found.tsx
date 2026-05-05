import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-8 py-24 text-center">
        <span className="label-caps mb-4 text-secondary">404</span>
        <h1 className="font-display text-h1 text-primary">Esta página no existe</h1>
        <p className="mt-6 text-lg leading-8 text-on-surface-variant">
          El ritual que buscas no está disponible, pero puedes volver al inicio y seguir explorando Lumina.
        </p>
        <Link href="/" className="label-caps mt-10 rounded-full bg-primary-container px-8 py-4 text-white">
          Volver al inicio
        </Link>
      </section>
    </PageShell>
  );
}
