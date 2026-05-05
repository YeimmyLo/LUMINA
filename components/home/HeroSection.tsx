import { LeadForm } from "@/components/LeadForm";
import { leadMagnet } from "@/data/home";
import { imageSet } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[780px] items-center overflow-hidden bg-white">
      <img src={imageSet.homeHero} alt="Jabones artesanales" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF5]/90 via-[#FFFDF5]/60 to-transparent" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-8 py-20 md:grid-cols-[1fr_420px]">
        <div>
          <span className="label-caps mb-4 block text-secondary">Cuidado facial consciente</span>
          <h1 className="max-w-2xl font-display text-h1 text-primary">
            Logra una piel limpia, suave y radiante con jabones naturales
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface-variant">
            Elige tu tipo de piel, recibe una recomendación personalizada y empieza un ritual facial con jabones
            botánicos hechos para limpiar sin resecar.
          </p>
          <p className="mt-5 inline-flex rounded-full bg-secondary-fixed px-5 py-3 text-sm font-semibold text-on-secondary-fixed">
            {leadMagnet.incentive}
          </p>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
