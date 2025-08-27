import IconBar from "./IconBar";
import ComicsList from "./ComicsList";

const Main = ({comics, iconBarItems}) => {
  return (
    <main>
      <ComicsList comics={comics}/>
      <IconBar items={iconBarItems}/>
    </main>
  );
};

export default Main;
