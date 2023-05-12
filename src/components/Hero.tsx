const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/hero-image.jpg"
        className="w-full h-auto z-0"
        alt="Hero Image"
      />
      <div className="absolute inset-0 bg-emerald-800 opacity-75 z-10"></div>
      <div className=" w-[calc(60% - 60px)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center">
          <p className="text-xl text-white">welcome to</p>
          <h1 className="text-6xl tracking-widest font-bold text-white">
            Richmond West Dental
          </h1>
          <p className="text-2xl text-white">
            modern, sophisticated and transparent dental office
          </p>
          <p className="text-l text-white">Downtown Toronto | Queen West</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
