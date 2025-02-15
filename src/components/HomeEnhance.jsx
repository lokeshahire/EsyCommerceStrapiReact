import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL =
  "https://active-hug-9ed6899866.strapiapp.com/api/home-enhances?populate=*";

const EnhanceSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      if (response.data && response.data.data.length > 0) {
        setData(response.data.data[0]);
      }
    });
  }, []);

  if (!data) return <p></p>;

  const {
    HomeEnhanceHead,
    HomeEnhanceHeadPadding,
    HomeEnhanceHeadMarginTop,
    HomeEnhanceHeadFontSize,
    HomeEnhanceHeadFontWeight,
    HomeEnhanceHeadColor,
    HomeEnhanceHeadWidth,
    HomeEnhanceHeadMarginBtm,
    HomeEnhanceCardGap,
    HomeEnhanceCardFlex,
    HomeEnhanceCardMinWidth,
    HomeEnhanceCardMaxWidth,
    HomeEnhanceCardBg,
    HomeEnhanceCardRadius,
    HomeEnhanceCardPadding,
    HomeEnhanceCardTras,
    HomeEnhanceCardMinHeight,
    HomeEnhanceCardCursor,
    HomeEnhanceCardBorder,
    HomeEnhanceCardHeight,
    HomeEnhanceCardImgURLwidth,
    HomeEnhanceCardImgURLHeight,
    HomeEnhanceCardImgURLMarginBtm,
    HomeEnhanceCardHeadFontSize,
    HomeEnhanceCardHeadWeight,
    HomeEnhanceCardHeadColor,
    HomeEnhanceCardHeadWidth,
    HomeEnhanceCardLiStyle,
    HomeEnhanceCardLiMarginTop,
    HomeEnhanceCardLiFontSize,
    HomeEnhanceCardLiColor,
    HomeEnhanceCardLiGap,
    HomeEnhanceCardLiMarginBtm,
    HomeEnhanceCard,
    HomeEnhanceHead2MarginTop,
    HomeEnhanceHead2,
  } = data;

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="text-center"
      style={{
        padding: HomeEnhanceHeadPadding,
        marginTop: HomeEnhanceHeadMarginTop,
      }}
    >
      <h2
        className="text-md-center text-start m-md-auto m-3"
        style={{
          // fontSize: HomeEnhanceHeadFontSize,
          fontSize: window.innerWidth <= 768 ? "32px" : HomeEnhanceHeadFontSize,
          fontWeight: HomeEnhanceHeadFontWeight,
          color: HomeEnhanceHeadColor,
          width: HomeEnhanceHeadWidth,
          marginBottom: HomeEnhanceHeadMarginBtm,
        }}
      >
        {HomeEnhanceHead}
      </h2>
      <div
        className="d-flex justify-content-center flex-wrap mt-5"
        style={{
          gap: HomeEnhanceCardGap,
        }}
      >
        {HomeEnhanceCard.map((card) => (
          <div
            key={card.id}
            style={{
              flex: HomeEnhanceCardFlex,
              minWidth: HomeEnhanceCardMinWidth,
              maxWidth: HomeEnhanceCardMaxWidth,
            }}
          >
            <div
              className="text-start"
              style={{
                background: HomeEnhanceCardBg,
                borderRadius: HomeEnhanceCardRadius,
                padding: HomeEnhanceCardPadding,
                transition: HomeEnhanceCardTras,
                minHeight: HomeEnhanceCardMinHeight,
                cursor: HomeEnhanceCardCursor,
                border: HomeEnhanceCardBorder,
                height: HomeEnhanceCardHeight,
              }}
            >
              <img
                src={card.HomeEnhanceCardImgURL}
                alt={card.HomeEnhanceCardHead}
                style={{
                  width: HomeEnhanceCardImgURLwidth,
                  height: HomeEnhanceCardImgURLHeight,
                  marginBottom: HomeEnhanceCardImgURLMarginBtm,
                }}
              />

              <h2
                style={{
                  fontSize: HomeEnhanceCardHeadFontSize,
                  fontWeight: HomeEnhanceCardHeadWeight,
                  color: HomeEnhanceCardHeadColor,
                  width: HomeEnhanceCardHeadWidth,
                }}
              >
                {card.HomeEnhanceCardHead}
              </h2>

              {/* List Items */}
              <ul
                className="p-0"
                style={{
                  listStyle: HomeEnhanceCardLiStyle,
                  marginTop: HomeEnhanceCardLiMarginTop,
                }}
              >
                {[1, 2, 3, 4].map((num) => (
                  <li
                    className="d-flex align-items-center"
                    key={num}
                    style={{
                      fontSize: HomeEnhanceCardLiFontSize,
                      color: HomeEnhanceCardLiColor,
                      gap: HomeEnhanceCardLiGap,
                      marginBottom: HomeEnhanceCardLiMarginBtm,
                    }}
                  >
                    <span>
                      <svg
                        className="me-4"
                        width="27"
                        height="23"
                        viewBox="0 0 27 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M2 14.773C2 14.773 4.46429 14.773 7.75 20.5002C7.75 20.5002 16.8826 5.4997 25 2.50024"
                          stroke="#D3C3F8"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    {card[`HomeEnhanceCardLi${num}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <h2
        className="text-center"
        s
        style={{
          fontSize: HomeEnhanceHeadFontSize,
          fontWeight: HomeEnhanceHeadFontWeight,
          color: HomeEnhanceHeadColor,
          width: HomeEnhanceHeadWidth,
          //   marginBottom: HomeEnhanceHeadMarginBtm,
          margin: "auto",
          marginTop: HomeEnhanceHead2MarginTop,
        }}
      >
        {HomeEnhanceHead2}
      </h2>
    </div>
  );
};

export default EnhanceSection;
