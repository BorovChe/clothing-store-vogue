const HeroBackground = () => {
  return (
    <>
      <div
        className="absolute -bottom-6 xl:top-4 right-[50%] translate-x-1/2 md:translate-x-0 md:right-[140px] -z-10
       w-[300px] h-[300px] md:w-[440px] md:h-[440px] xl:w-[644px] xl:h-[644px] rounded-full bg-home-hero-gradient bg-no-repeat "
      />
      <div
        className="absolute bottom-0 right-[50%] translate-x-1/2 md:translate-x-0  md:right-[120px] -z-10 
         w-[320px] h-[246px] xl:w-[774px] xl:h-[592px] md:w-[416px] md:h-[320px]
       bg-[url('/images/hero/home-hero-bg.png')]  bg-[auto_246px] md:bg-[auto_320px] xl:bg-[auto_592px] bg-no-repeat "
      />
    </>
  );
};

export default HeroBackground;
