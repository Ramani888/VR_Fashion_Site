import React from "react"

export const GetAppButton = () => {
  return (
    <>
      <a href={'https://play.google.com/store/apps/details?id=com.vr_fashion'} target="_blank" rel="noopener noreferrer" style={styles.button}>
        <svg viewBox="0 0 512 512" style={styles.icon} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            fill="currentColor"
          />
        </svg>
        <div style={styles.textContainer}>
          <span style={styles.smallText}>GET IT ON</span>
          <span style={styles.largeText}>Google Play</span>
        </div>
      </a>
      <style jsx>{`
        @keyframes buttonHover {
          0% {
            background-color: #000000;
          }
          100% {
            background-color: #333333;
          }
        }
      `}</style>
    </>
  )
}

const styles = {
  button: {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#000000",
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    transition: "background-color 0.3s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  icon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  smallText: {
    fontSize: "10px",
    fontWeight: "normal",
    whiteSpace: "nowrap"
  },
  largeText: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "1",
    whiteSpace: "nowrap"
  },
}

export default GetAppButton;

