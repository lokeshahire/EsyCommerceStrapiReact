import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeShopify = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://active-hug-9ed6899866.strapiapp.com/api/home-shopifies?populate=*"
      )
      .then((response) => {
        setData(response.data.data[0]); // Use first entry
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <p></p>;

  const {
    HomeShopifytitle,
    HomeShopifytitleColor,
    HomeShopifyFontSize,
    HomeShopifyPtag,
    HomeShopifyPtagColor,
    HomeShopifyPtagFontSize,
    HomeShopifyLi1,
    HomeShopifyLi2,
    HomeShopifyLi3,
    HomeShopifyBtnAudit,
    HomeShopifyBtnAuditColor,
    HomeShopifyBtnAuditBgColor,
    HomeShopifyBtnTalk,
    HomeShopifyBtnTalkColor,
    HomeShopifyBtnTalkBgColor,
    HomeShopifyRightImg,
    HomeShopifyMaxWidth,
    HomeShopifyPaddingLeft,
    HomeShopifyLeftMaxWidth,
    HomeShopifyLeftMarginTop,
    HomeShopifytitleFontWeight,
    HomeShopifytitleLineHeight,
    imageUrlMaxWidth,
    imageUrlBorderRadius,
    HomeShopifyBtnTalkSpanBgColor,
    HomeShopifyBtnTalkSpanColor,
    HomeShopifyBtnTalkSpanWidth,
    HomeShopifyBtnTalkSpanHeight,
    HomeShopifyBtnTalkSpanBorderRadius,
    HomeShopifyBtnTalkSpanFontSize,
    HomeShopifyBtnTalkPadding,
    HomeShopifyBtnTalkPaddingRight,
    HomeShopifyBtnTalkBorder,
    HomeShopifyBtnTalkGap,
    HomeShopifyBtnAuditBorderRadius,
    HomeShopifyPtagMarginTop,
    HomeShopifyPtagFontWeight,
    HomeShopifyUiMarginTop,
    HomeShopifyUiPadding,
    HomeShopifyUiListStyle,
    HomeShopifyLiFontSize,
    HomeShopifyLiFontWeight,
    HomeShopifyLiMarginBottom,
    HomeShopifyBtnDivMarginTop,
    HomeShopifyBtnDivGap,
    HomeShopifyBtnAuditPadding,
    HomeShopifyBtnAuditFontSize,
    HomeShopifyBtnAuditFontWeight,
    HomeShopifyBtnAuditCursor,
    HomeShopifyPaddingLeftMob,
    HomeShopifyRightImgMob,
    HomeShopifyBtnTalkGapMob,
    HomeShopifyBtnTalkWidthMob,
    HomeShopifyBtnTalkWidth,
    HomeShopifyBtnTalkWidth1,
    HomeShopifyBtnTalkGapMob1,
    HomeShopifyFontSizeMob,
  } = data;

  const imageUrl = `${HomeShopifyRightImg[0]?.url}`;
  const mobimageUrl = `${HomeShopifyRightImgMob[0]?.url}`;

  return (
    <div
      className="d-flex justify-content-between m-auto flex-md-row flex-column-reverse "
      style={{
        maxWidth: HomeShopifyMaxWidth,
        // paddingLeft: HomeShopifyPaddingLeft,
        paddingLeft:
          window.innerWidth <= 768
            ? HomeShopifyPaddingLeftMob
            : HomeShopifyPaddingLeft,
      }}
    >
      <div
        style={{
          maxWidth:
            window.innerWidth <= 768 ? "unset" : HomeShopifyLeftMaxWidth,
          marginTop:
            window.innerWidth <= 768 ? "unset" : HomeShopifyLeftMarginTop,
        }}
      >
        <h1
          style={{
            color: HomeShopifytitleColor,
            fontSize:
              window.innerWidth <= 768
                ? HomeShopifyFontSizeMob
                : HomeShopifyFontSize,
            fontWeight: HomeShopifytitleFontWeight,
            lineHeight: HomeShopifytitleLineHeight,
          }}
        >
          {HomeShopifytitle}
        </h1>
        <p
          style={{
            color: HomeShopifyPtagColor,
            fontSize: HomeShopifyPtagFontSize,
            marginTop: HomeShopifyPtagMarginTop,
            fontWeight: HomeShopifyPtagFontWeight,
          }}
        >
          {HomeShopifyPtag}
        </p>
        <ul
          style={{
            listStyle: HomeShopifyUiListStyle,
            padding: HomeShopifyUiPadding,
            marginTop: HomeShopifyUiMarginTop,
          }}
        >
          <li
            className="d-flex align-items-center"
            style={{
              fontSize: HomeShopifyLiFontSize,
              fontWeight: HomeShopifyLiFontWeight,
              marginBottom: HomeShopifyLiMarginBottom,
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
            {HomeShopifyLi1}
          </li>
          <li
            className="d-flex align-items-center"
            style={{
              fontSize: HomeShopifyLiFontSize,
              fontWeight: HomeShopifyLiFontWeight,
              marginBottom: HomeShopifyLiMarginBottom,
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
            {HomeShopifyLi2}
          </li>
          <li
            className="d-flex align-items-center"
            style={{
              fontSize: HomeShopifyLiFontSize,
              fontWeight: HomeShopifyLiFontWeight,
              marginBottom: HomeShopifyLiMarginBottom,
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
            {HomeShopifyLi3}
          </li>
        </ul>

        <div
          className="d-block d-md-flex"
          style={{
            marginTop: HomeShopifyBtnDivMarginTop,
            gap: HomeShopifyBtnDivGap,
          }}
        >
          <button
            className="d-flex align-items-center mt-md-0 mt-3"
            style={{
              padding: HomeShopifyBtnTalkPadding,
              paddingRight: HomeShopifyBtnTalkPaddingRight,
              border: `2px solid ${HomeShopifyBtnAuditColor}`,
              borderRadius: HomeShopifyBtnAuditBorderRadius,
              fontSize: HomeShopifyBtnAuditFontSize,
              fontWeight: HomeShopifyBtnAuditFontWeight,
              cursor: HomeShopifyBtnAuditCursor,
              backgroundColor: HomeShopifyBtnAuditBgColor,
              color: HomeShopifyBtnAuditColor,
              gap:
                window.innerWidth <= 768
                  ? HomeShopifyBtnTalkGapMob
                  : HomeShopifyBtnTalkGap,
              width:
                window.innerWidth <= 768
                  ? HomeShopifyBtnTalkWidthMob
                  : HomeShopifyBtnTalkWidth,
            }}
          >
            {HomeShopifyBtnAudit}

            <span
              className="d-flex d-md-none align-items-center justify-content-center"
              style={{
                backgroundColor: HomeShopifyBtnTalkSpanColor,
                color: HomeShopifyBtnTalkSpanBgColor,
                width: HomeShopifyBtnTalkSpanWidth,
                height: HomeShopifyBtnTalkSpanHeight,
                borderRadius: HomeShopifyBtnTalkSpanBorderRadius,
                fontSize: HomeShopifyBtnTalkSpanFontSize,
              }}
            >
              ↗
            </span>
          </button>

          <button
            className="d-flex align-items-center mt-md-0 mt-3"
            style={{
              padding: HomeShopifyBtnTalkPadding,
              paddingRight: HomeShopifyBtnTalkPaddingRight,
              border: HomeShopifyBtnTalkBorder,
              borderRadius: HomeShopifyBtnAuditBorderRadius,
              fontSize: HomeShopifyBtnAuditFontSize,
              fontWeight: HomeShopifyBtnAuditFontWeight,
              cursor: HomeShopifyBtnAuditCursor,
              backgroundColor: HomeShopifyBtnTalkBgColor,
              color: HomeShopifyBtnTalkColor,
              gap:
                window.innerWidth <= 768
                  ? HomeShopifyBtnTalkGapMob1
                  : HomeShopifyBtnTalkGap,
              width:
                window.innerWidth <= 768
                  ? HomeShopifyBtnTalkWidthMob
                  : HomeShopifyBtnTalkWidth1,
            }}
          >
            {HomeShopifyBtnTalk}

            <span
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: HomeShopifyBtnTalkSpanBgColor,
                color: HomeShopifyBtnTalkSpanColor,
                width: HomeShopifyBtnTalkSpanWidth,
                height: HomeShopifyBtnTalkSpanHeight,
                borderRadius: HomeShopifyBtnTalkSpanBorderRadius,
                fontSize: HomeShopifyBtnTalkSpanFontSize,
              }}
            >
              ↗
            </span>
          </button>
        </div>
      </div>

      <div>
        <picture>
          <source srcSet={imageUrl} media="(min-width: 769px)" />
          <source srcSet={mobimageUrl} media="(max-width: 768px)" />
          <img
            src={mobimageUrl}
            alt="Shopify Preview"
            style={{
              maxWidth: imageUrlMaxWidth,
              borderRadius: imageUrlBorderRadius,
            }}
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeShopify;
