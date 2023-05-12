const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/hero-image.jpg"
        className="w-full h-auto z-0"
        alt="Hero Image"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <p className="text-xl text-white">
          Welcome to Richmond West Dental, a modern, sophisticated and
          transparent Dental Office | Downtown Toronto | Queen West
        </p>
      </div>
    </div>
  );
};

export default Hero;
