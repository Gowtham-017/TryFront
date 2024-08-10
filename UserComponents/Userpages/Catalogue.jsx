import Services from "./Services";
import "../Userstyles/Catalogue.css";
function Catalogue() {
    return (
        <>
        <div className="catalogue-page">
            <div className="title">
            <h2>Explore the Packages</h2>
            </div>
            <div className="quote">
            <p>
                “ Integrating new ideas and technologies into the fabric of SXSW is
                always something we strive to do.We were excited to work with
                Eventbase on this large-scale project has become such an important
                platform for us. ”
                <br />
                <span>
                --- Scott Wilcox, Chief Innovation Officer, South By Southwest
                </span>
            </p>
            </div>
            <div className="catalogue-items">
            <div className="item1">
                <div className="itemleft">
                <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg" className="about" width={500} height={730} />
                </div>
                <div className="itemright">
                <h1>Seamless Integration</h1>
                <br />
                <h3>
                    Eventify is an events & experiential management company
                    established by seasoned event professionals who have learnt.
                </h3>
                </div>
            </div>
            <div className="item1">
                <div className="itemright">
                <h1>Varieties of Choices</h1>
                <br />
                <h3>
                    Eventify is an events & experiential management company
                    established by seasoned event professionals who have learnt,{" "}
                </h3>
                </div>
                <div className="itemleft">
                <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-josh-sorenson-976866.jpg&fm=jpg" className="about" width={500} height={730} />
                </div>
            </div>
            <div className="service-container">
                <Services />
            </div>
            </div>
        </div>
        <div className="item2">
            <div className="left">
            <h3>
                Looking for <br />
                More?
            </h3>
            <p>Get Connected to Us</p>
            </div>
            <div className="right">
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe</button>
            </div>
        </div>
        </>
    );
}
export default Catalogue;
