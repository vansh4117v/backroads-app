import Tour from "./Tour";

const Tours = ({ toursData }) => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {toursData.map((item) => <Tour key={item.id} item={item} />)}
      </div>
    </section>
  );
};
export default Tours;
