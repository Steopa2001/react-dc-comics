import Comicscard from "./Comicscard";


const ComicsList = ({comics}) => {

  return (
    <div className="cont-jumbo">
      <div id="jumbotron">
        <div className="img"></div>
      </div>

      <div className="container-black">
        <div className="row">
          {comics.map((comic) => {
            return (
              <div className="col-15" key={comic.id}>
             <Comicscard comic={comic}/>
              </div>
            );
          })}
        </div>
        <div className="btn-jumbo">
        <button className="text-btn">LOAD MORE</button>
      </div>
      </div>

    </div>
  );
};

export default ComicsList;
