export default function Talent() {
  return (
    <section id="works" className="container mx-auto py-20 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">The Talent</h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
        "You can't use up creativity. The more you use, the more you have in your significant mind."
      </p>

      <div className="flex justify-center items-center space-x-12 md:space-x-24">
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold text-accent">500k+</p>
          <p className="text-lg text-gray-400 mt-2">Subscribers</p>
        </div>
        <div className="text-center">
          <p className="text-5xl md:text-6xl font-bold text-accent">85%</p>
          <p className="text-lg text-gray-400 mt-2">Male Audience</p>
        </div>
      </div>
    </section>
  );
}
