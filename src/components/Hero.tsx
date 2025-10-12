export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#030F1B] text-white overflow-hidden -mx-6 md:-mx-25">
      {/* Radial gradient positioned to create dark navbar area at top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
      bg-[radial-gradient(ellipse_130%_90%_at_50%_25%,#07629E_0%,rgba(7,98,158,0.5)_35%,rgba(7,98,158,0.2)_60%,transparent_85%)]"
      />

      {/* === Your content === */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6 md:px-0">
        <h1 className="font-extrabold leading-[0.95] text-[clamp(3.2rem,8vw,10rem)] py-10 max-w-[95vw]">
          <span className="block">Building at the Edge</span>
          <span className="block">of possibilities.</span>
        </h1>

        <div className="text-xl md:text-3xl px-4">
          <p>Cyberverse is a product studio creating apps that</p>
          <p className="pt-3 pb-12 md:pb-20">
            push the limits of AI, crypto, and the internet itself.
          </p>
        </div>

        <a
          href="mailto:ejioforcelestine77@gmail.com?subject=Let's Build Together!"
          className="py-6 md:py-8 px-16 md:px-32 rounded-[3.7rem] bg-[var(--button-color)] text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity"
        >
          Let's Build!
        </a>
      </div>

      {/* Your bottom image - positioned absolutely */}
      <img
        src="/hero-circle-cut.png"
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(1600px,140%)] h-[25rem] md:h-[45rem] object-cover object-top pointer-events-none select-none mix-blend-lighten"
      />
    </section>
  );
}
