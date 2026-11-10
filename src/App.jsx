import { useEffect, useState } from "react";

/* ==================================================================
   ODDKIT — One-product landing page
   Stack: React + Tailwind CSS
   Brand: Charcoal #111318 · Electric Lime #C7F52B · White · Grey #EDEFF1
   Fonts: Space Grotesk (headings) · Inter (body)
   Conversion: WhatsApp (+92 328 8768783)
================================================================== */

const WA_NUMBER = "923288768783";

const ORDER_MESSAGE =
  "Hi ODDKIT! I'm interested in the 360° Magnetic Phone Holder. Please share the price, delivery details, and phone compatibility.";

const COMPAT_MESSAGE =
  "Hi ODDKIT! Please help me check if the 360° Magnetic Phone Holder is compatible with my phone. My phone model is: ";

const waLink = (message) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

/* TODO: replace with the real selling price before publishing
   (and update PRICE_NUMBER used in the structured data). */
const PRICE = "Rs. 1650";
const PRICE_NUMBER = "1650";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Product Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
];

const FEATURES = [
  {
    title: "360° Adjustable Rotation",
    body: "Find a viewing angle that works for you. Adjust the holder to position your phone in portrait or landscape.",
    label: "Rotation close-up",
    icon: "rotate",
    src: "/360.jpg",
  },
  {
    title: "Magnetic Phone Attachment",
    body: "Attach and remove your phone conveniently using the magnetic holding system.",
    label: "Magnetic mount close-up",
    icon: "magnet",
    src: "/4.jpg",
  },
  {
    title: "Strong Suction-Lock Base",
    body: "The twist-lock suction base is designed to attach to compatible smooth surfaces for a secure mounting position.",
    label: "Suction base close-up",
    icon: "suction",
    src: "/5.jpg",
  },
  {
    title: "Adjustable Folding Arm",
    body: "Position your phone at a comfortable angle, then fold the holder down for a compact setup.",
    label: "Folding arm photo",
    icon: "fold",
    src: "/6.jpg",
  },
  {
    title: "Compact and Portable",
    body: "A practical accessory that doesn't take up unnecessary space in your car or on your desk.",
    label: "Compact form photo",
    icon: "compact",
    src: "/11.jpg",
  },
];

const USE_CASES = [
  {
    title: "Your Car",
    body: "Keep navigation conveniently positioned and your dashboard setup organised.",
    label: "In-car photo",
    src: "/2.jpg",
  },
  {
    title: "Your Workspace",
    body: "Position your phone beside your laptop for convenient viewing while working.",
    label: "Desk photo",
    src: "/3.jpg",
  },
  {
    title: "Your Everyday Space",
    body: "Use it wherever you have a suitable smooth surface and want your phone within view.",
    label: "Home photo",
    src: "/4.jpg",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Prepare the Surface",
    body: "Clean and dry a suitable smooth mounting surface.",
    label: "Step 1 photo",
    src: "/step1.jpg",
  },
  {
    n: "02",
    title: "Secure the Base",
    body: "Position the suction base and use its locking mechanism to secure it.",
    label: "Step 2 photo",
    src: "/step2.jpg",
  },
  {
    n: "03",
    title: "Attach and Adjust",
    body: "Attach your compatible phone magnetically and adjust the viewing angle.",
    label: "Step 3 photo",
    src: "/step33.jpg",
  },
];

const SPECS = [
  ["Product", "Magnetic Phone Holder"],
  ["Rotation", "360° adjustable"],
  ["Phone attachment", "Magnetic"],
  ["Mounting mechanism", "Twist-lock suction base"],
  ["Design", "Adjustable folding arm"],
  ["Finish", "Black"],
  ["Suitable applications", "Car, desk and compatible smooth surfaces"],
  [
    "Package contents",
    "Magnetic phone holder and compatible accessories as confirmed in the product box.",
  ],
];

