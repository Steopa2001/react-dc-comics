
import comics from "../assets/img/buy-comics-digital-comics.png";

const Main = () => {
    return (
        <main>
            <div className="cont-black">
                <div className="container-black">
                    <div className="main-text">
                         <h2>__&gt; Content goes here &lt;__</h2>
                    </div>
                </div>
            </div>
            <div className="cont-blue">
                <div className="container-blue">
                    <div className="list-icon">
                        <ul>
                        
                            <li>
                                <img src={comics} alt="" />
                                <p>DIGITAL COMICS</p>
                            </li>
                            <li>
                                <img src={comics} alt="" />
                                <p>DIGITAL COMICS</p>
                            </li>
                            <li>
                                <img src={comics} alt="" />
                                <p>DIGITAL COMICS</p>
                            </li>
                            <li>
                                <img src={comics} alt="" />
                                <p>DIGITAL COMICS</p>
                            </li>
                            <li>
                                <img src={comics} alt="" />
                                <p>DIGITAL COMICS</p>
                            </li>
                           
                         
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;