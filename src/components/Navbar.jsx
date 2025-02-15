import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NAVBAR_API =
  "https://active-hug-9ed6899866.strapiapp.com/api/navbars?populate=*";

function Navbar() {
  const [navData, setNavData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const response = await fetch(NAVBAR_API);
        if (!response.ok) {
          throw new Error("Failed to fetch navbar data");
        }
        const data = await response.json();

        if (data?.data?.length > 0) {
          setNavData(data.data[0]);
          console.log("setNavData", data.data[0]);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching navbar:", err);
        setLoading(false);
      }
    };

    fetchNavData();
  }, []);

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}></div>;
  }

  if (!navData) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        No navigation data available
      </div>
    );
  }

  const menuItems = [
    navData.MidNavbar1,
    navData.MidNavbar2,
    navData.MidNavbar3,
  ].filter(Boolean);

  const getRoute = (itemText) => {
    if (itemText.toLowerCase().includes("case")) {
      return "/case";
    }
    return "#";
  };

  return (
    <nav
      className="container d-flex justify-content-between align-items-center"
      style={{
        padding: navData.NavPadding,
        backgroundColor: navData.NavbackgroundColor,
        fontFamily: navData.NavfontFamily,
        height: navData.NavHeight,
      }}
    >
      <button
        className="d-block d-md-none menu-btn position-relative"
        onClick={toggleMenu}
        style={{
          background: navData.toggleMenuBg,
          border: navData.toggleMenuBorder,
          cursor: navData.toggleMenuCursor,
          padding: navData.toggleMenuPadding,
          zIndex: navData.toggleMenuZindex,
        }}
      >
        <div
          className="hamburger d-flex flex-column"
          style={{
            gap: navData.hamburgerGap,
          }}
        >
          <span
            className="d-block"
            style={{
              width: navData.hamburgerWidth,
              height: navData.hamburgerHeight,
              backgroundColor: navData.hamburgerBgColor,
              transition: navData.hamburgerTrans,
            }}
          ></span>
          <span
            className="d-block"
            style={{
              width: navData.hamburgerWidth,
              height: navData.hamburgerHeight,
              backgroundColor: navData.hamburgerBgColor,
              transition: navData.hamburgerTrans,
            }}
          ></span>
          <span
            className="d-block"
            style={{
              width: navData.hamburgerWidth,
              height: navData.hamburgerHeight,
              backgroundColor: navData.hamburgerBgColor,
              transition: navData.hamburgerTrans,
            }}
          ></span>
        </div>
      </button>

      <div
        className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
        style={{
          position: navData.isMenuOpenPosition,
          top: isMenuOpen ? "0" : "-100%",
          left: navData.isMenuOpenLeft,
          width: navData.isMenuOpenWidth,
          background: navData.isMenuOpenBg,
          boxShadow: navData.isMenuOpenShadow,
          padding: navData.isMenuOpenPadding,
          textAlign: navData.isMenuOpenTextAlign,
          transition: navData.isMenuOpenTran,
          zIndex: navData.isMenuOpenZindex,
          lineHeight: navData.isMenuOpenLineH,
          marginTop: isMenuOpen ? "80px" : "0",
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={getRoute(item)}
            className="mobile-menu-item d-block text-decoration-none"
            onClick={() => setIsMenuOpen(false)}
            style={{
              margin: navData.setIsMenuOpenMargin,
              fontSize: navData.setIsMenuOpenFontSize,
              color: navData.setIsMenuOpenColor,
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <Link to="/" className="text-decoration-none">
        <h2
          className="m-0 mt-2"
          style={{
            fontSize: navData.logoFontsize,
            fontWeight: navData.logofontWeight,
            color: navData.logoColor,
            letterSpacing: navData.logoLetterSpacing,
          }}
        >
          {navData.logoText}
        </h2>
      </Link>

      <div
        className="d-none d-md-flex"
        style={{
          gap: navData.MidNavbarGap,
          border: navData.MidNavbarBorder,
          borderRadius: navData.MidNavbarBorderRadius,
          padding: navData.MidNavbarPadding,
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={getRoute(item)}
            className="text-decoration-none"
            style={{
              fontWeight: navData.logofontWeight,
              color: navData.MidNavbarColor,
              padding: navData.MidNavbarInnerPadding,
              transition: navData.MidNavbarTransition,
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <button
        className="d-none d-md-flex align-items-center"
        style={{
          padding: navData.NavbuttonTextPadding,
          paddingLeft: navData.NavbuttonTextPaddingLeft,
          border: navData.NavbuttonTextBorder,
          borderRadius: navData.NavbuttonTextBorderRad,
          fontSize: navData.NavbuttonTextFontSize1,
          fontWeight: navData.NavbuttonTextWeight,
          cursor: navData.NavbuttonTextCursor,
          backgroundColor: navData.NavbuttonTextBgColor,
          color: navData.NavbuttonTextColor1,
          gap: navData.NavbuttonTextGap,
        }}
      >
        {navData.NavbuttonText}

        <span
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: navData.NavbuttonTextSpanBgColor,
            color: navData.NavbuttonTextSpanColor,
            width: navData.NavbuttonTextSpanWidth,
            height: navData.NavbuttonTextSpanHeight,
            borderRadius: navData.NavbuttonTextSpanBorderRad,
            fontSize: navData.NavbuttonTextSpanFontSize,
          }}
        >
          ↗
        </span>
      </button>

      <span
        className="d-flex d-md-none align-items-center justify-content-center"
        style={{
          backgroundColor: navData.NavbuttonTextSpanColor,
          color: navData.NavbuttonTextSpanBgColor,
          width: navData.NavbuttonTextSpanWidth,
          height: navData.NavbuttonTextSpanHeight,
          borderRadius: navData.NavbuttonTextSpanBorderRad,
          fontSize: navData.NavbuttonTextSpanFontSize,
        }}
      >
        ↗
      </span>
    </nav>
  );
}

export default Navbar;
