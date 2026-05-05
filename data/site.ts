export type Product = {
  name: string;
  price: string;
  tag: string;
  image: string;
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/products", label: "Productos" },
  { href: "/sustainability", label: "Sostenibilidad" },
  { href: "/contact", label: "Contacto" }
];

export const products: Product[] = [
  {
    name: "Jabón de Lavanda y Arcilla",
    price: "$18.00",
    tag: "Calmante",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaPAcTJquTpgDgVU0xOwTfdWR0y0OIJ6oJj2o_yXPOSsS_DWbHwSyqYbhL-n0G9PEb3_-xIA4AvaDC-_I-DJkoGuEnHmHBSB_pFwWKMWmpTr71z0h30WdRZ577KoLEd9lzwdzS4DbcTvy3HMdh5ujsmdSOjCg-JOHUy0cAZC92F0k1Bb2s_t-0I85J6ZW7AUap4jFr_D98SZupS6oCNsg2VJbb7H5HWDxNge7wOgFQJ4xCHYZqc25roIc5LcrXPByAaNXKGIpgPenj"
  },
  {
    name: "Jabón de Caléndula",
    price: "$16.00",
    tag: "Reparador",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuLfRmRDUJESKgRBrymU-tMaWSUInvZeTaC_dP--JyOBFs-vQgqzJhbFZQDqtTnVOwqLlgSfG-akN41Wc4VG8p-WRnOTUtpAE7th7nqp9Kh61CC6bCDeBgo-3HBRg0nRaZMmO9O3JtKQ9GWAB4_YDp-2SBmma9O910hiRcnXoobV3Yxx2PIRRecsQtdqdf6g2o_IGGvD7bF7LBbAWrO113J5q7BQRTqGZwv7bNrfQY5gOY4SwC9rYwUjC4k0gsXM2oUPLPT5iXbmlr"
  },
  {
    name: "Jabón Depurante de Carbón",
    price: "$19.00",
    tag: "Purificante",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfL4Qflj9RMb0fF8KBJ6VVisHY2bLCFn91xl1GAaj9yhY4E7TcRPBLBo0mU-FQfb5X3LCe0rjtwZ2JBtL4sL5HnfQBTA30Rg7fZX2ZJpGSrWjN9jhQzGYIo5L9j6FC7k0NNAnn5Rk1JdM3olt83afSfbTxxX2LGHXtnYTSXUSrDuV8NserIxim654xgIf8WeagruW8n2z96fPAxJn9gXG3pkuYTQVYe9BIHhc69-3dQAfleNgD7Se_Jr8V-dYKt_evCr7JPSnP1m1W"
  },
  {
    name: "Miel y Avena Suave",
    price: "$17.00",
    tag: "Hidratante",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAO4FirQmoH_5JkFXvSyfJkbGJko3bkTYnDpTi_yxpJgVlxV2IFvs98P4Esoh5Y6ChMvR1hP7i53nZGsggqIF44VVBlGnBumz02AITxegay-QX6NVt-W73_2KSqeYy-gUU1Qa9_pSzFhvFHP544pd7q1RCMmiq7axXxNsA6O-jeVTE7P0xAmOgB1ZPrT4b5s13T-HjmJPMFGFRAeSoNYTYwVRwuoMPCtzL4ENOirXNK5Jc7fn6Q00RFynw5DlYVnjAyO4ewmcjB72Bn"
  },
  {
    name: "Eucalipto y Árbol de Té",
    price: "$18.00",
    tag: "Refrescante",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKvN7RQ1M1G9kAU3Gyz_b80Iiit6_rlMdUA5IMmPfG-691hmj5Er83so3VfZhmxjHFVgoRKf-6eWS4HewuJ_DXYpvEriVBQiBR9GAP7dn_rjA15uEzw9oNynGJKN1KerYkdroNHEoAPWGicG5mAvmsJTNk4OYmkw7PxKbYfJcv_N2iaJTRAefUs2TJtYD8A3I4HUOr9QFN1njC7t4RUDMA0sMBYMOsDtaMDw9GJVt0BxrB0NeQwaN-26c1-1aivbdLbAN-uwkqd-Vf"
  },
  {
    name: "Rosas y Arcilla Rosa",
    price: "$20.00",
    tag: "Exfoliante",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh_BTsEeLJ_Oe0aCsLyw0yisxFOb9sRDzSsjkmgQkgOIeHd6vRSvMTRZk26vj-HjwoTY_OoA7iBvxzTkTfFHvz2jDje9pAtP8arH1El2pvhahYs513-pciTCQsS2ukFg-o71IXED9K9eIUQ3yF35kR9pD-4vs6JQP05OaPoFQkpdel1DPJQBJSTDEZmeJPds8N_DAihMI8PCxf3XFrkc0ZHrFtnx-FjPFBcJTlZhu0DFjFVfe4QETJ6AzZVY09lohJY5VtMBsnXUlk"
  }
];

