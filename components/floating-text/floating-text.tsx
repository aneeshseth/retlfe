// floating-image.js
export default function FloatingImage({ imageUrl, style }: any) {
  return (
    <div style={{ position: "absolute", ...style }}>
      <img
        src={imageUrl}
        alt="Floating Image"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
