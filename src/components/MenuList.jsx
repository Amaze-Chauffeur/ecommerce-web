import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";
import topOffer from "../assets/images/topOffer.png";
import grocery from "../assets/images/grocery.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FashionSubmenuLeft, FashionSubmenuRight } from "./Submenu";
const HeaderMenu = () => {
  return (
    <>
      <Container maxwidth="lg">
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <img src={topOffer} className="topMenuImg" />
              <a href="">Top Offer</a>
            </li>
            <li className="nav__menu-item">
              <img src={grocery} className="topMenuImg" />
              <a href="">Grocery</a>
            </li>
            <li className="nav__menu-item">
              <img src={topOffer} className="topMenuImg" />
              <a href="">Mobiles</a>
            </li>
            <li className="nav__menu-item">
              <img src={grocery} className="topMenuImg" />
              <a href="">
                Fashion <ExpandMoreIcon className="expandSize" />
              </a>
              <div className="row">
                <div className="col-6">
                  <ul className="nav__submenu">
                    <li className="nav__submenu-item ">
                      <a>Our Company</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="nav__submenu">
                    <li className="nav__submenu-item ">
                      <a>Our Company</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav__menu-item">
              <img src={topOffer} className="topMenuImg" />
              <a href="">Electronics</a>
            </li>
            <li className="nav__menu-item">
              <img src={grocery} className="topMenuImg" />
              <a href="">Appliances</a>
            </li>
            <li className="nav__menu-item">
              <img src={topOffer} className="topMenuImg" />
              <a href="">Travel</a>
            </li>
            <li className="nav__menu-item">
              <img src={grocery} className="topMenuImg" />
              <a href="">Beauty, Toys & More</a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};
export default HeaderMenu;
