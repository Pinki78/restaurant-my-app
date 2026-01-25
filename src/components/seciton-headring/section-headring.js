import React from "react";

const SectionHeadrTitel = (props) => {
  const { SectionHeadr, SectionInfo, HeadringClass } = props;

  return (
    <div className={`bx-section-headring ${HeadringClass || ""}`}>
      <h2>
        {SectionHeadr}
        <div className="wave"> </div>
      </h2>
      {SectionInfo && (
        <p>
          {typeof SectionInfo === "string" ? SectionInfo.trim() : SectionInfo}
        </p>
      )}
    </div>
  );
};

export default SectionHeadrTitel;
