export interface IHero {
  name: string;
  height: string;
  url: string;
  rounded: number;
  padding: number;
}

const Hero: React.FC<IHero> = ({ name, height, url, rounded, padding }) => {
  return (
    <header
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: `${rounded}px`,
        height: `${height}px`,
        padding: `${padding}px`,
      }}
      className={`w-full flex items-end`}
    >
      <h1 className={"text-light font-serif"}>Welcome, {name}</h1>
    </header>
  );
};

export default Hero;
