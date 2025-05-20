
const Services = ({serviceData}) => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {serviceData.map((item) => (
        <article key={item.id} className="service">
          <span className="service-icon">
            <i className={item.icon}></i>
          </span>
          <div className="service-info">
              <h4 className="service-title">{item.title}</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.
            </p>
          </div>
        </article>
        ))}
      </div>
    </section>
  );
};
export default Services;
