export default function About() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="text-white  rounded-[4.4rem] bg-gradient-to-br from-[#1E1E1E] to-[#03080F] min-h-[calc(100vh-20rem)] flex justify-between items-center p-20 gap-y-10">
        <div className="ml-30 w-[90%]">
          <h2 className="text-9xl font-extrabold pb-3">About Us</h2>
          <p className="text-[2.8rem] w-3/4 pt-5  font-normal">
            At Cyberverse Labs, We experiment, we ship, we break things, and we rebuild them better.
            Our playground is AI, crypto, and apps, but really, it’s the edge of what’s possible.
          </p>
          <button className="py-10 mt-40 px-24 rounded-[3.7rem] bg-[var(--button-color)] text-3xl font-bold">
            Let's Build!
          </button>
        </div>
        <img src="./about-img.png" alt="" className="w-[75%] mr-15 self-end" />
      </div>
    </section>
  );
}
