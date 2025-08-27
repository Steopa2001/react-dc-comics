
const IconBar = ({items}) => {

  return (
    <div className="cont-blue">
      <div className="container-blue">
        <div className="list-icon">
         <ul>
          {items.map((item, i) => {
            return (
              <li key={i}>
                <img src={item.src} alt={item.label} />
                <p>{item.label}</p>
              </li>
            )
          })}
         </ul>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
