import type { Product } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="label-caps absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-primary-container shadow-sm backdrop-blur">
          {product.tag}
        </span>
        {/* <button className="label-caps absolute bottom-4 left-1/2 w-[84%] -translate-x-1/2 translate-y-4 rounded-full bg-primary-container py-3 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Añadir al carrito
        </button> */}
      </div>
      <div className="text-center">
        <h3 className="font-display text-xl text-primary">{product.name}</h3>
        {/* <p className="mt-2 font-semibold text-secondary">{product.price}</p> */}
      </div>
    </article>
  );
}
