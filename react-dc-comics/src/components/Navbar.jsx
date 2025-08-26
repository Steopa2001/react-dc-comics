
const Navbar = () => {
  const links = [
    {
      id: 1,
      label: "CHARACTERS",
      href: "#",
      current: false,
    },
    {
      id: 2,
      label: "COMICS",
      href: "#",
      current: true,
    },
    {
      id: 3,
      label: "MOVIES",
      href: "#",
      current: false,
    },
    {
      id: 4,
      label: "TV",
      href: "#",
      current: false,
    },
    {
      id: 5,
      label: "GAMES",
      href: "#",
      current: false,
    },
    {
      id: 6,
      label: "COLLECTIBLES",
      href: "#",
      current: false,
    },
    {
      id: 7,
      label: "VIDEOS",
      href: "#",
      current: false,
    },
    {
      id: 8,
      label: "FANS",
      href: "#",
      current: false,
    },
    {
      id: 9,
      label: "NEWS",
      href: "#",
      current: false,
    },
    {
      id: 10,
      label: "SHOP",
      href: "#",
      current: false,
    },
  ];

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
