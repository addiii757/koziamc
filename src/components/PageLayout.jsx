import React from 'react'

const PageLayout = ({ title, kanji, children }) => {
  return (
    <div className="page-layout">
      <div className="page-hero-koziamc">
        {/* Background Effects */}
        <div className="page-hero-bg">
          <div className="page-particles"></div>
        </div>
        
        {/* Kanji Decorations */}
        {kanji && (
          <>
            <div className="page-kanji-left">{kanji}</div>
            <div className="page-kanji-right">{kanji}</div>
          </>
        )}
        
        {/* Content */}
        <div className="container">
          <div className="page-hero-content-koziamc">
            <div className="page-badge-koziamc">
              <i className="fas fa-file-alt"></i>
              <span>STRONA INFORMACYJNA</span>
            </div>
            <h1 className="page-title-koziamc">{title}</h1>
          </div>
        </div>
      </div>
      
      <div className="container page-content">
        {children}
      </div>
    </div>
  )
}

export default PageLayout