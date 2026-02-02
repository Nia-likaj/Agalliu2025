// src/components/sections/Portfolio/PortfolioCollections.tsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"; // Shto këtë për navigim

type Collection = {
  id: string;
  title: string;
  category: string;
  cover: string;
  thumbs: string[];
  // total: number; // HIQET
};

const collections: Collection[] = [
  {
    id: "scissor-18m",
    title: "Platformë gërshërë 18m",
    category: "Platforma",
    cover: "/assets/portfolio/platforma/scissor-18m-1.jpg",
    thumbs: [
      "/assets/portfolio/platforma/scissor-18m-2.jpg",
      "/assets/portfolio/platforma/scissor-18m-3.jpg",
    ],
    // total: 3,
  },
 {
    id: "parquet-works",
    title: "Punime Parketi",
    category: "Punime Parketi",
    cover: "/assets/portfolio/dru/parket-2.jpg",
    thumbs: [
      "/assets/portfolio/dru/parket-2.jpg",
      "/assets/portfolio/dru/parket-3.jpg",
      "/assets/portfolio/dru/parket-4.jpg",
    ],
    // total: 8,
  },
  {
    id: "electric-12m",
    title: "Platformë elektrike 12m",
    category: "Platforma",
    cover: "/assets/portfolio/platforma/electric-12m-2.jpg",
    thumbs: [
      "/assets/portfolio/platforma/electric-12m-3.png",
      "/assets/portfolio/platforma/electric-12m-4.png",
    ],
    // total: 6,
  },
  {
    id: "wood-koromano",
    title: "Punime Koromanos me dru",
    category: "Punime me dru",
    cover: "/assets/portfolio/dru/koromano-3.jpg",
    thumbs: [
      "/assets/portfolio/dru/koromano-2.jpg",
      "/assets/portfolio/dru/koromano-1.jpg",
      "/assets/portfolio/dru/koromano-4.jpg",
    ],
    // total: 9,
  },
  {
    id: "wood-other",
    title: "Punime të tjera me dru",
    category: "Punime me dru",
    cover: "/assets/portfolio/dru/dru-1.jpg",
    thumbs: [
      "/assets/portfolio/dru/dru.jpg",
      "/assets/portfolio/dru/dru-2.jpg",
    ],
    // total: 9,
  },
  {
    id: "painting-airport",
    title: "Lyerje – Aeroporti Vlorë",
    category: "Lyerje",
    cover: "/assets/portfolio/lyerje/aeroport-vlore-1.jpg",
    thumbs: [
      "/assets/portfolio/lyerje/aeroport-vlore-2.png",
      "/assets/portfolio/lyerje/aeroport-vlore-3.png",
      "/assets/portfolio/lyerje/aeroport-vlore-4.png",
    ],
    // total: 14,
  },
  {
    id: "painting-metal",
    title: "Lyerje konstruksion metalik",
    category: "Lyerje",
    cover: "/assets/portfolio/lyerje/konstruksion-metalik-1.jpg",
    thumbs: [
      "/assets/portfolio/lyerje/konstruksion-metalik-2.jpg",
      "/assets/portfolio/lyerje/konstruksion-metalik-3.jpg",
      "/assets/portfolio/lyerje/konstruksion-metalik-4.jpg",
    ],
    // total: 8,
  },
  {
    id: "painting-indoor",
    title: "Lyerje ambientesh të brendshme",
    category: "Lyerje",
    cover: "/assets/portfolio/lyerje/lyerje-1.jpg",
    thumbs: [
      "/assets/portfolio/lyerje/lyerje-2.jpg",
      "/assets/portfolio/lyerje/lyerje-3.jpg",
      "/assets/portfolio/lyerje/lyerje-4.jpg",
    ],
    // total: 8,
  },
  {
    id: "painting-outdoor",
    title: "Lyerje ambientesh te jashtme",
    category: "Lyerje",
    cover: "/assets/portfolio/lyerje/lyerje-Jasht-5.jpg",
    thumbs: [
      "/assets/portfolio/lyerje/lyerje-Jasht-3.jpg",
      "/assets/portfolio/lyerje/lyerje-Jasht-2.jpg",
    ],
    // total: 8,
  },
   {
    id: "boom-25m",
    title: "Platformë me krahë 25m",
    category: "Platforma",
    cover: "/assets/portfolio/platforma/boom-25m-1.jpg",
    thumbs: [
      "/assets/portfolio/platforma/boom-25m-2.png",
  
    ],
    // total: 3,
  },
  
];

