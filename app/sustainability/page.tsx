import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { imageSet } from "@/data/site";

const steps = [
  [
    "recycling",
    "1. Materiales reciclados",
    "Utilizamos fibras 100% post-consumo, rescatando papel y cartón que de otro modo terminarían en vertederos.",
  ],
  [
    "leaf",
    "2. Tintas vegetales",
    "Nuestras impresiones utilizan aceites de soja y linaza, eliminando químicos tóxicos de la industria tradicional.",
  ],
  [
    "plant_circle",
    "3. Compostable",
    "Al final de su uso, el empaque se descompone naturalmente, nutriendo la tierra en lugar de contaminarla.",
  ],
];

export default function SustainabilityPage() {
  return (
    <PageShell active="/sustainability">
      <section className="overflow-hidden bg-surface-container-low">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center md:flex-row">
          <div className="w-full px-8 py-20 md:w-1/2 md:px-24 md:py-32">
            <span className="label-caps mb-6 block text-primary">
              Sustentabilidad consciente
            </span>
            <h1 className="font-display text-h1 text-on-surface">
              Comprometidos con el mañana: nuestro empaque
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-on-surface-variant">
              Nuestra misión residuo cero comienza en el origen. Cada caja,
              etiqueta y cordón ha sido diseñado para retornar a la tierra con
              gratitud, sin dejar rastro de su paso.
            </p>
            <a
              href="#mision"
              className="label-caps mt-10 inline-flex items-center gap-2 rounded-lg bg-primary-container px-10 py-4 text-on-primary-container"
            >
              Nuestra misión <Icon name="arrow_forward" className="text-sm" />
            </a>
          </div>
          <div className="h-[520px] w-full md:h-[780px] md:w-1/2">
            <img
              src={imageSet.packaging}
              alt="Empaque sostenible Lumina"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-section-padding md:px-24">
        <div className="mx-auto mb-16 max-w-container-max text-center">
          <h2 className="mb-4 font-display text-h2 text-on-surface">
            Ciclo de vida circular
          </h2>
          <div className="mx-auto h-px w-20 bg-primary-container" />
        </div>
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed-dim">
                <Icon name={icon} className="text-3xl text-primary" />
              </div>
              <h3 className="mb-4 font-display text-h3 text-on-surface">
                {title}
              </h3>
              <p className="leading-7 text-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="mision"
        className="flex flex-col bg-primary text-white md:flex-row"
      >
        <div className="h-[420px] w-full md:h-auto md:w-1/2">
          <img
            src={imageSet.forest}
            alt="Bosque protegido"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
        <div className="flex w-full flex-col justify-center px-8 py-20 md:w-1/2 md:px-24">
          <span className="label-caps mb-6 block text-on-primary-container">
            Nuestra huella
          </span>
          <h2 className="mb-8 font-display text-h1">¿Por qué lo hacemos?</h2>
          <p className="mb-12 text-lg leading-8 text-white/90">
            La industria de la belleza genera más de 120 mil millones de
            unidades de empaque al año. En Lumina, cada decisión es un voto por
            un planeta más limpio.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-12">
            <div>
              <p className="mb-2 font-display text-4xl">12k+</p>
              <p className="label-caps opacity-75">Plásticos ahorrados</p>
            </div>
            <div>
              <p className="mb-2 font-display text-4xl">500+</p>
              <p className="label-caps opacity-75">Árboles plantados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-8 my-20 md:mx-24">
        <div className="mx-auto max-w-container-max overflow-hidden rounded-2xl bg-secondary-fixed p-12 text-center text-on-secondary-fixed shadow-sm md:p-24">
          <h2 className="mx-auto mb-8 max-w-2xl font-display text-h1">
            Lleva la naturaleza a casa, sin dejar rastro.
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-lg leading-8 opacity-80">
            Cada compra es un compromiso compartido con la belleza que respeta
            la vida.
          </p>
          <a
            href="/products"
            className="label-caps rounded-lg bg-primary px-12 py-5 text-white shadow-md transition hover:bg-on-surface"
          >
            Ver catálogo
          </a>
        </div>
      </section>
    </PageShell>
  );
}
