import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

function InnerBanner({bannerImg}) {
    const bannerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();

      const offset = rect.top * 0.2;

      bannerRef.current.style.setProperty(
        "--parallax",
        `${offset}px`
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={bannerRef} className="innerBanner">
            <img src={bannerImg} alt="Banner" />

      <div className="bannerContent">
        <h1>Men's Collection</h1>
      </div>
    </div>
  )
}

export default InnerBanner