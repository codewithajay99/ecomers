import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    show && (
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "35px",
          height: "35px",
          borderRadius: "10%",
          background: "blue",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
          cursor: "pointer",
          zIndex: 999,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
        }}
      >
        ↑
      </div>
    )
  );
}
