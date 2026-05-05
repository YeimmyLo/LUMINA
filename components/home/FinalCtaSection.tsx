import Link from "next/link";
import { imageSet } from "@/data/site";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-28 text-center text-white">
      <img src={imageSet.forest} alt="Bosque al amanecer" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary-container/75" />
      <div className="relative z-10 mx-auto max-w-3xl px-8">
        <h2 className="font-display text-h1">Dale a tu piel un cuidado consciente</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/85">
          Únete a nuestra comunidad y transforma tu rutina diaria en un ritual de bienestar respetuoso.
        </p>
        <Link href="/products" className="label-caps mt-10 inline-flex rounded-full bg-white px-12 py-5 text-primary shadow-xl">
          Compra ahora
        </Link>
      </div>
    </section>
  );
}
