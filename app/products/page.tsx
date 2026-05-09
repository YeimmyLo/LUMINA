"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { imageSet, products, type ProductBenefit, type SkinType } from "@/data/site";

const skinTypeFilters: SkinType[] = ["Seca", "Grasa", "Mixta", "Sensible"];
const benefitFilters: ProductBenefit[] = [
  "Hidratante",
  "Depurante",
  "Calmante",
  "Exfoliante",
  "Purificante",
  "Reparador",
  "Refrescante"
];

export default function ProductsPage() {
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<SkinType[]>([]);
  const [selectedBenefits, setSelectedBenefits] = useState<ProductBenefit[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const skinTypeMatch =
        selectedSkinTypes.length === 0 || selectedSkinTypes.some((skinType) => product.skinTypes.includes(skinType));

      const benefitMatch =
        selectedBenefits.length === 0 || selectedBenefits.some((benefit) => product.benefits.includes(benefit));

      return skinTypeMatch && benefitMatch;
    });
  }, [selectedBenefits, selectedSkinTypes]);

  const hasActiveFilters = selectedSkinTypes.length > 0 || selectedBenefits.length > 0;

  function toggleSkinType(filter: SkinType) {
    setSelectedSkinTypes((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  }

  function toggleBenefit(filter: ProductBenefit) {
    setSelectedBenefits((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  }

  function clearFilters() {
    setSelectedSkinTypes([]);
    setSelectedBenefits([]);
  }

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
              {skinTypeFilters.map((filter) => {
                const isActive = selectedSkinTypes.includes(filter);

                return (
                  <label key={filter} className="flex cursor-pointer items-center text-on-surface-variant transition hover:text-primary">
                    <input
                      checked={isActive}
                      className="h-5 w-5 rounded-sm border-outline-variant text-primary focus:ring-primary"
                      onChange={() => toggleSkinType(filter)}
                      type="checkbox"
                    />
                    <span className={`ml-3 transition-colors ${isActive ? "font-medium text-primary" : ""}`}>{filter}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-display text-h3 text-primary">Beneficios</h2>
            <div className="flex flex-wrap gap-2">
              {benefitFilters.map((tag) => {
                const isActive = selectedBenefits.includes(tag);

                return (
                  <button
                    key={tag}
                    className={`label-caps rounded-full border px-4 py-2 transition ${
                      isActive
                        ? "border-primary-container bg-primary-container text-white"
                        : "border-outline-variant bg-surface-container-low hover:border-primary-container hover:bg-primary-container hover:text-white"
                    }`}
                    onClick={() => toggleBenefit(tag)}
                    type="button"
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <p className="italic text-on-surface-variant">
                Mostrando {filteredProducts.length} producto{filteredProducts.length === 1 ? "" : "s"} artesanales
              </p>
              {hasActiveFilters ? (
                <button
                  className="label-caps inline-flex rounded-full border border-outline-variant px-4 py-2 text-primary transition hover:border-primary hover:bg-surface-container-low"
                  onClick={clearFilters}
                  type="button"
                >
                  Limpiar filtros
                </button>
              ) : null}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low px-8 py-16 text-center">
              <h3 className="font-display text-2xl text-primary">No encontramos coincidencias</h3>
              <p className="mx-auto mt-3 max-w-md text-on-surface-variant">
                Prueba otra combinación de tipo de piel y beneficios para descubrir más opciones.
              </p>
              <button
                className="label-caps mt-6 rounded-full bg-primary-container px-6 py-3 text-white transition hover:bg-primary"
                onClick={clearFilters}
                type="button"
              >
                Ver todos los productos
              </button>
            </div>
          )}
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
