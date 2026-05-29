import React from 'react'

const LoadingSpinner = ({ size = 40, color = '#10B981' }) => {
  return (
    <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
      <div
        className="spinner"
        style={{
          width: size,
          height: size,
          border: `3px solid ${color}20`,
          borderTopColor: color,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner