
const Navbar = ({links}) => {

  return (
    <div className="container">
      <img src='/img/dc-logo.png' alt="logo" />
      <div className="list-header">
        <ul>
          {links.map(link => {
            const {id, href, current, label} = link;
            return (
              <li key={id}>
                <a href={href} className={current === true ? 'border' : ''}>{label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
