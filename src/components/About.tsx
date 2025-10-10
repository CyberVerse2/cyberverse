export default function About() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center px-4 md:px-0">
      <div className="text-white rounded-[2rem] md:rounded-[4.4rem] bg-gradient-to-br from-[#1E1E1E] to-[#03080F] min-h-[calc(100vh-20rem)] flex flex-col md:flex-row justify-between items-center p-6 md:p-20 gap-8 md:gap-y-10">
        <div className="md:ml-30 w-full md:w-[90%]">
          <h2 className="text-5xl md:text-9xl font-extrabold pb-3">About Us</h2>
          <p className="text-xl md:text-[2.8rem] w-full md:w-3/4 pt-5 font-normal">
            At Cyberverse Labs, We experiment, we ship, we break things, and we rebuild them better.
            Our playground is AI, crypto, and apps, but really, it's the edge of what's possible.
          </p>
          <a
            href="mailto:ejioforcelestine77@gmail.com?subject=Let's Build Together!"
            className="inline-block py-6 md:py-10 mt-12 md:mt-40 px-16 md:px-24 rounded-[3.7rem] bg-[var(--button-color)] text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity"
          >
            Let's Build!
          </a>
        </div>
        <img
          src="./about-img.svg"
          alt=""
          className="w-[90%] md:w-[75%] md:mr-15 self-end max-w-md md:max-w-none"
        />
      </div>
    </section>
  );
}
