import { SectionHeading } from "@/components/SectionHeading";
import { BenefitSvgIcon } from "@/components/icons/LandingSvgIcon";
import { benefits } from "@/data/home";

export function BenefitsSection() {
  return (
    <section className="border-b border-surface-variant/40 bg-surface-bright py-24">
      <SectionHeading
        eyebrow="Beneficios principales"
        title="Resultados visibles en una rutina más simple"
        description="Inscríbete hoy y activa tu 15% de descuento en el primer pedido."
        className="mb-12 px-8"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-3">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-xl bg-surface-container-low p-7 text-center transition hover:-translate-y-1">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-on-primary-container/30 text-primary">
              <BenefitSvgIcon name={benefit.icon} />
            </div>
            <h3 className="mb-2 font-display text-xl text-primary">{benefit.title}</h3>
            <p className="text-sm leading-6 text-on-surface-variant">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
