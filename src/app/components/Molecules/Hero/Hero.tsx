import styles from './Hero.module.css';

export interface IHero {
  name: string,
  height: string,
  url: string,
  rounded: number
}

const Hero: React.FC<IHero> = ({ name, height, url, rounded }) => {
  return (
    <header
      style={{
        backgroundImage: `url(${ url })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: `${rounded}px`,
        height: `${height}px`,        
      }}
      className={`w-full px-5 py-5 flex items-end`}
    >
      <h1 className={"text-light text-5xl font-sans"}>Welcome, { name }</h1>
    </header>
  );
};

export default Hero;