export default function PortfolioCollections() {
  const [active, setActive] = useState<string>("Të gjitha");
  const [modal, setModal] = useState<{ open: boolean; images: string[]; title: string; idx: number }>({
    open: false,
    images: [],
    title: "",
    idx: 0,
  });
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const base = ["Të gjitha"];
    const uniq = Array.from(new Set(collections.map((c) => c.category)));
    return base.concat(uniq);
  }, []);

  const filtered = useMemo(() => {
    if (active === "Të gjitha") return collections;
    // Filtro vetëm koleksionet që i përkasin kategorisë aktive, pa ndryshuar renditjen
    return collections.filter((c) => c.category === active);
  }, [active]);

  // Modal close handler
  const closeModal = () => setModal({ open: false, images: [], title: "", idx: 0 });

  // Modal next/prev
  const nextImg = () =>
    setModal((m) => ({ ...m, idx: (m.idx + 1) % m.images.length }));
  const prevImg = () =>
    setModal((m) => ({ ...m, idx: (m.idx - 1 + m.images.length) % m.images.length }));

  return (
    <section
      className="w-full min-h-screen bg-slate-50 relative"
      style={{
        // Vendos background image të zbehtë pas kartave
        backgroundImage: `url('public/assets/hero/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Shto një overlay të bardhë të tejdukshëm për të mos e bërë shumë të fortë
      }}
    >
      {/* Overlay për të zbutur background-in */}
      <div
        className="absolute inset-0 z-0"
        style={{ 
          background: "rgba(43, 30, 12, 0.46)",
          backdropFilter: "blur(1px)",
        }}
      />
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full flex items-center justify-between px-3 sm:px-8 py-3 sm:py-4 bg-black/90 shadow-md backdrop-blur-md overflow-hidden rounded-b-2xl">
        {/* Orange gradient edges */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-orange-500/40 via-transparent to-orange-500/40" />
        {/* Logo & Emri */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-[160px] sm:min-w-[260px] relative z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border-2 border-orange-500 shadow">
            <img
              src="/assets/brand/AgalliuLogo_NoBackground.png"
              alt="Agalliu 2025 Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-bold text-white leading-tight">Agalliu 2025</span>
            <span className="text-xs sm:text-sm text-orange-400 font-semibold leading-tight">
              Punime • Mirëmbajtje • Shërbime
            </span>
          </div>
        </div>
        <div className="flex-1" />
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 sm:px-7 sm:py-2 border-2 border-orange-500 text-orange-500 bg-white/10 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition text-xs sm:text-base whitespace-nowrap flex items-center"
        >
          Kthehu te Home
        </button>
      </nav>
      {/* Subheading */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-8 pb-0">
        {/* Fshihet paragrafi me fjalinë */}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6">
        {/* Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-8">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "shrink-0 rounded-full px-5 py-2 text-sm font-medium transition border",
                  isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow"
                    : "bg-white text-slate-700 hover:bg-orange-50 border-slate-200",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const allImages = [item.cover, ...item.thumbs];

            return (
              <article
                key={item.id}
                className="group rounded-3xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden cursor-pointer transition hover:shadow-2xl hover:-translate-y-1"
                onClick={() =>
                  setModal({ open: true, images: allImages, title: item.title, idx: 0 })
                }
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={item.cover.startsWith("/") ? item.cover : "/assets/" + item.cover.replace(/^assets\//, "")}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  {/* Thumbs */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {item.thumbs.slice(0, 3).map((src, idx) => (
                      <div key={idx} className="overflow-hidden rounded-xl">
                        <img
                          src={src.startsWith("/") ? src : "/assets/" + src.replace(/^assets\//, "")}
                          alt={`${item.title} ${idx + 1}`}
                          className="h-16 w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Footer */}
                  <div>
                    <p className="text-lg font-semibold text-slate-900 leading-tight">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
            Nuk ka projekte në këtë kategori.
          </div>
        )}
      </div>

      {/* Modal for gallery */}
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl flex flex-col items-center p-8 sm:p-10"
            style={{
              width: "min(95vw, 800px)",
              maxWidth: "95vw",
              minHeight: 420,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Mbyll"
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
            <div className="mb-6 text-2xl sm:text-3xl font-bold text-slate-900 text-center">
              {modal.title}
            </div>
            <div className="flex items-center gap-4 w-full justify-center">
              <button
                onClick={prevImg}
                className="text-3xl px-3 py-1 rounded-full bg-white/80 hover:bg-orange-100 transition border border-slate-200 shadow"
                aria-label="Prev"
                style={{ minWidth: 40 }}
              >
                ‹
              </button>
              <div className="flex justify-center items-center">
                <img
                  src={modal.images[modal.idx]}
                  alt={modal.title}
                  style={{
                    width: "min(90vw, 600px)",
                    height: "min(60vw, 400px)",
                    objectFit: "cover",
                    borderRadius: 24,
                    background: "#eee",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
                  }}
                  className="shadow"
                />
              </div>
              <button
                onClick={nextImg}
                className="text-3xl px-3 py-1 rounded-full bg-white/80 hover:bg-orange-100 transition border border-slate-200 shadow"
                aria-label="Next"
                style={{ minWidth: 40 }}
              >
                ›
              </button>
            </div>
            <div className="mt-6 text-base text-slate-600 text-center">
              Foto {modal.idx + 1} / {modal.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}