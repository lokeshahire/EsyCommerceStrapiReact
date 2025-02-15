import React, { useEffect, useState } from "react";
import axios from "axios";

const CASE_CARDS_API =
  "https://active-hug-9ed6899866.strapiapp.com/api/case-cards?populate=*";

const CaseStudyCards = () => {
  const [caseCards, setCaseCards] = useState([]);

  useEffect(() => {
    axios.get(CASE_CARDS_API).then((response) => {
      if (response.data && response.data.data) {
        setCaseCards(response.data.data);
      }
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center g-4 text-center">
        {caseCards.map((card) => {
          const {
            id,
            CaseCardName,
            CaseCardDes,
            CaseCardSpan,
            CaseCardNo1,
            CaseCardNo2,
            CaseCardNo3,
            CaseCardRead,
            CaseCardReadUrl,
            CaseCardImg,
            CaseCardBgColor,
            CaseCardBorderRadius,
            CaseCardPadding,
            CaseCardBorder,
            CaseCardHeight,
            CaseCardNameTop,
            CaseCardNameLeft,
            CaseCardNameTransform,
            CaseCardNameBgColor,
            CaseCardNameColor,
            CaseCardNameFontSize,
            CaseCardNameBorderRadius,
            CaseCardNamePadding,
            CaseCardNameZIndex,
            imageUrlHeight,
            CaseCardDesFontSize,
            CaseCardDesColor,
            CaseCardDesMarginTop,
            CaseCardNoWidth,
            CaseCardNoHeight,
            CaseCardNoBgColor,
            CaseCardNoMargin,
            CaseCardReadColor,
            CaseCardReadBorderBottom,
            CaseCardReadWidth,
            CaseCardReadMargin,
            CaseCardReadPaddingTop,
            CaseCardMarginTop,
            CaseCardNameWidth,
            CaseCardHeightMob,
            CaseCardNameWidthMob,
          } = card;

          const imageUrl = `${CaseCardImg[0]?.url}`;

          return (
            <div key={id} className="col-md-5 col-11 casecard">
              <div
                className=" border-1 rounded-4 p-4 position-relative text-center mb-md-0 mb-5"
                style={{
                  backgroundColor: CaseCardBgColor,
                  borderRadius: CaseCardBorderRadius,
                  padding: CaseCardPadding,
                  border: CaseCardBorder,
                  // height: CaseCardHeight,
                  height:
                    window.innerWidth <= 768
                      ? CaseCardHeightMob
                      : CaseCardHeight,
                }}
              >
                {/* Category Badge */}
                <div
                  className="position-absolute font-weight-bold"
                  style={{
                    top: CaseCardNameTop,
                    left: CaseCardNameLeft,
                    transform: CaseCardNameTransform,
                    backgroundColor: CaseCardNameBgColor,
                    color: CaseCardNameColor,
                    fontSize: CaseCardNameFontSize,
                    padding: CaseCardNamePadding,
                    borderRadius: CaseCardNameBorderRadius,
                    zIndex: CaseCardNameZIndex,
                    width:
                      window.innerWidth <= 768
                        ? CaseCardNameWidthMob
                        : CaseCardNameWidth,
                  }}
                >
                  {CaseCardName}
                </div>

                <img
                  src={imageUrl}
                  alt={CaseCardSpan}
                  className="card-img-top rounded-3 mt-3"
                  style={{
                    height: imageUrlHeight,
                  }}
                />
                <div className="card-body my-5">
                  <h5
                    className=""
                    style={{
                      fontSize: CaseCardDesFontSize,
                      color: CaseCardDesColor,
                      marginTop: CaseCardDesMarginTop,
                    }}
                  >
                    <span
                      className="font-weight-bold"
                      style={{ color: CaseCardNameColor }}
                    >
                      {CaseCardSpan}
                    </span>
                    {CaseCardDes}
                  </h5>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center text-center mt-3">
                    <div className="flex-fill">
                      <h1 className="fw-bold">{CaseCardNo1}</h1>
                      <p className="text-muted">Revenue Growth</p>
                    </div>

                    <div
                      className=""
                      style={{
                        width: CaseCardNoWidth,
                        height: CaseCardNoHeight,
                        backgroundColor: CaseCardNoBgColor,
                        margin: CaseCardNoMargin,
                      }}
                    ></div>

                    <div className="flex-fill">
                      <h1 className="fw-bold">{CaseCardNo2}</h1>
                      <p className="text-muted">Site Load Speed</p>
                    </div>

                    <div
                      style={{
                        width: CaseCardNoWidth,
                        height: CaseCardNoHeight,
                        backgroundColor: CaseCardNoBgColor,
                        margin: CaseCardNoMargin,
                      }}
                    ></div>

                    <div className="flex-fill">
                      <h1 className="fw-bold">{CaseCardNo3}</h1>
                      <p className="text-muted">Increased CVR</p>
                    </div>
                  </div>
                  <hr />

                  <a
                    href={CaseCardReadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold d-block text-center text-decoration-none"
                    style={{
                      color: CaseCardReadColor,
                      borderBottom: CaseCardReadBorderBottom,
                      width: CaseCardReadWidth,
                      margin: CaseCardReadMargin,
                      paddingTop: CaseCardReadPaddingTop,
                    }}
                  >
                    {CaseCardRead} ↗
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudyCards;
