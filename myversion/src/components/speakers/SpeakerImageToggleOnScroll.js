import { useRef, useEffect, useState } from "react";

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {
  const [inView , setInView] = useState(false);
  const imageRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInView(isInView());
    setIsLoading(false);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  } , []);

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";

  function isInView() {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
      ref={imageRef}
    />
  );
}
