import starBg from "../../assets/images/starsbg.webp";

function StarfieldBackground() {
  return (
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${starBg})` }}
    />
  );
}

export default StarfieldBackground;