export const imageSet = {
  homeHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPfpLsNkRiExULNrCLv2lV-ONx8K9sN4G-vpt_nHfyjf28VHM5zG1Cqdt96cLTWchZGlmr2nklDjx3gyUbeNJ3g7iDvyMOZYNJHev8-x5c-4GVscQXc88idHK2JWqQNGC1WQA_CJhs8dKDmutMRhZzyC8TwJmyfreMt4OEfzscBRBizUnKAWXj5bb2S0v5kbS3WgfV3I0jn9PI1bwLGy21HK0DfV1zm64FIyv5PRsmjUPbHFgaJv_Uk9bIRVHawmb3DRRKOnTsgUJX",
  botanicals:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCAs63V0zuX51FS3y7lhyksoZPoWzyLvuUpROfL7mpN-bdbUbaEgK7LYIhZf-RJZD_lT-AMR-T6QaiwYoouRJSnp2CCJ7SS9UpRu-6uq9NqdbcQA7H0cfW7yvbCT_YBdQcmVl_zeqK7CszGkJZMtE9ufpzPEsDOzd4ZQqxQUXbUTZAqqlXVNejyb5QBUA4--nR0J6XOmi6_rgiWsAwvvDfXoMdRH4tDE9OGY6lAkFH2RSn1SPFnEiLVY8IIRzrMBVUkIewVdW3jgNSE",
  forest:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmr_0dzuHz3NSm4tvJlXrar_PC-NMp6_49zm8STkQEwhjRnnLg3yKDJjB-oNKP9W5rwg_DsT-4BSNgngbjPioUDpPTY7tA1mOvqMSurWAGlYy2vNNPCo_0Rs23lpCBe1v7qC5qC3JEXWX0zh0pObqtj8GwxKOEehz2pmUR3zCdfqoZJMw4TnD_fAc9nWaVuyOWRozJ-cjR5IUsnGOsOn1hMa6is1mWNEXhyHag30b9lU_hIezCMajZryCi0N2J13vI-pH8tJxtnjUK",
  packaging:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCM-25zlMUBO3aO8Fh569st1Vrx3oztFYy-BqC9SFzTw0lx4arOE4q_rWRTg-cbldqZZ4dJvFJMw1tRzWKQ5RDIX6Vb298KJrUYhuIzRdBYhDRWCcwNjpz_UmM_sRIdIvX0P508bBvrqR_EeZlmvK3A2wjyv2A5Cln9H5cH66fpPLX7oDCf30-X_XgmU0Cr6uBGK_pqv7GtQSstWXWKpEHNWCNw2QdcC31_vlLtOV4aTAKyA3fc0Mr5a0IcSwOxdt7_L4oHDkHgpbsa",
  productsHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6QDrw1dQQos7WgVaVgCjxMzOFOIQ9Gj3kuGzTh_Po9-DbwhkCmdL2CQu8m_-5xe5q9tXGDInDXaKzZkgvOApReXzACh3zbRL_Atm6i9VRdFbDgZIfD6hH8X5kK9arEbm2bfuEregvOSqRqlixrao05iLzecP6KOj4XOkTVdV3jcPD3J4smotTQTCSFWJHOZ7hQGifu-tWHg6oZtrInwxn9eYmXw-Fg3UqlaSKoFPYXk27W4C7GBWiIKCKIpV4mq7Ut_7ebJTjmm8",
  contact:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmRzLBYkedLVQI9WkV8k42K5K68GLJpSwiqh7ABTYnrMIrBVYZEPfRTjQoD-acNJi-TFZUfybWCLFu3qfOuRYWPd1_-9-2-Sn-avba8Pr40lFfoMbBxDVCOUp4kh23EexKYpF8wWC3mSTNRUYusYY9k2lK7v4BIvLoM5qDdDyPjJhTZpR6Z4u6iXL_UtyIij3YQKI2YhM5l2jKqQhQYCNRMBYlgErYjxbzpUfFtr-H0Z8jMkWqELS83DPWkmIE4kyUGAADUUwTXix0",
  map:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCrac8QSQnbFK3uvg0Z_ezxQ09gBesX5338sK9qQq5nd__mE1VoCHD-YfwJEpY4ONbsMvXg7IqhsB7-fnd_w9EZ4l7CY4u08DPmAeC2bkXjCvwqRY5PoYki5kiuS7xnPgQEZ2XdohK9ydocwSXLEbTVgHJZVI0dLveRGcq0ybsDESdJmjRR1jo_da5brVsLSi32dtvQ8JVwlGaiDDGy4DJOZWzWgTgRp7xRFXlaB4rMXcoDxrMWMFDgWFAaicia-dNEKPVJbyp0o5Bq"
};
