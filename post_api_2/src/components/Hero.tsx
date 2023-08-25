import { HeroProps } from "../utils/props";

const Hero = ({ title }: HeroProps) => {
  return (
    <>
      <h1 className="display-1">{title}</h1>
    </>
  );
};

export default Hero;
