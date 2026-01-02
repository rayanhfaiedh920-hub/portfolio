import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto py-12 px-4 flex flex-col md:flex-row items-center">
      {/* Left Column: Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Rayan Hfaiedh.
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-6">
          Founder & Influencer Marketing Agent, based in the DACH region.
        </p>
        <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
          I am a specialized agent who bridges the gap between hardware giants and high-reach creators, focusing on authenticity and technical expertise.
        </p>
        <div className="mt-8">
          <a href="#services" className="bg-accent text-gray-900 font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity">
            My Story
          </a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/portrait.png"
            alt="Rayan Hfaiedh"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
