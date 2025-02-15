export const MobileMarquee = ({ text, style }) => (
  <div
    style={{
      ...style,
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%",
      position: "relative",
    }}
  >
    <div
      style={{
        display: "inline-block",
        animation: "marqueeMobile 10s linear infinite",
        width: "fit-content",
      }}
    >
      {/* Duplicate the text to create seamless loop */}
      <span>{text}</span>
      <span style={{ marginLeft: "50px" }}>{text}</span>
      <span style={{ marginLeft: "50px" }}>{text}</span>
    </div>
    <style>
      {`
          @keyframes marqueeMobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
    </style>
  </div>
);
