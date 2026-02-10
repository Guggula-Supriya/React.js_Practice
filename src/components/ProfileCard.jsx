import React from "react";
import img1 from "../images/image-1.jpeg";
import img2 from "../images/image-2.jpeg";
import img3 from "../images/image-3.jpeg";
import nightBg from "../images/profile-background.jpg";

/* =========================
   STARS BACKGROUND
========================= */
function StarsBackground({ children }) {
  return (
    <div style={bgStyles.wrapper}>
      {/* Moving Background */}
      <div style={bgStyles.background}></div>

      {/* Dark Cinematic Overlay */}
      <div style={bgStyles.overlay}></div>

      {/* Content */}
      <div style={bgStyles.content}>{children}</div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes windMove {
            0% {
              background-position: 50% 50%;
              transform: scale(1);
              filter: brightness(0.95);
            }

            50% {
              background-position: 54% 48%;
              transform: scale(1.04);
              filter: brightness(1);
            }

            100% {
              background-position: 48% 52%;
              transform: scale(1.02);
              filter: brightness(0.97);
            }
          }
        `}
      </style>
    </div>
  );
}

/* =========================
   HOVER BUTTON
========================= */
function HoverButton({ text, baseStyle }) {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={{
        ...baseStyle,
        transform: hover ? "scale(1.08)" : "scale(1)",
        filter: hover ? "brightness(1.15)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
}

/* =========================
   PROFILE CARD
========================= */
function ProfileCard({ name, role, img, rating }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...cardStyles.card,
        transform: hover ? "scale(1.03)" : "scale(1)",
        boxShadow: hover
          ? "0 30px 70px rgba(0,0,0,0.4)"
          : cardStyles.card.boxShadow,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={cardStyles.top}>
        <img src={img} alt={name} style={cardStyles.avatar} />
      </div>

      <div style={cardStyles.body}>
        <h3>{name}</h3>
        <p style={{ color: "#555" }}>{role}</p>

        <div style={cardStyles.stars}>
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        <div style={cardStyles.btnGroup}>
          <HoverButton text="About" baseStyle={cardStyles.aboutBtn} />
          <HoverButton text="Hire" baseStyle={cardStyles.hireBtn} />
        </div>
      </div>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function Profiles() {
  return (
    <StarsBackground>
      <div style={pageStyles.page}>
        <h1>Profile Cards</h1>

        <div style={pageStyles.cards}>
          <ProfileCard name="Supriya" role="Web Developer" img={img1} rating={4} />
          <ProfileCard name="Madhura" role="App Developer" img={img2} rating={4} />
          <ProfileCard name="Aswini" role="Photographer" img={img3} rating={4} />
        </div>
      </div>
    </StarsBackground>
  );
}

/* =========================
   PAGE STYLES
========================= */
const pageStyles = {
  page: {
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px",
    color: "#fff",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "70px",
    marginTop: "40px",
  },
};

/* =========================
   BACKGROUND STYLES
========================= */
const bgStyles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    overflow: "hidden",
  },

  background: {
    position: "fixed",
    inset: 0,
    backgroundImage: `url(${nightBg})`,
    backgroundSize: "115% 115%",
    backgroundPosition: "center",
    animation: "windMove 45s ease-in-out infinite alternate",
    zIndex: 0,
    willChange: "transform, background-position",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(20,10,50,0.75), rgba(133,76,124,0.85))",
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },
};

/* =========================
   CARD STYLES
========================= */
const cardStyles = {
  card: {
    width: "260px",
    minHeight: "360px",
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    overflow: "hidden",
    textAlign: "center",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
  },

  top: {
    background: "#7a30ff",
    height: "110px",
    position: "relative",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid white",
    position: "absolute",
    cursor: "pointer",
    bottom: "-45px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
  },

  body: {
    padding: "60px 20px 25px",
  },

  stars: {
    color: "#7a30ff",
    margin: "10px 0",
  },

  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px",
  },

  aboutBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: "#7a30ff",
    color: "#fff",
    cursor: "pointer",
  },

  hireBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: "#5a00ff",
    color: "#fff",
    cursor: "pointer",
  },
};
