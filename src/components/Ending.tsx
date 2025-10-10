export default function Ending() {
  return (
    <section className="min-h-screen bg-black -mx-25 px-25 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-[150rem] -mt-32 opacity-80">
        <img src="./ending-circle-cut.png" alt="" className="w-full h-auto mix-blend-screen" />
      </div>

      <div className="relative z-10 text-center max-w-[140rem] mx-auto py-40 mt-100">
        <h1 className="text-[7rem] font-extrabold leading-none mb-4 px-20">
          The Cyberverse is where creativity, code, & the impossible converge.
        </h1>
        <p className="text-[2.6rem] font-medium">
          Every product is a window into the future, designed to make people say
          <br />
          "Wait, that's possible?"
        </p>
      </div>
    </section>
  );
}
