import { Link } from "react-router-dom";
import image1 from "./image/img1.png";
import React, { useState } from "react";
import {
  faTimes,
  faBars,
  faMagnifyingGlass,
  faHeart,
  faPhone,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/NavBar2.css";
import { useEffect } from "react";
import "./css/NavBar.css";
import "./css/NavBar3.css";

import {
  faAngleDown,
  faAngleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import img1 from "./image/rated.png";
import img2 from "./image/garentee.png";
import img3 from "./image/calander.png";
import img4 from "./image/trekker.png";

import img11 from "./image/homeimg.jpg";
import "./css/HomePage.css";

import "./css/HomeContent.css";

import { faAngleUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import imgg12 from "./image/card.webp";
import imgg13 from "./image/cardicon.png";

export default function NavBar2() {
  const [menuu, setMenuu] = useState(false);

  // homecontent start

  const [toggle, setToggle] = useState(false);
  const [showmore, setShowmore] = useState(false);
  const [dropbox, setDropbox] = useState("Select");
  const [hide, setHide] = useState(false);

  function togg() {
    setToggle(!toggle);
  }
  function show() {
    setShowmore(!showmore);
  }
  const handleChange = (event) => {
    setDropbox(event.target.value);
  };

  useEffect(() => {
    const Handleonscroll1 = () => {
      setHide(window.innerWidth > 747);
    };
    window.addEventListener("scroll", Handleonscroll1);
    return () => window.removeEventListener("scroll", Handleonscroll1);
  });

  return (
    <div>
      {/* navbar1 start */}

      <div>
        <div id="d3">
          <div className="d1">
            <li id="li1">
              Request your free brochure for adventure inspiration.
            </li>
            <li>
              <Link id="li2">
                {" "}
                Order Now <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li className="ddc">
              <button id="li3" to="/">
                <FontAwesomeIcon icon={faUser} /> ACCOUNT{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </button>{" "}
              <ul className="dropdown-content">
                <li>
                  <Link id="li0">My Account</Link>
                </li>
                <li>
                  <Link id="li0">My Booking</Link>
                </li>
                <li>
                  <Link id="li0">Agent</Link>
                </li>
                <li>
                  <Link id="li0">Need Help?</Link>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>

      {/* navbar1 ends */}

      {/* navbar2 start*/}

      {/* {fixee ? "fixe" : "navbar navbar-expand "} */}

      <div id="fix" className="navbar sticky-top">
        <nav className="navbar nav">
          <Link className="navbar-logo">
            <img className="nav-logo" src={image1} />
          </Link>

          <ul
            className={menuu ? "nav-menu" : "navlink"}
            onClick={() => setMenuu(true)}
          >
            <li className="navitem">
              <Link id="a" to="/">
                Destination
              </Link>
            </li>

            <li className="navitem">
              <Link id="a" to="/">
                Activities
              </Link>
            </li>

            <li className="navitem">
              <Link id="a" to="/">
                Ways to Travel
              </Link>
            </li>

            <li className="navitem">
              <Link id="a" to="/">
                Offers
              </Link>
            </li>

            <li className="navitem">
              <Link id="a" to="/">
                Late Getaways
              </Link>
            </li>
            <li className="navitem">
              <Link id="a" to="/">
                Sustainable Travel
              </Link>
            </li>
          </ul>

          <div>
            <FontAwesomeIcon id="fa1" icon={faMagnifyingGlass} />
            <FontAwesomeIcon id="fa1" icon={faHeart} />
            <Link id="fa2">02035531673</Link>
            <Link>
              <FontAwesomeIcon id="fa1" icon={faPhone} />
            </Link>
            <button id="btn1">CONTACT</button>
          </div>

          <div className="menu" onClick={() => setMenuu(!menuu)}>
            {menuu ? (
              <FontAwesomeIcon id="menuicon" icon={faTimes} />
            ) : (
              <FontAwesomeIcon id="menuicon" icon={faBars} />
            )}
          </div>
        </nav>
      </div>

      {/* Navbar2 end */}

      {/* Navbar3 start */}

      <div id="white">
        <div className="row">
          <div id="col1" className="col">
            <div className="row">
              <div id="innercol2" className="col">
                <img id="image1" src={img1} />
              </div>
              <div id="innercol" className="col">
                <p id="p1">TRUSTPILOT RATED EXCELLENT</p>
              </div>
              <div id="innercol" className="col">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
          </div>

          <div id="col2" className="col">
            <div className="row">
              <div id="innercol1" className="col">
                <img id="image1" src={img2} />
              </div>
              <div className="col">
                <p id="p1">REFUND GUARANTEE</p>
              </div>{" "}
              <div className="col">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
          </div>

          <div id="col3" className="col">
            <div className="row">
              <div id="innercol1" className="col">
                <img id="image1" src={img3} />{" "}
              </div>
              <div className="col">
                <p id="p1">FLEXIBALE BOOKING</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
          </div>

          <div id="col4" className="col">
            <div className="row">
              <div id="innercol1" className="col">
                <img id="image1" src={img4} />{" "}
              </div>
              <div className="col">
                <p id="p1">EXPERT LOKEL GUIDE</p>
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar3 end */}

      {/* HomePage start*/}

      <div>
        <img id="img1" src={img11} />
        <div className="blur">-</div>
        <h1 id="a1">Armenia Tours</h1>
        <p id="a2">
          Where Asia and Europe meet in a symphony of mountains, history and
          tradition
        </p>
      </div>

      {/* HomePage end*/}

      {/* HomeContent starts*/}

      <div>
        {/* */}

        <div className="totalcontent">
          <div className="contant1">
            <h1 id="size1">Armenia Tours</h1>
            <p id="size">
              Armenia is a mountainous nation in West Asia, a former Soviet
              Republic, and was one of the first Christian nations, embracing
              Christianity in the fourth century. This rich cultural and natural
              environment makes it an exciting destination
              <span className={toggle ? "" : "hide"}>
                for a widerange of adventure, activity and walking holidays.
                <pre></pre>
                There are many pagan sites to visit as well as UNESCO World
                Heritage-listed churches, which are almost without exception
                built in stunning locations. Surrounded by forests, perched on
                the top of dramatic gorges or silhouetted before snow-capped
                mountains, they draw us to magnificent open spaces filled with a
                huge variety of trees and wild flowers. On Armenia tours we see
                wonderful mountains, lakes and waterfalls in the countryside and
                relish cooling breezes while the cafés and restaurants of the
                country's capital, Yerevan, are proof of an emerging economy.
                Mount Ararat towers majestically over the city, and beautiful
                scenery is plentiful.
              </span>
              <div className="bbtn1" onClick={show}>
                {showmore ? (
                  <button className="btn1" onClick={togg}>
                    show less <FontAwesomeIcon icon={faArrowUp} />
                  </button>
                ) : (
                  <button className="btn1" onClick={togg}>
                    show more <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                )}
              </div>
            </p>
          </div>

          <div className="content2">
            <div id="box1" className="row">
              Call for general departures:
              <Link id="l">020 3553 9822</Link>
            </div>

            <div id="box2" className="row">
              <h1 id="box2h1">Make an enquiry</h1>
              <p id="box2p">step 1 of 2</p>
              <form>
                <label>Destination</label>
                <pre></pre>
                <input id="i1" type="text" />
                <pre></pre>
                <label>Depature Date</label>
                <pre></pre>
                <input id="i2" type="date" />
                <pre></pre>

                <label>Number of Passengers</label>
                <pre></pre>
                <select id="i3" onChange={handleChange}>
                  <option>select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8+</option>
                </select>
                <pre></pre>
                <label>Message</label>
                <pre></pre>
                <input id="i4" type="text" />
              </form>

              <p id="box2p1">
                To enquire about an existing booking <Link>click here</Link>
              </p>

              <button id="box2button">NEXT</button>
              <pre></pre>

              <button id="box2button1">
                <FontAwesomeIcon icon={faCircleInfo} /> Find out more about how
                we use your data
              </button>
            </div>

            <div id="box1" className="row">
              <button id="bb1">
                Live Chat <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div id="box1" className="row">
              <button id="bb1">
                Request a Brochure <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div id="box1" className="row">
              <p id="pp2">Our travellers rate our Armenia holidays as</p>
              <p>
                <span id="pp1"> 3.8 / 5 </span>based on
                <Link id="pp3">32 reviews</Link>
              </p>
              <p id="star1">
                <span id="stargold"> ★★★★</span>★
              </p>
            </div>
          </div>
        </div>
        <div className={hide ? "hid1" : "hid2"}>
          <p>_</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </div>

        {/* HomeContent starts*/}

        {/* American tours start */}
        <div>
          <h1 id="size11">Armenia Tours</h1>
          <div className="card">
            <img classname="card-img-top" src={imgg12} />
            {/* <h5 classname="card-title">Card title</h5> */}
            <div classname="card-body">
              <div id="c" className="container">
                <p id="ct" classname="card-text">
                  A fascinating cultural journey through the heart of the
                  Caucasus
                </p>
                <img id="imgg2" src={imgg13} />
              </div>

              <div className="con">
                <button id="bbtn0">VIEW DETAILS</button>
                <p id="fon">
                  32 Reviews <span id="stargold">★★★★</span>
                  <span id="star1">★</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* American tours end */}

        {/* BUTToNS start*/}

        <div id="padding">
          <button id="b1">SEE ALL TRIPS</button>
        </div>
        <p id="pad1">ACTIVITIES IN ARMENIA</p>
        <div id="pad">
          <button id="butn"> CULTURE IN ARMENIA</button>
        </div>

        {/* BUTToNS end*/}
        <h1></h1>
      </div>
    </div>
  );
}
