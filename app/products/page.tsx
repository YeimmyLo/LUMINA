import { Icon } from "@/components/Icon";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { imageSet, products } from "@/data/site";

const filters = ["Seca", "Grasa", "Mixta", "Sensible"];
const tags = ["Hidratante", "Depurante", "Calmante", "Exfoliante"];

export default function ProductsPage() {
  return (
    <PageShell active="/products" grain>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF5] to-[#F5F2ED] px-8 py-20 md:px-12">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="label-caps mb-6 block text-primary">Colección orgánica</span>
            <h1 className="font-display text-h1 text-primary">Nuestros jabones</h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-on-surface-variant">
              Descubre la pureza de la naturaleza en cada barra. Formulados con botánicos prensados en frío para
              nutrir tu piel y calmar tus sentidos.
            </p>
          </div>
          <img src={imageSet.productsHero} alt="Jabones orgánicos" className="h-[450px] w-full rounded-xl object-cover shadow-2xl" />
        </div>
        <Icon name="eco" className="absolute bottom-0 right-0 text-[260px] text-primary opacity-10" />
      </section>

      <section className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-16 md:px-12 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-12">
          <div>
            <h2 className="mb-6 font-display text-h3 text-primary">Tipo de piel</h2>
            <div className="space-y-3">
              {filters.map((filter) => (
                <label key={filter} className="flex cursor-pointer items-center text-on-surface-variant transition hover:text-primary">
                  <input type="checkbox" className="h-5 w-5 rounded-sm border-outline-variant text-primary focus:ring-primary" />
                  <span className="ml-3">{filter}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 font-display text-h3 text-primary">Beneficios</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="label-caps rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 transition hover:border-primary-container hover:bg-primary-container hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="italic text-on-surface-variant">Mostrando 6 productos artesanales</p>
            <label className="flex items-center gap-4">
              <span className="label-caps text-outline">Ordenar por</span>
              <select className="rounded-lg border border-outline-variant bg-surface-container-low px-5 py-2 focus:border-primary focus:ring-primary">
                <option>Destacados</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Novedades</option>
              </select>
            </label>
          </div>
          <div className="grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-container-high px-8 py-20 text-center md:px-12">
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="label-caps mb-4 block text-secondary">Únete a la comunidad</span>
          <h2 className="mb-6 font-display text-h2 text-primary">Recibe rituales de bienestar y ofertas exclusivas</h2>
          <NewsletterForm />
        </div>
      </section>
    </PageShell>
  );
}
