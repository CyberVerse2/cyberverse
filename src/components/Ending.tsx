export default function Ending() {
  return (
    <section className="min-h-screen bg-black -mx-6 md:-mx-25 px-6 md:px-25 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180%] md:w-[140%] max-w-[150rem] mt-100 md:mt-40 opacity-80">
        <img src="./ending-circle-cut.png" alt="" className="w-full h-auto mix-blend-screen" />
      </div>

      <div className="relative z-10 text-center max-w-[140rem] mx-auto py-20 md:py-40 mt-170 md:mt-[55rem] px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-extrabold leading-none mb-4 md:mb-4 px-4 md:px-20">
          The Cyberverse is where creativity, code, & the impossible converge.
        </h1>
        <p className="text-xl md:text-[2.6rem] font-medium px-4">
          Every product is a window into the future, designed to make people say
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          "Wait, that's possible?"
        </p>
      </div>
    </section>
  );
}