const FAQS = [
  {
    q: "Does the holder work with all smartphones?",
    a: "The holder works with compatible magnetic phones and cases. Other smartphones may need a compatible metal ring accessory. Contact us with your phone model to confirm.",
  },
  {
    q: "Does it rotate?",
    a: "Yes. Its adjustable design allows 360° rotation for flexible viewing positions.",
  },
  {
    q: "Can I use it in my car?",
    a: "Yes. It is designed for suitable smooth dashboard or windshield mounting surfaces. Ensure it does not obstruct your view.",
  },
  {
    q: "Can I use it on my desk?",
    a: "Yes, provided the desk surface is suitable for the suction base.",
  },
  {
    q: "Will the suction base stick to every dashboard?",
    a: "Not necessarily. Suction performance depends on the surface. Smooth, clean and flat surfaces are generally more suitable than textured or porous surfaces.",
  },
  {
    q: "Is installation difficult?",
    a: "No complicated installation is needed. Clean the surface, secure the suction base and attach your compatible phone.",
  },
  {
    q: "How can I order?",
    a: "Simply message us on WhatsApp. We'll help you confirm compatibility, share the order details and guide you through the process.",
  },
  {
    q: "Can I see the product before ordering?",
    a: "Yes. Check the demonstration videos below or ask us for additional product footage on WhatsApp.",
  },
];

const VIDEOS = [
  {
    id: "car",
    title: "Real-Life Demonstration",
    body: "Watch the holder being used in an actual car.",
    src: "/1R.mp4",
    poster: "/poster1.png",
  },
  {
    id: "setup",
    title: "Magnetic Attachment & Suction-Lock",
    body: "See the phone attach, detach and the base lock onto a smooth surface.",
    src: "/2R.mp4",
    poster: "/poster2.png",
  },
];

/* ============================== ICONS ============================== */

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconRotate(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M21 12a9 9 0 1 1-3.2-6.9" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function IconMagnet(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M6 4v7a6 6 0 0 0 12 0V4" />
      <path d="M6 8h4M14 8h4" />
    </svg>
  );
}

function IconSuction(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <circle cx="12" cy="10" r="6" />
      <path d="M12 16v5M9 21h6" />
    </svg>
  );
}

function IconFold(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M8 5 4 9l4 4" />
      <path d="M16 19l4-4-4-4" />
      <path d="M4 9h9a3 3 0 0 1 3 3" />
      <path d="M20 15h-9a3 3 0 0 1-3-3" />
    </svg>
  );
}

function IconCompact(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <rect x="4" y="4" width="10" height="10" rx="2.5" />
      <path d="M14 14h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4" />
    </svg>
  );
}

function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} strokeWidth={2.4} {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconArrowDown(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} strokeWidth={2} {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" {...iconProps} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.05-.52-.1-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.09.54 4.14 1.58 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.41Z" />
    </svg>
  );
}

const FEATURE_ICONS = {
  rotate: IconRotate,
  magnet: IconMagnet,
  suction: IconSuction,
  fold: IconFold,
  compact: IconCompact,
};

/* ============================ PRIMITIVES ============================ */

