import Link from "next/link";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-[#F5F2ED] text-primary-container">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-12">
        <div>
          <p className="mb-5 font-display text-xl font-semibold uppercase">
            Lumina
          </p>
          <p className="max-w-sm text-sm leading-7 text-stone-500">
            Artesanía botánica para el cuidado facial moderno. Pequeñas acciones
            generan grandes cambios.
          </p>
        </div>
        {[
          ["Explorar", "Jabones", "Rituales", "Packs", "Sostenibilidad"],
          [
            "Ayuda",
            "Envíos",
            "Devoluciones",
            "Contacto",
            "Preguntas frecuentes",
          ],
          [
            "Contacto",
            "hola@lumina.com",
            "+57 310 123 4567",
            "Bogotá, Colombia",
          ],
        ].map(([title, ...links]) => (
          <div key={title}>
            <h3 className="label-caps mb-5">{title}</h3>
            <ul className="space-y-3 text-xs uppercase text-stone-500">
              {links.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="transition hover:text-primary-container"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-surface-variant/70 px-8 py-7 text-center font-display text-xs text-stone-400">
        © 2026 Lumina. Todos los derechos reservados.
      </div>
    </footer>
  );
}
