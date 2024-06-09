import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import logo from "../../../../../assets/Nimages/Header/logo.png";
import logoTwo from "../../../../../assets/Nimages/Header/logoTwo.png";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { PricingContext } from "../../../../../context/PricingProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./NavStyles.css";
import { useEffect } from "react";

export default function Navbar({ toggleDrawer, routes }) {
  const location = useLocation();
  const { cart, setCart } = useContext(PricingContext);

  const removeCartFromLocalStorage = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      setCart(JSON.parse(cartData));
    }

    const timerId = setTimeout(removeCartFromLocalStorage, 20 * 60 * 1000); //

    return () => clearTimeout(timerId);
  }, [setCart]);

  const [transparentLogo, setTransparentLogo] = useState(false);

  useEffect(() => {
    // Check if the pathname is "/"
    setTransparentLogo(location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" );
  }, [location.pathname]);

  return (
    <SNavbar transparent={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }>
      <NavContainer transparentColor={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }>
        <Justify>
          <DrawerButton onClick={toggleDrawer}>
            <FaBars />
          </DrawerButton>
          <div>
            {transparentLogo ? (
              <Link to="/">
                <LazyLoadImage
                  effect="opacity"
                  src={logo}
                  alt="logo"
                  className="w-100"
                />
              </Link>
            ) : (
              <Link to="/">
                <LazyLoadImage
                  effect="opacity"
                  src={logoTwo}
                  alt="logo"
                  className="w-100"
                />
              </Link>
            )}
          </div>

          <RightNav>
            <NavRoutes>
              {routes.map((route) => {
                if (route.subRoutes) {
                  return <Menu route={route} key={route.name} />;
                }
                return (
                  <NavRoute
                    to={route.link}
                    key={route.name}
                    transparentColor={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }
                  >
                    {route.name}
                  </NavRoute>
                );
              })}
            </NavRoutes>

            <div className="flex item-center lg:pr-[0px] pr-[10px]">
              {cart?.length === 0 ? (
                <Link to="/pricing" className="">
                  <div className="relative mt-[-2px] ml-[26px]">
                    <Cart transparentColor={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }>
                      {cart?.length || 0}
                    </Cart>
                  </div>
                </Link>
              ) : (
                <Link to="/services">
                  <div className="relative mt-[-2px] ml-[26px]">
                    <Cart transparentColor={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }>
                      {cart?.length || 0}
                    </Cart>
                  </div>
                </Link>
              )}
            </div>
          </RightNav>
        </Justify>

        <Account transparentColor={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }>
          <a
            className="NavRoute"
            href="https://my.hellokompass.com/login "
            target="_blank"
            rel="noreferrer"
          >
            <AccountButton transparentColor={location.pathname === "/" || location.pathname === "/appointment" || location.pathname === "/lobby" || location.pathname === "/payroll" }>
              Account
            </AccountButton>
          </a>
        </Account>
      </NavContainer>
    </SNavbar>
  );
}

const Justify = styled.div`
  display: flex;
`;

const DrawerButton = styled.button`
  all: unset;
  display: grid;
  font-size: 1.5rem;
  padding-right: 20px;
  @media (min-width: 991px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "transparent"};
  border-bottom: 1px solid rgba(33, 56, 62, 0.1);
  padding: 24px 0px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 70px;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  
  @media (max-width: 776px) {
    margin: 0px 20px;
    
  }
`;

const RightNav = styled.div`
  display: flex;
  margin-left: 48px;
`;
const NavRoutes = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
  display: flex;
  font-size: 14px;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  padding-right: 41px;
  transition: 0.5s ease;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  &:hover {
    transition: 0.5s ease;
    // color: #12a9b2;
    color: ${({ transparentColor }) =>
      transparentColor ? "#f1f1f1" : "#12a9b2"};
  }
`;

const AccountButton = styled.div`
  border: none;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  font-size: 14px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: medium;
  font-style: normal;
`;
const Account = styled.div`
  width: 93px;
  height: 42px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.2)" : "#bdc4c4"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.1)" : "#dbdfdf"};
`;

const Cart = styled.div`
  background-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.1)" : "#eaecec"};
  
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  right: -2px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.2)" : "#bdc4c4"};
  font-family: "Poppins", sans-serif;
`;
