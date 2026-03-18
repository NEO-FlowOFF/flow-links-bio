export type BadgeColor = "pink" | "neon" | "amber" | "blue" | "purple" | "mono" | "acqua";

export interface Badge {
  label: string;
  color: BadgeColor;
  pulse?: boolean;
}

export interface LinkItem {
  href: string;
  title: string;
  sub: string;
  icon: string;       // SVG string or emoji
  color: BadgeColor;
  badges?: Badge[];
  hero?: boolean;
  featured?: boolean;
}

export interface LinkSection {
  label: string;
  cols: 1 | 2;
  links: LinkItem[];
}

export const sections: LinkSection[] = [
  {
    label: "Principal",
    cols: 1,
    links: [
      {
        href: "https://neoflw.vercel.app/",
        title: "$NEOFLW Token",
        sub: "neoflw.vercel.app",
        icon: "⬡",
        color: "pink",
        hero: true,
        badges: [
          { label: "Live · Base Mainnet", color: "neon", pulse: true },
          { label: "ERC-20", color: "neon" },
        ],
      },
      {
        href: "https://lp.neoflowoff.agency/",
        title: "Faça seu Site",
        sub: "lp.neoflowoff.agency",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>`,
        color: "pink",
        featured: true,
        badges: [{ label: "Agency", color: "neon" }],
      },
      {
        href: "https://flowpay.cash/",
        title: "Link de Pagamentos",
        sub: "flowpay.cash",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M15 8.5c-.83-.5-1.87-.5-2.5-.5C10.57 8 9 9.12 9 10.5c0 1.5 1.5 2 3 2.5s3 1 3 2.5c0 1.38-1.57 2.5-3.5 2.5-.63 0-1.67-.12-2.5-.5"/><path d="M12 6v2M12 16v2"/></svg>`,
        color: "pink",
        featured: true,
        badges: [{ label: "💸 Economize nas taxas", color: "neon" }],
      },
      {
        href: "https://neomello.eth.limo/",
        title: "The Architect",
        sub: "neomello.eth.limo",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" stroke-width="1.8" stroke-linecap="round"><defs><linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FF00CC"/><stop offset="100%" stop-color="#9955ff"/></linearGradient></defs><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4"/></svg>`,
        color: "pink",
        featured: true,
        badges: [
          { label: "🌐 Interplanetary Gate", color: "neon" },
          { label: "IPFS", color: "neon" },
        ],
      },
    ],
  },
  {
    label: "Treinamento",
    cols: 2,
    links: [
      {
        href: "https://tiktokshop.up.railway.app/",
        title: "NEØ TikTok Shop",
        sub: "tiktokshop.railway.app",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>`,
        color: "pink",
      },
      {
        href: "#",
        title: "Use IA",
        sub: "proia.vercel.app",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>`,
        color: "mono",
        badges: [{ label: "Em breve", color: "neon", pulse: false }],
      },
    ],
  },
  {
    label: "Ferramentas",
    cols: 1,
    links: [
      {
        href: "https://neo-convert.site/",
        title: "Converta PDFs",
        sub: "neo-convert.site",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>`,
        color: "mono",
      },
    ],
  },
  {
    label: "Projetos",
    cols: 2,
    links: [
      {
        href: "#",
        title: "Open Source",
        sub: "flowpaycore.com",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        color: "pink",
        badges: [{ label: "Soon", color: "neon" }],
      },
      {
        href: "#",
        title: "Gamificação",
        sub: "wod-landing.vercel.app",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        color: "pink",
        badges: [{ label: "Em breve", color: "neon", pulse: false }],
      },
      {
        href: "#",
        title: "SaaS Tokenization",
        sub: "nsfactory.xyz",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        color: "pink",
        badges: [{ label: "Soon", color: "mono", pulse: false }],
      },
      {
        href: "https://neoprotocol.space/",
        title: "Main Space",
        sub: "neoprotocol.space",
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        color: "pink",
        badges: [{ label: "Live", color: "neon", pulse: true }],
      },
    ],
  },
];
