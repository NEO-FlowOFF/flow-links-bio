export type BadgeColor =  "pink" | "neon" | "blue" | "mono" ;

export interface Badge {
  label: string;
  color: BadgeColor;
  pulse?: boolean;
}

export interface LinkItem {
  href: string;
  title: string;
  sub: string;
  icon: string;
  color: BadgeColor;
  badges?: Badge[];
  featured?: boolean;
  glitch?: boolean;
}

export interface LinkSection {
  label: string;
  cols: 1 | 2;
  links: LinkItem[];
  soon?: boolean;
}

export const sections: LinkSection[] = [
  {
    label: "01",
    cols: 2,
    links: [
      {
        href: "https://chat.neoflowoff.agency/",
        title: "Chat",
        sub: "Atendimento · SDR",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        color: "pink",
        badges: [{ label: "Live", color: "neon", pulse: true }],
        featured: true,
        glitch: true,
      },
      {
        href: "https://lp.neoflowoff.agency/",
        title: "Experience",
        sub: "Agency",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>`,
        color: "pink",
        badges: [{ label: "Build", color: "pink" }],
      },
      {
        href: "https://nsfactory.xyz/",
        title: "NSFactory",
        sub: "Fábrica de Tokens",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
        color: "pink",
        badges: [{ label: "Token", color: "pink" }],
      },
      {
        href: "https://flowpay.cash/",
        title: "FlowPay",
        sub: "Pagamentos",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M15 8.5c-.83-.5-1.87-.5-2.5-.5C10.57 8 9 9.12 9 10.5c0 1.5 1.5 2 3 2.5s3 1 3 2.5c0 1.38-1.57 2.5-3.5 2.5-.63 0-1.67-.12-2.5-.5"/><path d="M12 6v2M12 16v2"/></svg>`,
        color: "pink",
        badges: [{ label: "Cash", color: "neon" }],
      },
      {
        href: "https://neoflw.xyz/",
        title: "$NEOFLW",
        sub: "Token · Base",
        icon: "⬡",
        color: "pink",
        badges: [
          { label: "Live", color: "neon", pulse: true },
          { label: "ERC-20", color: "neon" },
        ],
      },
    ],
  },
  {
    label: "02",
    cols: 2,
    links: [
      {
        href: "https://agente.neoflowoff.agency/",
        title: "Game IA",
        sub: "On Telegram",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>`,
        color: "pink",
        badges: [{ label: "AI", color: "pink", pulse: true }],
      },
      {
        href: "https://neomello.eth.limo/",
        title: "Architect",
        sub: "neomello.eth",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4"/></svg>`,
        color: "pink",
        badges: [{ label: "IPFS", color: "pink" }],
      },
      {
        href: "https://neoprotocol.space/",
        title: "Protocol",
        sub: "Main Space",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        color: "pink",
        badges: [{ label: "Live", color: "neon", pulse: true }],
        featured: true,
      },
    ],
  },
  {
    label: "05",
    cols: 2,
    soon: true,
    links: [
      {
        href: "#",
        title: "Chat is a",
        sub: "Protocol",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>`,
        color: "mono",
      },
      {
        href: "#",
        title: "Neo Growth",
        sub: "System",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        color: "mono",
      },
      {
        href: "#",
        title: "WOD Game",
        sub: "Gamificação",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        color: "mono",
      },
      {
        href: "#",
        title: "FluxxDAO",
        sub: "DAO",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12h8M12 8v8"/></svg>`,
        color: "mono",
      },
    ],
  },
];
