import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { imageSet } from "@/data/site";

export default function ContactPage() {
  return (
    <PageShell active="/contact" grain>
      <section className="mx-auto max-w-screen-xl px-8 pb-16 pt-24 md:px-12">
        <div className="max-w-2xl">
          <span className="label-caps mb-4 block text-secondary">
            Ponte en contacto
          </span>
          <h1 className="mb-6 font-display text-h1 text-primary-container">
            Comencemos un nuevo ritual de conexión.
          </h1>
          <p className="max-w-lg text-lg leading-8 text-on-surface-variant">
            Ya sea que tengas una pregunta sobre nuestras mezclas botánicas o
            simplemente desees compartir un momento de cuidado, estamos aquí
            para escucharte.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-8 pb-section-padding md:px-12">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-8 shadow-sm md:p-12 lg:col-span-7">
            <ContactForm />
          </div>

          <div className="space-y-12 lg:col-span-5">
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img
                src={imageSet.contact}
                alt="Rama de eucalipto"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-display text-h3 text-primary">
                  Sigue el ritual
                </h2>
                <div className="space-y-4">
                  <p className="flex items-start gap-4 text-on-surface-variant">
                    <Icon name="location_on" className="text-secondary" /> Calle
                    54 #23-45, Bogotá, Colombia
                  </p>
                  <a
                    className="flex items-center gap-4 transition hover:text-secondary"
                    href="mailto:hola@lumina.com"
                  >
                    <Icon name="mail" className="text-secondary" />{" "}
                    hola@lumina.com
                  </a>
                  <p className="flex items-center gap-4 text-on-surface-variant">
                    <Icon name="call" className="text-secondary" /> +57 310 123
                    4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section-padding h-96 w-full opacity-80 grayscale">
        <img
          src={imageSet.map}
          alt="Mapa estilizado de Barcelona"
          className="h-full w-full object-cover"
        />
      </section>
    </PageShell>
  );
}
