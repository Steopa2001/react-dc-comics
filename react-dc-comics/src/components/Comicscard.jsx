const Comicscard = ({comic}) => {
    const {thumb, title} = comic;
  return (
    <div className="comics-card">
      <img src={thumb} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Comicscard;
