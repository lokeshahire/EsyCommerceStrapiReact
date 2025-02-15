import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { MobileMarquee } from "./Marque";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        "https://active-hug-9ed6899866.strapiapp.com/api/case-footers?populate=*"
      )
      .then((response) => {
        if (response.data.data.length > 0) {
          setFooterData(response.data.data[0]);
        }
      })
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  if (!footerData) return null;

  const {
    UpFooter,
    FooterLogo,
    FooterLeftText,
    FooterRight1,
    FooterRight2,
    FooterRight3,
    FooterRight4,
    FooterLeftSocial1,
    FooterLeftSocial2,
    UpFooterFontSize,
    UpFooterBorder,
    FooterCopy,
    FooterPadding,
    FooterMarginTop,
    UpFooterColor,
    UpFooterPadding,
    UpFooterBorderRadius,
    FooterBelowMarginTop,
    FooterLeftWidth,
    FooterLeftMaxWidth,
    FooterLeftFontsize,
    FooterLeftColor,
    FooterLeftSocialGap,
    FooterLeftSocialMarginTop,
    FooterLeftSocial1FontSie,
    FooterLogoColor,
    FooterRightWidth,
    FooterRight2FontSize,
    FooterRight2Margin,
    FooterCopyFontSize,
    FooterCopyBorder,
    FooterCopyMarginTop,
    FooterRighttextAlign,
    FooterLogoFontWeight,
    FooterCopyWidth,
    UpFooterPaddingMob,
    FooterLeftWidthMob,
  } = footerData;

  const footerStyle = {
    marginTop: location.pathname === "/case" ? "8%" : "0%",
    padding:
      window.innerWidth <= 768
        ? "0px"
        : location.pathname === "/case"
        ? "40px"
        : "0 40px",
  };

  return (
    <footer style={footerStyle}>
      <div className="w-100">
        {/* Desktop View */}
        <div
          className="text-center font-weight-bold d-none d-md-block"
          style={{
            fontSize: UpFooterFontSize,
            color: UpFooterColor,
            border: UpFooterBorder,
            padding: UpFooterPadding,
            fontWeight: FooterLogoFontWeight,
          }}
        >
          {UpFooter}
        </div>

        {/* Mobile View with Marquee */}
        <div className="d-block d-md-none">
          <MobileMarquee
            text={UpFooter}
            style={{
              fontSize: UpFooterFontSize,
              color: UpFooterColor,
              border: UpFooterBorder,
              padding:
                window.innerWidth <= 768 ? UpFooterPaddingMob : UpFooterPadding,

              fontWeight: FooterLogoFontWeight,
            }}
          />
        </div>
      </div>

      <div
        className="container d-flex justify-content-between flex-column flex-md-row"
        style={{
          marginTop: FooterBelowMarginTop,
        }}
      >
        <div
          style={{
            width:
              window.innerWidth <= 768 ? FooterLeftWidthMob : FooterLeftWidth,
          }}
        >
          <h1
            className="font-weight-bold"
            style={{ fontWeight: FooterLogoFontWeight }}
          >
            {FooterLogo}
          </h1>
          <p
            style={{
              color: FooterLeftColor,
              fontSize: FooterLeftFontsize,
              maxWidth: FooterLeftMaxWidth,
            }}
          >
            {FooterLeftText}
          </p>
          <div
            className="d-flex"
            style={{
              gap: FooterLeftSocialGap,
              marginTop: FooterLeftSocialMarginTop,
            }}
          >
            <span
              className="font-weight-bold"
              style={{
                fontSize: FooterLeftSocial1FontSie,
                color: FooterLogoColor,
              }}
            >
              {FooterLeftSocial1 === "Insta" ? (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M9.50002 0C12.0812 0 12.4033 0.00949963 13.4159 0.057C14.4277 0.1045 15.1165 0.263151 15.7225 0.498752C16.3495 0.740044 16.8778 1.06685 17.4059 1.5941C17.889 2.069 18.2628 2.64346 18.5012 3.2775C18.736 3.88265 18.8956 4.57235 18.943 5.5841C18.9877 6.59679 19 6.91884 19 9.5C19 12.0811 18.9905 12.4032 18.943 13.4159C18.8956 14.4277 18.736 15.1164 18.5012 15.7225C18.2634 16.3569 17.8896 16.9315 17.4059 17.4059C16.9309 17.8888 16.3564 18.2625 15.7225 18.5012C15.1174 18.7359 14.4277 18.8955 13.4159 18.943C12.4033 18.9877 12.0812 19 9.50002 19C6.91887 19 6.59682 18.9905 5.58411 18.943C4.57236 18.8955 3.88361 18.7359 3.27751 18.5012C2.64321 18.2632 2.06865 17.8894 1.5941 17.4059C1.11093 16.931 0.737138 16.3566 0.498752 15.7225C0.26315 15.1174 0.104499 14.4277 0.0570001 13.4159C0.0123497 12.4032 0 12.0811 0 9.5C0 6.91884 0.00949965 6.59679 0.0570001 5.5841C0.104499 4.5714 0.26315 3.88359 0.498752 3.2775C0.736477 2.64307 1.11036 2.06845 1.5941 1.5941C2.06879 1.11077 2.64331 0.736944 3.27751 0.498752C3.88361 0.263151 4.57141 0.1045 5.58411 0.057C6.59682 0.0123496 6.91887 0 9.50002 0ZM9.50002 4.74999C8.24023 4.74999 7.03206 5.25044 6.14125 6.14124C5.25045 7.03203 4.75001 8.24022 4.75001 9.5C4.75001 10.7597 5.25045 11.9679 6.14125 12.8587C7.03206 13.7495 8.24023 14.25 9.50002 14.25C10.7598 14.25 11.968 13.7495 12.8588 12.8587C13.7496 11.9679 14.2501 10.7597 14.2501 9.5C14.2501 8.24022 13.7496 7.03203 12.8588 6.14124C11.968 5.25044 10.7598 4.74999 9.50002 4.74999ZM15.6751 4.5125C15.6751 4.19755 15.5499 3.89551 15.3273 3.67281C15.1045 3.45011 14.8025 3.32499 14.4875 3.32499C14.1725 3.32499 13.8706 3.45011 13.6478 3.67281C13.4252 3.89551 13.3 4.19755 13.3 4.5125C13.3 4.82744 13.4252 5.12949 13.6478 5.35219C13.8706 5.57489 14.1725 5.7 14.4875 5.7C14.8025 5.7 15.1045 5.57489 15.3273 5.35219C15.5499 5.12949 15.6751 4.82744 15.6751 4.5125ZM9.50002 6.65C10.2559 6.65 10.9808 6.95026 11.5153 7.48474C12.0497 8.01922 12.35 8.74413 12.35 9.5C12.35 10.2559 12.0497 10.9808 11.5153 11.5152C10.9808 12.0498 10.2559 12.35 9.50002 12.35C8.74415 12.35 8.01925 12.0498 7.48476 11.5152C6.95028 10.9808 6.65001 10.2559 6.65001 9.5C6.65001 8.74413 6.95028 8.01922 7.48476 7.48474C8.01925 6.95026 8.74415 6.65 9.50002 6.65Z"
                    fill="#060237"
                  />
                </svg>
              ) : (
                ""
              )}
            </span>
            <span
              className="font-weight-bold"
              style={{
                fontSize: FooterLeftSocial1FontSie,
                color: FooterLogoColor,
              }}
            >
              {FooterLeftSocial2 === "Link" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>

        <div
          className="text-start text-md-end mt-md-0 mt-5"
          style={{
            width:
              window.innerWidth <= 768 ? FooterLeftWidthMob : FooterRightWidth,
          }}
        >
          <h4
            className="font-weight-bold"
            style={{
              color: FooterLogoColor,
              fontWeight: FooterLogoFontWeight,
            }}
          >
            {FooterRight1}
          </h4>
          <p
            style={{
              color: FooterLeftColor,
              fontSize: FooterRight2FontSize,
              margin: FooterRight2Margin,
            }}
          >
            {FooterRight2}
          </p>
          <p
            style={{
              color: FooterLeftColor,
              fontSize: FooterRight2FontSize,
              margin: FooterRight2Margin,
            }}
          >
            {FooterRight3}
          </p>
          <p
            style={{
              color: FooterLeftColor,
              fontSize: FooterRight2FontSize,
              margin: FooterRight2Margin,
            }}
          >
            {FooterRight4}
          </p>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: FooterBelowMarginTop,
          fontSize: FooterCopyFontSize,
          color: FooterLeftColor,
        }}
      >
        <hr
          className="m-auto"
          style={{ border: FooterCopyBorder, width: FooterCopyWidth }}
        />
        <p className="" style={{ marginTop: FooterCopyMarginTop }}>
          {FooterCopy}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
