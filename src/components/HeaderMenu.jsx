import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";
import topOffer from "../assets/images/topOffer.png";
import grocery from "../assets/images/grocery.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FashionMenTopData, FashionWomenTopData } from "./MenuData";
import "../assets/js/Custom.js";
import { FashionMenTopSubmenu, FashionWomenTopSubmenu } from "./Submenu";
const HeaderMenu = (props) => {
  return (
    <>
      <Container maxwidth="lg">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <img src={topOffer} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Top Offer
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <img src={grocery} className="topMenuImg" />
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Fashion <KeyboardArrowDownIcon className="expandBottom" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="has-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Men's Top Wear
                        <KeyboardArrowRightIcon className="expandIcon" />
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <ul className="secDropDown">
                          {FashionMenTopData.map((val, ind) => {
                            return (
                              <FashionMenTopSubmenu
                                key={ind}
                                SubMenu={val.SubMenu}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </li>

                    <li className="has-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Men's Bottom Wear
                        <KeyboardArrowRightIcon className="expandIcon" />
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <ul className="secDropDown">
                          {FashionMenTopData.map((val, ind) => {
                            return (
                              <FashionMenTopSubmenu
                                key={ind}
                                SubMenu={val.SubMenu}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Women Ethnic Wear
                        <KeyboardArrowRightIcon className="expandIcon" />
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <ul className="secDropDown">
                          {FashionWomenTopData.map((val, ind) => {
                            return (
                              <FashionWomenTopSubmenu
                                key={ind}
                                SubMenu={val.SubMenu}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Women Foot Wear
                        <KeyboardArrowRightIcon className="expandIcon" />
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <ul className="secDropDown">
                          {FashionMenTopData.map((val, ind) => {
                            return (
                              <FashionMenTopSubmenu
                                key={ind}
                                SubMenu={val.SubMenu}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </li>

                    <li className="has-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Men Foot Wear
                        <KeyboardArrowRightIcon className="expandIcon" />
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <ul className="secDropDown">
                          {FashionMenTopData.map((val, ind) => {
                            return (
                              <FashionMenTopSubmenu
                                key={ind}
                                SubMenu={val.SubMenu}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <img src={grocery} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Grocery
                  </a>
                </li>
                <li className="nav-item">
                  <img src={topOffer} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Mobiles
                  </a>
                </li>
                <li className="nav-item">
                  <img src={grocery} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Electronics
                  </a>
                </li>
                <li className="nav-item">
                  <img src={topOffer} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Appliances
                  </a>
                </li>
                <li className="nav-item">
                  <img src={grocery} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Travel
                  </a>
                </li>
                <li className="nav-item">
                  <img src={topOffer} className="topMenuImg" />
                  <a className="nav-link" href="#">
                    Beauty, Toys & More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};
export default HeaderMenu;
