import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://active-hug-9ed6899866.strapiapp.com/api/home-gets?populate=*";

const GetStartedSection = () => {
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
    HomeGetViewBtn,
    HomeGetViewBtnBorder,
    HomeGetViewBtnRadius,
    HomeGetViewBtnColor,
    HomeGetViewBtnBgColor,
    HomeGetHead,
    HomeGetHeadColor,
    HomeGetHeadFontSize,
    HomeGetHeadWeight,
    HomeGetHeadBook,
    HomeGetHeadBookColor,
    HomeGetHeadBookBgColor,
    HomeGetHeadBookBorder,
    HomeGetHeadBookRadius,
    HomeGetHeadAudit,
    HomeGetHeadAuditColor,
    HomeGetHeadAuditBgColor,
    HomeGetHeadAuditBorder,
    HomeGetHeadAuditRadius,
    HomeGetViewBtnBorderRadius,
    HomeGetViewBtnFontSize,
    HomeGetViewBtnWeight,
    HomeGetViewBtnPadding,
    HomeGetViewBtnCursor,
    HomeGetViewBtnShadow,
    HomeGetViewBtnOutline,
    HomeGetViewBtnTran,
    HomeGetViewBtnWidth,
    HomeGetViewBtnMarBtm,
    HomeGetHeadWidth,
    HomeGetHeadMarginTop,
    HomeGetHeadPadding,
    HomeGetHeadBg,
    HomeGetHeadMarginBtm,
    HomeGetHeadBookGap,
    HomeGetHeadBookPadding,
    HomeGetHeadBookPaddingRight,
    HomeGetHeadBookBorderRadius,
    HomeGetHeadBookFontSize,
    HomeGetHeadBookWeight,
    HomeGetHeadBookCursor,
    HomeGetHeadBookInGap,
    HomeGetHeadBookSpanBgColor,
    HomeGetHeadBookSpanColor,
    HomeGetHeadBookSpanWidth,
    HomeGetHeadBookSpanHeight,
    HomeGetHeadBookSpanBorderRadius,
    HomeGetHeadBookSpanFontSize,
    HomeGetHeadAuditBorderRadius,
    HomeGetHeadAuditFontSize,
    HomeGetHeadAuditWeight,
    HomeGetHeadAuditPadding,
    HomeGetHeadAuditCursor,
    HomeGetHeadAuditShadow,
    HomeGetHeadAuditOutline,
    HomeGetHeadAuditTran,
    HomeGetPadding,
    HomeGetHeadAuditWidthMob,
    HomeGetHeadBookWidth,
    HomeGetHeadBookGapMob,
    HomeGetHeadBookGap1,
    HomeGetHeadAuditWidth,
    HomeGetHeadAuditGapMob,
  } = data;

  return (
    <div
      className="text-center"
      style={{
        padding: HomeGetPadding,
      }}
    >
      <button
        className="d-none d-md-block m-auto mb-5"
        style={{
          border: HomeGetViewBtnBorder,
          borderRadius: HomeGetViewBtnBorderRadius,
          color: HomeGetViewBtnColor,
          background: HomeGetViewBtnBgColor,
          fontSize: HomeGetViewBtnFontSize,
          fontWeight: HomeGetViewBtnWeight,
          padding: HomeGetViewBtnPadding,
          cursor: HomeGetViewBtnCursor,
          boxShadow: HomeGetViewBtnShadow,
          outline: HomeGetViewBtnOutline,
          transition: HomeGetViewBtnTran,
          marginBottom: HomeGetViewBtnMarBtm,
          width: HomeGetViewBtnWidth,
        }}
      >
        {HomeGetViewBtn}
      </button>

      <div
        className="m-auto"
        style={{
          background: HomeGetHeadBg,
          padding: HomeGetHeadPadding,
          marginTop: HomeGetHeadMarginTop,
          width: HomeGetHeadWidth,
        }}
      >
        <h2
          style={{
            fontSize: HomeGetHeadFontSize,
            fontWeight: HomeGetHeadWeight,
            color: HomeGetHeadColor,
            marginBottom: HomeGetHeadMarginBtm,
          }}
        >
          {HomeGetHead}
        </h2>

        <div
          className="d-md-flex d-block justify-content-center "
          style={{ gap: HomeGetHeadBookGap }}
        >
          <button
            className="d-flex align-items-center"
            style={{
              padding: HomeGetHeadBookPadding,
              paddingRight: HomeGetHeadBookPaddingRight,
              border: HomeGetHeadBookBorder,
              borderRadius: HomeGetHeadBookBorderRadius,
              fontSize: HomeGetHeadBookFontSize,
              fontWeight: HomeGetHeadBookWeight,
              cursor: HomeGetHeadBookCursor,
              backgroundColor: HomeGetHeadBookBgColor,
              color: HomeGetHeadBookColor,
              gap: HomeGetHeadBookInGap,
              width:
                window.innerWidth <= 768
                  ? HomeGetHeadAuditWidthMob
                  : HomeGetHeadBookWidth,
              gap:
                window.innerWidth <= 768
                  ? HomeGetHeadBookGapMob
                  : HomeGetHeadBookGap1,
            }}
          >
            {HomeGetHeadBook}

            <span
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: HomeGetHeadBookSpanBgColor,
                color: HomeGetHeadBookSpanColor,
                width: HomeGetHeadBookSpanWidth,
                height: HomeGetHeadBookSpanHeight,
                borderRadius: HomeGetHeadBookSpanBorderRadius,
                fontSize: HomeGetHeadBookSpanFontSize,
              }}
            >
              ↗
            </span>
          </button>

          <button
            className="mt-3 mt-md-0 d-flex align-items-center"
            style={{
              background: HomeGetHeadAuditBgColor,
              color: HomeGetHeadAuditColor,
              border: HomeGetHeadAuditBorder,
              borderRadius: HomeGetHeadAuditBorderRadius,
              fontSize: HomeGetHeadAuditFontSize,
              fontWeight: HomeGetHeadAuditWeight,
              padding: HomeGetHeadAuditPadding,
              cursor: HomeGetHeadAuditCursor,
              boxShadow: HomeGetHeadAuditShadow,
              outline: HomeGetHeadAuditOutline,
              transition: HomeGetHeadAuditTran,
              width:
                window.innerWidth <= 768
                  ? HomeGetHeadAuditWidthMob
                  : HomeGetHeadAuditWidth,
              gap:
                window.innerWidth <= 768
                  ? HomeGetHeadAuditGapMob
                  : HomeGetHeadBookGap1,
            }}
          >
            {HomeGetHeadAudit}

            <span
              className="d-flex d-md-none align-items-center justify-content-center"
              style={{
                backgroundColor: HomeGetHeadBookSpanColor,
                color: HomeGetHeadBookSpanBgColor,
                width: HomeGetHeadBookSpanWidth,
                height: HomeGetHeadBookSpanHeight,
                borderRadius: HomeGetHeadBookSpanBorderRadius,
                fontSize: HomeGetHeadBookSpanFontSize,
              }}
            >
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