function Media({
  src,
  alt = "",
  ratio = "aspect-[4/3]",
  tone = "light",
  rounded = "rounded-2xl",
  className = "",
}) {
  const tones =
    tone === "dark"
      ? "bg-[#181B22] ring-1 ring-white/10"
      : "bg-[#EDEFF1] ring-1 ring-black/5";

  return (
    <div className={`relative overflow-hidden ${rounded} ${ratio} ${tones} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

function WhatsAppButton({ href, children, variant = "lime", className = "" }) {
  const styles =
    variant === "lime"
      ? "bg-[#C7F52B] text-[#111318] hover:brightness-95 active:brightness-90"
      : "bg-[#111318] text-white hover:bg-black";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight shadow-sm transition sm:text-[15px] ${styles} ${className}`}
    >
      <IconWhatsApp className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}

function Eyebrow({ children, tone = "light" }) {
  const color = tone === "dark" ? "text-[#C7F52B]" : "text-[#111318]/50";
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${color}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#C7F52B]" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ============================== PAGE ============================== */

export default function OddkitPage() {
  useEffect(() => {
    /* --- SEO --- */
    document.title = "360° Magnetic Car Phone Holder in Pakistan | ODDKIT";

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Discover the ODDKIT 360° Magnetic Phone Holder with adjustable design and strong suction-lock base. A clever phone mounting accessory for your car and desk. Explore its features and order through WhatsApp."
    );

    /* --- Structured data (Product + Organization + FAQ) --- */
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "ODDKIT",
          slogan: "Small things. Smart upgrades.",
          url: "https://oddkit.pk",
          sameAs: ["https://www.instagram.com/oddkit.pk"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+923288768783",
            contactType: "sales",
            areaServed: "PK",
          },
        },
        {
          "@type": "Product",
          name: "360° Magnetic Phone Holder with Strong Suction Base",
          brand: { "@type": "Brand", name: "ODDKIT" },
          description:
            "A magnetic phone holder with 360° adjustable rotation, an adjustable folding arm and a twist-lock suction base for compatible smooth surfaces.",
          image: [
            "https://oddkit.pk/1.jpg",
            "https://oddkit.pk/2.jpg",
            "https://oddkit.pk/3.jpg",
          ],
          offers: {
            "@type": "Offer",
            priceCurrency: "PKR",
            price: PRICE_NUMBER,
            availability: "https://schema.org/InStock",
            url: "https://oddkit.pk/products/360-magnetic-phone-holder",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "oddkit-structured-data";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.getElementById("oddkit-structured-data")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111318] antialiased selection:bg-[#C7F52B] selection:text-[#111318]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <Videos />
        <ProblemSolution />
        <Features />
        <UseCases />
        <HowItWorks />
        <Compatibility />
        <Specifications />
        <Faqs />
        
        <FinalCta />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ========================== ANNOUNCEMENT ========================== */

function AnnouncementBar() {
  return (
    <div className="bg-[#111318] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2.5 text-center text-[11px] font-medium tracking-wide sm:text-xs">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7F52B]" aria-hidden="true" />
        Clever little upgrades for everyday life.
      </div>
    </div>
  );
}

/* ============================= HEADER ============================= */

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8">
        <a
          href="#home"
          className="font-display flex items-baseline text-xl font-bold tracking-tight sm:text-2xl"
        >
          ODDKIT
          <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-[#C7F52B]" aria-hidden="true" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#111318]/65 transition-colors hover:text-[#111318]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton
            href={waLink(ORDER_MESSAGE)}
            className="hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Chat with us
          </WhatsAppButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-[#111318] lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-black/5 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3.5 text-sm font-medium text-[#111318]/80 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton href={waLink(ORDER_MESSAGE)} className="mt-3 mb-3 w-full">
              Chat with us
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============================== HERO ============================== */

function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-[#111318] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#C7F52B]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Eyebrow tone="dark">ODDKIT Everyday Essentials</Eyebrow>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your Phone.
              <br />
              Your <span className="text-[#C7F52B]">Perfect Angle.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Meet the 360° Magnetic Phone Holder — a clever little upgrade that keeps your
              phone conveniently positioned while you drive, work or relax.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
              Featuring a magnetic phone attachment, adjustable design and a strong suction-lock
              base.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton href={waLink(ORDER_MESSAGE)} className="w-full sm:w-auto">
                ORDER ON WHATSAPP
                <IconArrowRight className="h-4 w-4" aria-hidden="true" />
              </WhatsAppButton>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline"
              >
                Explore the features
                <IconArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 text-xs text-white/45 sm:text-sm">
              Easy to use. Adjustable positioning. Compact design.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {["360° rotation", "Magnetic attachment", "Suction-lock base"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-white/65 sm:text-sm">
                  <IconCheck className="h-4 w-4 text-[#C7F52B]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product visual */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] bg-[#C7F52B]/10 blur-3xl"
            />
            <div className="relative">
              <Media
                src="/hero.jpg"
                tone="dark"
                ratio="aspect-[4/5]"
                rounded="rounded-[2rem]"
                alt="ODDKIT 360 degree magnetic car phone holder with adjustable folding arm and suction-lock base."
              />

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#C7F52B] px-4 py-1.5 text-sm font-bold text-[#111318]">
                  {PRICE}
                </span>
                <span className="text-xs leading-snug text-white/50">
                  360° Magnetic Phone Holder with Strong Suction Base
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================= PROBLEM → SOLUTION ======================= */

function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>The everyday problem</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Stop Searching for the Perfect Place to Put Your Phone.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#111318]/70">
              <p>
                Your phone is part of almost everything you do. Navigation, calls, music, work
                and everyday browsing.
              </p>
              <p>But keeping it in the right position isn't always convenient.</p>
              <p>
                The ODDKIT Magnetic Phone Holder gives your phone a dedicated place with an
                adjustable viewing angle and a magnetic attachment system.
              </p>
              <p className="font-semibold text-[#111318]">Less clutter. More convenience.</p>
            </div>
          </div>

          <Media
            src="/spaces.jpg"
            ratio="aspect-[4/3]"
            rounded="rounded-[1.75rem]"
            alt="Phone mounted on a car dashboard using the ODDKIT magnetic holder."
          />
        </div>
      </div>
    </section>
  );
}

/* ============================= FEATURES ============================= */

function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-[#EDEFF1]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Product features</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Small Design. Thoughtful Features.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
          {FEATURES.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon];
            return (
              <article
                key={feature.title}
                className="flex flex-col rounded-3xl bg-white p-5 ring-1 ring-black/5 transition-shadow hover:shadow-[0_10px_40px_-20px_rgba(17,19,24,0.35)] sm:p-6"
              >
                <Media
                  src={feature.src}
                  ratio="aspect-[16/10]"
                  rounded="rounded-2xl"
                  alt={feature.title}
                />

                <div className="mt-5 flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#C7F52B] text-[#111318]">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#111318]/65">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ USE CASES ============================ */

function UseCases() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Lifestyle</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            One Holder. More Possibilities.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {USE_CASES.map((useCase) => (
            <article
              key={useCase.title}
              className="group relative overflow-hidden rounded-3xl bg-[#111318]"
            >
              <Media
                src={useCase.src}
                tone="dark"
                ratio="aspect-[4/5]"
                rounded="rounded-3xl"
                alt={useCase.title}
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#111318] via-[#111318]/60 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold text-white">{useCase.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{useCase.body}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[#111318]/50 sm:text-sm">
          Always choose a suitable mounting surface and position that does not obstruct driving
          visibility or vehicle controls.
        </p>
      </div>
    </section>
  );
}

/* =========================== HOW IT WORKS =========================== */

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[#111318] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">How it works</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Set It Up in Three Simple Steps.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.n}>
              <Media
                src={step.src}
                tone="dark"
                ratio="aspect-[4/3]"
                rounded="rounded-2xl"
                alt={step.title}
              />
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold text-[#C7F52B]">{step.n}</span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{step.title}</h3>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 font-display text-lg font-semibold text-[#C7F52B] sm:text-xl">
          That's it. You're ready to go.
        </p>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-white/45 sm:text-sm">
          Phone compatibility may require a compatible magnetic case or the supplied metal ring
          accessory. Check the compatibility section before ordering.
        </p>
      </div>
    </section>
  );
}

/* ========================== COMPATIBILITY ========================== */

function Compatibility() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Compatibility</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Will It Work With Your Phone?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#111318]/65">
            The magnetic holder is designed for compatible magnetic phones and cases.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-6">
          <article className="rounded-3xl bg-[#EDEFF1] p-6 ring-1 ring-black/5 sm:p-8">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111318]/60">
              iPhone users
            </span>
            <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">
              MagSafe-equipped iPhones
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#111318]/65">
              Compatible MagSafe-equipped iPhones can attach directly, subject to model and case
              compatibility.
            </p>
          </article>

          <article className="rounded-3xl bg-[#EDEFF1] p-6 ring-1 ring-black/5 sm:p-8">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111318]/60">
              Android users
            </span>
            <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">
              Samsung, Pixel, Xiaomi &amp; more
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#111318]/65">
              Samsung, Google Pixel, Xiaomi, Vivo, Oppo, Tecno and other Android phones may require
              a compatible magnetic case or metal ring accessory.
            </p>
          </article>
        </div>

        <div className="mt-5 rounded-3xl border border-dashed border-[#111318]/15 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            Using a regular phone case?
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#111318]/65">
            A compatible metal ring accessory may be required to provide a magnetic attachment
            point.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-[#C7F52B] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Not sure whether your phone is compatible?
            </h3>
            <p className="mt-1.5 text-sm text-[#111318]/70">
              Send us your phone model and we'll help you check before ordering.
            </p>
          </div>
          <WhatsAppButton
            href={waLink(COMPAT_MESSAGE)}
            variant="dark"
            className="w-full shrink-0 sm:w-auto"
          >
            CHECK MY PHONE ON WHATSAPP
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

/* ========================== SPECIFICATIONS ========================== */

function Specifications() {
  return (
    <section className="bg-[#EDEFF1]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Product specifications</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            The Details
          </h2>
        </div>

        <dl className="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 sm:mt-12">
          {SPECS.map(([label, value], i) => (
            <div
              key={label}
              className={`grid gap-1 px-6 py-4 sm:grid-cols-3 sm:items-baseline sm:gap-6 sm:px-8 ${
                i !== SPECS.length - 1 ? "border-b border-black/5" : ""
              }`}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]/45">
                {label}
              </dt>
              <dd className="text-sm leading-relaxed text-[#111318]/80 sm:col-span-2">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* =============================== FAQS =============================== */

function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Got Questions? We've Got Answers.
          </h2>
        </div>

        <div className="mt-8 border-t border-black/10 sm:mt-10">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-black/10">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? "bg-[#C7F52B] text-[#111318]" : "bg-[#EDEFF1] text-[#111318]"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14" />
                        {!isOpen && <path d="M12 5v14" />}
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 text-sm leading-relaxed text-[#111318]/65 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-[#EDEFF1] p-6 sm:p-8">
          <p className="font-display text-base font-semibold sm:text-lg">
            Still have a question before ordering?
          </p>
          <p className="mt-1 text-sm text-[#111318]/60">
            Message us on WhatsApp — we usually reply quickly.
          </p>
          <WhatsAppButton href={waLink(ORDER_MESSAGE)} className="mt-4 w-full sm:w-auto">
            Chat with us on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

/* ============================== VIDEOS ============================== */

function Videos() {
  return (
    <section className="bg-[#111318] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">Product demonstrations</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Don't Just Take Our Word for It. See It in Action.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            A closer look at what makes this little accessory useful.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {VIDEOS.map((video, i) => (
            <article key={video.id} className="flex flex-col">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-2xl bg-[#181B22] ring-1 ring-white/10 sm:max-w-none">
                <video
                  className="h-full w-full object-cover"
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mx-auto mt-4 w-full max-w-[340px] sm:max-w-none">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C7F52B]">
                  Video {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-1 text-base font-semibold leading-snug tracking-tight">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/45">{video.body}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/40 sm:text-sm">
          Real product footage — no stock clips, no exaggerated claims.
        </p>
      </div>
    </section>
  );
}

/* ============================= FINAL CTA ============================= */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111318] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#C7F52B]/12 blur-[130px]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-28">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          A Little Upgrade Your Everyday Setup Will Appreciate.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Keep your phone conveniently positioned, enjoy flexible viewing angles and make your
          everyday setup a little more organized.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <WhatsAppButton href={waLink(ORDER_MESSAGE)} className="w-full sm:w-auto">
            GET YOUR ODDKIT PHONE HOLDER
            <IconArrowRight className="h-4 w-4" aria-hidden="true" />
          </WhatsAppButton>

          <p className="text-sm text-white/50">
            Questions before ordering?{" "}
            <a
              href={waLink(ORDER_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#C7F52B] underline-offset-4 hover:underline"
            >
              Chat with us on WhatsApp.
            </a>{" "}
            We're happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Product Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: waLink(ORDER_MESSAGE) },
  { label: "Shipping Policy", href: "#" },
  { label: "Return & Exchange Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function Footer() {
  return (
    <footer className="bg-[#0B0D11] text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="font-display flex items-baseline text-xl font-bold tracking-tight sm:text-2xl">
              ODDKIT
              <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-[#C7F52B]" aria-hidden="true" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#C7F52B]">
              Small things. Smart upgrades.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Discover clever accessories designed to make everyday life a little more convenient.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waLink(ORDER_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-[#C7F52B]"
                >
                  <IconWhatsApp className="h-4 w-4" aria-hidden="true" />
                  +92 328 8768783
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oddkit.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Instagram: @oddkit.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">© 2026 ODDKIT. All rights reserved.</p>
          <p className="text-xs text-white/35">Made in Pakistan · Ships nationwide</p>
        </div>
      </div>
    </footer>
  );
}

/* ========================= FLOATING WHATSAPP ========================= */

function FloatingWhatsApp() {
  return (
    <a
      href={waLink(ORDER_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ODDKIT on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#C7F52B] p-3.5 text-[#111318] shadow-[0_10px_30px_-8px_rgba(17,19,24,0.5)] transition hover:brightness-95 sm:bottom-6 sm:right-6"
    >
      <IconWhatsApp className="h-6 w-6" aria-hidden="true" />
      <span className="hidden pr-2 text-sm font-semibold sm:inline">Order on WhatsApp</span>
    </a>
  );
}