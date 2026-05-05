import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/site";

export function FeaturedProductsSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-caps mb-2 block text-secondary">Selección especial</span>
            <h2 className="font-display text-h2 text-primary">Nuestros más vendidos</h2>
          </div>
          <Link href="/products" className="label-caps border-b-2 border-secondary pb-1 text-secondary">
            Ver más
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
