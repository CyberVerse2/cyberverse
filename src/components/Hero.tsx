export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Base gradient background - cyan wash over entire section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
      bg-gradient-to-b from-[#0a2942] via-[#051826] to-black"
      />

      {/* TOP spotlight: very bright, wide cone */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-25vh] h-[80vh]
      bg-[radial-gradient(ellipse_140%_100%_at_50%_-30%,rgba(6,182,212,0.9)_0%,rgba(14,165,233,0.65)_20%,rgba(56,189,248,0.35)_40%,transparent_68%)]"
      />

      {/* BOTTOM glow: intense multi-layer glow around planet */}
      {/* Layer 1: Purple core */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-20vh] h-[100vh]
      bg-[radial-gradient(ellipse_45%_60%_at_50%_10%,rgba(139,92,246,0.5)_0%,transparent_60%)]
      blur-[120px]"
      />

      {/* Layer 2: Bright cyan ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-20vh] h-[100vh]
      bg-[radial-gradient(ellipse_55%_65%_at_50%_8%,rgba(6,182,212,1)_0%,rgba(14,165,233,0.8)_12%,rgba(56,189,248,0.4)_30%,transparent_65%)]
      blur-[100px]"
      />

      {/* Side darkening for contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
      bg-[radial-gradient(55%_100%_at_0%_50%,rgba(0,0,0,0.7)_0%,transparent_45%),radial-gradient(55%_100%_at_100%_50%,rgba(0,0,0,0.7)_0%,transparent_45%)]"
      />

      {/* === Your content === */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="font-extrabold leading-[0.95] text-[clamp(3.2rem,8vw,10rem)] py-10">
            <span className="block">Building at the Edge</span>
            <span className="block">of possibilities.</span>
          </h1>

          <div className="text-3xl">
            <p>Cyberverse is a product studio creating apps that</p>
            <p className="pt-3 pb-20">push the limits of AI, crypto, and the internet itself.</p>
          </div>

          <button className="py-8 px-32 rounded-[3.7rem] bg-[var(--button-color)] text-3xl font-bold">
            Let's Build!
          </button>
        </div>

        {/* Your bottom image */}
        <img
          src="/hero-circle-cut.png"
          alt=""
          className="mt-auto mx-auto w-[min(1000px,100%)] pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
