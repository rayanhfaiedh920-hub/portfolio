export default function Talent() {
  return (
    <section className="py-20 bg-gray-900 text-white w-full text-center">
      <h2 className="text-3xl font-bold">The Talent</h2>
      <div className="mt-8 max-w-4xl mx-auto text-lg">
        <p className="text-2xl text-tech-blue mb-4">
          Exclusive access to a 500k+ subscriber Tech/Gaming creator.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div>
            <p className="text-4xl font-bold">85%</p>
            <p>Male Audience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">18-34</p>
            <p>Age Range</p>
          </div>
          <div>
            <p className="text-4xl font-bold">High</p>
            <p>Engagement in DACH Region</p>
          </div>
        </div>
        <div className="mt-12">
          <a href="#" className="bg-tech-blue hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg">
            Download Creator Media Kit
          </a>
        </div>
      </div>
    </section>
  );
}
