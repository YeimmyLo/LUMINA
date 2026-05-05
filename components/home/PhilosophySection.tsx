import Link from "next/link";
import { Icon } from "@/components/Icon";
import { philosophyBullets } from "@/data/home";
import { imageSet } from "@/data/site";

export function PhilosophySection() {
  return (
    <section className="bg-surface-container py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:rotate-0 md:rotate-2">
            <img src={imageSet.botanicals} alt="Ingredientes botánicos" className="h-[500px] w-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="label-caps mb-4 block text-secondary">Filosofía botánica</span>
          <h2 className="mb-8 font-display text-h2 text-primary">La naturaleza tiene todo lo que tu piel necesita</h2>
          <p className="mb-6 text-lg leading-8 text-on-surface-variant">
            Creemos que la verdadera belleza reside en la simplicidad. Al utilizar métodos tradicionales de
            saponificación en frío, preservamos las propiedades nutritivas de cada aceite vegetal y extracto.
          </p>
          <ul className="mb-10 space-y-4 text-primary">
            {philosophyBullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Icon name="check_circle" className="text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/sustainability" className="label-caps rounded-lg bg-secondary px-8 py-4 text-white shadow-md transition hover:bg-primary">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
}
