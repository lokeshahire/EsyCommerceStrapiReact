import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

const HomeMarque = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://active-hug-9ed6899866.strapiapp.com/api/home-scrolls?populate=*"
      )
      .then((response) => {
        if (response.data?.data.length > 0) {
          setData(response.data.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <p style={{ textAlign: "center" }}></p>;

  const {
    HomeScrollTitle,
    HomeScrollImg,
    HomeScrollStarNo,
    HomeScrollPadding,
    HomeScrollTitleColor,
    HomeScrollTitleFontSize,
    HomeScrollTitleFontWeight,
    HomeScrollStarColor,
    HomeScrollStarFontSize,
    HomeScrollGap,
    HomeScrollBorderColor,
    HomeScrollImgHeight,
    HomeScrollImgWidth,
    HomeScrollImgFilter,
    HomeScrollMarqueeSpeed,
    HomeScrollWidth,
    HomeScrollMarginBottom,
    HomeScrollBorderTextGlow,
    HomeScrollBorderColorHeight,
    HomeScrollBorderColorWidth,
    HomeScrollBrandMargin,
    HomeScrollImgObjectFit,
    HomeScrollBorderHeight,
    HomeScrollBorderMarginTop,
    HomeScrollTitleWidthMob,
    HomeScrollStarFontSizeMob,
    HomeScrollTitleFontSizeMob,
  } = data;

  const brands = HomeScrollImg?.map((img) => ({
    name: img.name,
    logo: `${img.url}`,
  }));

  return (
    <div
      className="text-center mt-md-0 mt-5"
      style={{
        width: HomeScrollWidth,
        padding: HomeScrollPadding,
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          gap: HomeScrollGap,
        }}
      >
        <div
          style={{
            flexGrow: HomeScrollBorderTextGlow,
            height: HomeScrollBorderColorHeight,
            backgroundColor: HomeScrollBorderColor,
          }}
        ></div>
        <span
          style={{
            fontSize:
              window.innerWidth <= 768
                ? HomeScrollStarFontSizeMob
                : HomeScrollStarFontSize,
            color: HomeScrollStarColor,
          }}
        >
          {"⭐".repeat(HomeScrollStarNo)}
        </span>
        <span
          style={{
            fontSize:
              window.innerWidth <= 768
                ? HomeScrollTitleFontSizeMob
                : HomeScrollTitleFontSize,
            fontWeight: HomeScrollTitleFontWeight,
            color: HomeScrollTitleColor,
            width: window.innerWidth <= 768 ? HomeScrollTitleWidthMob : "unset",
          }}
        >
          {HomeScrollTitle}
        </span>
        <div
          style={{
            flexGrow: HomeScrollBorderTextGlow,
            height: HomeScrollBorderColorHeight,
            backgroundColor: HomeScrollBorderColor,
            width: HomeScrollBorderColorWidth,
          }}
        ></div>
      </div>

      <Marquee
        gradient={false}
        speed={HomeScrollMarqueeSpeed}
        pauseOnHover={false}
      >
        {brands.map((brand, index) => (
          <div
            className="d-flex align-items-center justify-content-center"
            key={index}
            style={{ margin: HomeScrollBrandMargin }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              style={{
                height: HomeScrollImgHeight,
                maxWidth: HomeScrollImgWidth,
                objectFit: HomeScrollImgObjectFit,
                // filter: HomeScrollImgFilter,
              }}
            />
          </div>
        ))}
      </Marquee>

      <div
        style={{
          height: HomeScrollBorderHeight,
          backgroundColor: HomeScrollBorderColor,
        }}
      ></div>
    </div>
  );
};

export default HomeMarque;
