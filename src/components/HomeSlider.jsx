import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL =
  "https://active-hug-9ed6899866.strapiapp.com/api/home-sliders?populate=*";

const HomeSlider = () => {
  const [sliderData, setSliderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch slider data");
        }
        const result = await response.json();
        if (result?.data?.length > 0) {
          setSliderData(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}></p>;
  if (!sliderData || !sliderData.HomeSliderImgs) return null;

  const {
    HomeSliderImgs,
    HomeSliderMaxWidth,
    HomeSliderPrevLeft,
    HomeSliderPrevBtm,
    HomeSliderPrevTransform,
    HomeSliderPrevBgColor,
    HomeSliderPrevColor,
    HomeSliderPrevBorderRadius,
    HomeSliderPrevWidth,
    HomeSliderPrevHeight,
    HomeSliderPrevFontSize,
    HomeSliderPrevCursor,
    HomeSliderPrevShadow,
    HomeSliderPrevZindex,
    HomeSliderImgsPadding,
    HomeSliderImgsTrans,
    HomeSliderImgsInnerWidth,
    HomeSliderImgsInnerHeight,
    HomeSliderImgsInnerBorderRadius,
    HomeSliderImgsInnerShadow,
    HomeSliderImgsInnerMarLeft,
    HomeSliderPrevBtmMob,
    HomeSliderPrevLeftMob,
    HomeSliderImgsWidthMob,
    HomeSliderImgsWidth,
    HomeSliderImgsPadding1,
  } = sliderData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
        },
      },
    ],
  };

  return (
    <div
      className="position-relative m-auto d-flex align-items-center justify-content-center"
      style={{
        maxWidth: HomeSliderMaxWidth,
      }}
    >
      <button
        className="position-absolute border-0 font-weight-bold"
        onClick={() => sliderRef.current.slickPrev()}
        style={{
          left:
            window.innerWidth <= 768
              ? HomeSliderPrevLeftMob
              : HomeSliderPrevLeft,
          bottom:
            window.innerWidth <= 768 ? HomeSliderPrevBtmMob : HomeSliderPrevBtm,
          transform: HomeSliderPrevTransform,
          backgroundColor: HomeSliderPrevBgColor,
          color: HomeSliderPrevColor,
          borderRadius: HomeSliderPrevBorderRadius,
          width: HomeSliderPrevWidth,
          height: HomeSliderPrevHeight,
          fontSize: HomeSliderPrevFontSize,
          cursor: HomeSliderPrevCursor,
          boxShadow: HomeSliderPrevShadow,
          zIndex: HomeSliderPrevZindex,
        }}
      >
        ←
      </button>

      <div
        style={{
          width:
            window.innerWidth <= 768
              ? HomeSliderImgsWidthMob
              : HomeSliderImgsWidth,
          padding: HomeSliderImgsPadding1,
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {HomeSliderImgs.map((img) => (
            <div
              className="text-center"
              key={img.id}
              style={{
                padding: HomeSliderImgsPadding,
                transition: HomeSliderImgsTrans,
              }}
            >
              <img
                src={`${img.url}`}
                alt={img.name}
                style={{
                  width: HomeSliderImgsInnerWidth,
                  height: HomeSliderImgsInnerHeight,
                  borderRadius: HomeSliderImgsInnerBorderRadius,
                  boxShadow: HomeSliderImgsInnerShadow,
                  marginLeft: HomeSliderImgsInnerMarLeft,
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <button
        className="position-absolute border-0 font-weight-bold"
        onClick={() => sliderRef.current.slickNext()}
        style={{
          right: HomeSliderPrevLeft,
          bottom:
            window.innerWidth <= 768 ? HomeSliderPrevBtmMob : HomeSliderPrevBtm,
          transform: HomeSliderPrevTransform,
          backgroundColor: HomeSliderPrevBgColor,
          color: HomeSliderPrevColor,
          borderRadius: HomeSliderPrevBorderRadius,
          width: HomeSliderPrevWidth,
          height: HomeSliderPrevHeight,
          fontSize: HomeSliderPrevFontSize,
          cursor: HomeSliderPrevCursor,
          boxShadow: HomeSliderPrevShadow,
          zIndex: HomeSliderPrevZindex,
        }}
      >
        →
      </button>
    </div>
  );
};

export default HomeSlider;
