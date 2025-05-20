const Tour = ({ item }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={"./images/" + item.img} className="tour-img" alt="" />
        <p className="tour-date">{item.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{item.title}</h4>
        </div>
        <p>{item.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {item.country}
          </p>
          <p>{item.days} days</p>
          <p>from ${item.amount}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
