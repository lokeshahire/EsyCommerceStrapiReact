import React, { useEffect, useState } from "react";
import axios from "axios";

const CASE_API_TOP =
  "https://active-hug-9ed6899866.strapiapp.com/api/case-studies?populate=*";

const CaseTop = () => {
  const [caseTop, setCaseTop] = useState(null);

  useEffect(() => {
    axios.get(CASE_API_TOP).then((response) => {
      if (response.data && response.data.data.length > 0) {
        setCaseTop(response.data.data[0].attributes || response.data.data[0]);
      }
    });
  }, []);

  if (!caseTop) return <p></p>;

  return (
    <div className="text-md-center text-start p-md-0 p-2">
      <h2
        className="font-weight-bold"
        style={{
          fontSize: caseTop.CaseStudiesTitleFontSize,
          color: caseTop.CaseStudiesTitleColor,
          marginTop: caseTop.CaseStudiesTitleTop,
        }}
      >
        {caseTop.CaseStudiesTitle}
      </h2>

      <h1
        className="mt-4 font-weight-bolder text-center"
        style={{
          fontSize:
            window.innerWidth <= 768
              ? caseTop.CaseStudiesHeadFontSizeMob
              : caseTop.CaseStudiesHeadFontSize,
          color: caseTop.CaseStudiesHeadColor,
          fontWeight: caseTop.CaseStudiesHeadfontWeight,
        }}
      >
        {caseTop.CaseStudiesHead}
      </h1>

      <p
        className="mt-4  mx-0  mx-md-auto"
        style={{
          fontWeight: caseTop.CaseStudiesTextFontWeight,

          fontSize: caseTop.CaseStudiesTextFontSize,
          fontSize:
            window.innerWidth <= 768
              ? caseTop.CaseStudiesTextFontSizeMob
              : caseTop.CaseStudiesTextFontSize,

          color: caseTop.CaseStudiesTextColor,
          maxWidth:
            window.innerWidth <= 768
              ? caseTop.CaseStudiesmaxWidthMob
              : caseTop.CaseStudiesmaxWidth,
        }}
      >
        {caseTop.CaseStudiesText}
      </p>
    </div>
  );
};

export default CaseTop;
