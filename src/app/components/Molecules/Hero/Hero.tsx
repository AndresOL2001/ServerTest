import styles from './Hero.module.css';

export interface IHero {
  sampleTextProp: string;
}

const Hero: React.FC<IHero> = ({ sampleTextProp }) => {
  return (
    <header className={styles.container + ' bg-hero px-5 py-5'}>        
          <h1 className={styles.title}>Welcome, {sampleTextProp}</h1>
    </header>
  )
};

export default Hero;