import services from './_lib/services';

export default function Services() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center p-8 border-solid border-4">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8">
        {services.map((service) => (
          <div key={service.title} className="card px-2 py-4">
            <h2 className="text-xl font-semibold text-center mb-6">
              {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
