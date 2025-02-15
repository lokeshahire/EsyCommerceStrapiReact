import React, { useEffect, useState } from "react";

const HOME_STUN_API =
  "https://active-hug-9ed6899866.strapiapp.com/api/home-stuns?populate=*";

const HomeStun = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeStunData = async () => {
      try {
        const response = await fetch(HOME_STUN_API);
        if (!response.ok) {
          throw new Error("Failed to fetch HomeStun data");
        }
        const result = await response.json();

        if (result?.data?.length > 0) {
          setData(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching HomeStun data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeStunData();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}></p>;

  return (
    <div
      className="text-center d-flex align-items-center flex-column"
      style={{
        padding: data?.HomeStunPadding,
        maxWidth: data?.HomeStunMaxWidth,
        margin: data?.HomeStunMargin,
      }}
    >
      <h2
        className="text-md-center text-start"
        style={{
          marginBottom: data?.HomeStunHeadMarginBottom,
          color: data?.HomeStunHeadColor,
          fontSize:
            window.innerWidth <= 768
              ? data.HomeStunHeadFontSizeMob
              : data.HomeStunHeadFontSize,
          fontWeight: data?.HomeStunHeadFontWeight,
        }}
      >
        {data?.HomeStunHead}
      </h2>

      <p
        className="text-md-center text-start"
        style={{
          lineHeight: data?.HomeStunParaLineH,
          marginTop: data?.HomeStunParaMarginTop,
          color: data?.HomeStunParaColor,
          fontSize: data?.HomeStunParaFontSize,
          width: data?.HomeStunParaWidth,
        }}
      >
        {data?.HomeStunPara}
      </p>
    </div>
  );
};

export default HomeStun;
