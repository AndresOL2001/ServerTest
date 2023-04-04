import { IHero } from './Hero';

const base: IHero = {
  name: 'Hello world!',
  height: "200",
  url: '/heroBackground.svg',
  rounded: 12,
  padding: 20
};

export const mockHeroProps = {
  base,
};