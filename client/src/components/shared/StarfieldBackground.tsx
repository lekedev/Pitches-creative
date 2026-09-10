import starBg from "../../assets/images/starsbg.webp";

function StarfieldBackground({ blur = false }: { blur?: boolean }) {
  return (
    <div
      className={`fixed z-0 bg-cover bg-center bg-no-repeat ${
        blur ? "-inset-4 blur-[3px]" : "inset-0"
      }`}
      style={{ backgroundImage: `url(${starBg})` }}
    />
  );
}

export default StarfieldBackground;