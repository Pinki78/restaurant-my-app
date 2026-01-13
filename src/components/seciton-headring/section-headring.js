import React from 'react'

const SectionHeadring = (props) => {
    const {SectionHeadring, SectionInfo, HeadringClass} = props ;
  return (
    <>
          <div className={`bx-section-headring ${HeadringClass || ""}`} >
            <h2>
              {SectionHeadring}
              <div className="wave"> </div>
            </h2>
            {(SectionInfo || []).length === 0 && (
              <p className="bx-info-line">
                {SectionInfo}
              </p>
            )}
           
          </div>
    </>
  )
}

export default SectionHeadring