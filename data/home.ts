export type BenefitIconName = "water_drop" | "spa" | "auto_awesome";
export type CommitmentIconName = "package_2" | "cruelty_free" | "handshake" | "water_drop";

export type LandingItem<TIcon extends string> = {
  icon: TIcon;
  title: string;
  description: string;
};

export const leadMagnet = {
  title: "Recibe tu recomendación",
  description: "Déjanos tus datos y te enviaremos el incentivo de bienvenida.",
  incentive: "Regístrate y recibe 15% de descuento más una guía de rutina facial.",
  cta: "Quiero mi descuento"
};

export const benefits: LandingItem<BenefitIconName>[] = [
  {
    icon: "water_drop",
    title: "Purifica tu rostro",
    description: "Elimina impurezas sin resecar y recupera una sensación fresca desde el primer lavado."
  },
  {
    icon: "spa",
    title: "Calma la irritación",
    description: "Reduce la tirantez diaria con aceites botánicos y una limpieza más amable."
  },
  {
    icon: "auto_awesome",
    title: "Ilumina tu rutina",
    description: "Convierte la limpieza facial en un ritual simple, natural y constante."
  }
];

export const commitments: LandingItem<CommitmentIconName>[] = [
  {
    icon: "package_2",
    title: "Empaques biodegradables",
    description: "Papel reciclado y tintas vegetales que vuelven a la tierra."
  },
  {
    icon: "cruelty_free",
    title: "Libre de crueldad",
    description: "Nunca testeamos en animales, solo en humanos felices."
  },
  {
    icon: "handshake",
    title: "Origen responsable",
    description: "Proveedores locales y cultivos de comercio justo."
  },
  {
    icon: "water_drop",
    title: "Ahorro de agua",
    description: "Fórmulas sólidas que reducen el consumo hídrico."
  }
];

export const philosophyBullets = [
  "Preservamos vitaminas y minerales esenciales.",
  "Glicerina natural generada en el proceso."
];
