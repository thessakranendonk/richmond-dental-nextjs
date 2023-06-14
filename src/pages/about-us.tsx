const AboutUs: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-8 mt-24 flex flex-col gap-y-10 xl:mx-0 xl:w-screen relative z-10">
      <div className="xl:flex xl:flex-row xl:justify-between md:mt-12 xl:-mt-40">
        <div className="hidden xl:flex xl:flex-row xl:w-screen xl:justify-between">
          <img
            className="img img-settings object-none br-left mt-40"
            src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1683489767/richmond-dental/richmond2_wxsckg.jpg"
          />
          <div className="img-wrap img-wrap-xl br-left top-[20px] left-[20px]">
            <div className="back-img br-left"></div>
            <img
              className="back-img object-none br-left"
              src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1683489767/richmond-dental/richmond2_wxsckg.jpg"
            />
          </div>
        </div>

        <div className="p-0 my-auto md:max-w-2xl text-center md:mx-auto xl:text-left px-20">
          <h1 className="pt-16 lg:pt-0 font-semibold text-2xl md:text-3xl xl:text-5xl mb-8 xl:w-[32rem] mx-auto text-zinc-800 text-center text-shadow-lg shadow-zinc-300">
            About Us
          </h1>
          <p className="text-zinc-500 text-center text-md font-light xl:text-lg">
            We believe that everyone can have a healthy smile for life and with
            our help it's easier than you think! We are passionate about helping
            patients to live better lives thanks to good oral health.
          </p>
        </div>
        <div className="xl:hidden mt-16">
          <img
            className="img-sm md:img-wrap-md img-settings br-left mx-auto mb-12"
            src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1683489767/richmond-dental/richmond2_wxsckg.jpg"
          />
        </div>
      </div>
      <div className="w-screen -ml-8 xl:ml-0 xl:flex xl:flex-row xl:justify-between bg-clip-content text-transparent bg-brand-lightest/20 bg-gradient-to-tl from-brand-lightest via-brand-base to-brand-lightest">
        <div className="w-[calc(10% - 10px)] mx-5 p-0 my-auto md:max-w-5xl text-center md:mx-auto xl:text-left py-12 text-zinc-200">
          <h2 className="font-normal text-shadow-lg shadow-zinc-700 text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-center">
            Why Choose Us?
          </h2>
          <p className="text-center text-sm xl:text-lg font-extralight pb-6 text-shadow-lg shadow-zinc-700">
            Our downtown dental office provides a wide range of general,
            cosmetic and emergency dentistry services using modern equipments.
            Our dental implant procedure and veneers are well known in Toronto.
            We have surgical clean air, extensive safety measurements in place
            to prevent infectious pathogens like Covid-19 from spreading. On top
            of that, we disinfect and sterilize every equipments and surfaces
            after each procedure.
          </p>
          <p className="text-center text-sm xl:text-lg font-extralight text-shadow-lg shadow-zinc-700">
            Our patients always leave the office with a happy smile. That’s why
            we have a perfect 5-star rating on Google! Our dental team is
            professional, capable and honest. Our goal is to make your visit as
            smooth as possible.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:flex-row xl:justify-between mt-20 md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
        <div className="p-0 my-auto xl:w-1/2 md:max-w-2xl text-center md:mx-auto xl:text-left">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-zinc-800 text-center text-shadow-lg shadow-zinc-300">
            Dr. Michael Le
          </h2>
          <p className="text-zinc-500 text-center text-sm xl:text-lg pb-10">
            Dr. Michael Le completed his undergraduate degree at McMaster
            University in Hamilton, Ontario. He then went on to obtain his
            Doctor of Dental Surgery degree at New York University College of
            Dentistry with an emphasis on Esthetic Dentistry and Implant
            Dentistry. Following his dental school training – he furthered his
            education at New York Hospital Queens/New York-Presbyterian Queens,
            where he completed a General Practice Residency with a focus on
            Trauma and Pathology of the Oral Facial Complex.
          </p>
          <p className="text-zinc-500 text-center text-sm xl:text-lg pb-10">
            Continuing education is always a priority with Dr. Le, and he
            continues to learn and improve on his skills and knowledge annually.
            He joins discussion groups and lectures to assess the current state
            of the industry from both a technical and scientific point of view.
          </p>
          <p className="text-zinc-500 text-center text-sm xl:text-lg pb-10">
            His practice is ever-evolving from basic white fillings to esthetic
            crowns and veneers to therapeutic Botox Treatment for the
            TMJ/Grinding and Clenching.
          </p>
        </div>
        {/* <img
          className="br-right-about object-cover object-top bg-clip-content text-transparent bg-gradient-to-r from-brand-lightest to-brand-base md:img-about-md lg:img-about-md img-about-sm img-settings"
          src="https://res.cloudinary.com/dyjj9jfc2/image/upload/c_scale,w_552/v1685050606/image-1_tkf616.png"
        /> */}
        <div className="relative w-[600px] h-[600px]">
          <img
            // className="img img-settings object-none br-left mt-40"
            className="br-right-about object-cover object-top object- bg-clip-content text-transparent bg-gradient-to-r from-brand-lightest to-brand-base md:img-about-md img-about-sm img-settings"
            src="https://res.cloudinary.com/dyjj9jfc2/image/upload/c_scale,w_552/v1685050606/image-1_tkf616.png"
          />
          <div className="img-wrap img-wrap-xl br-right-about top-[20px] right-[20px]">
            <div className="back-img br-left"></div>
            <img
              className="back-img br-right-about object-cover object-top bg-clip-content text-transparent bg-gradient-to-r from-brand-lightest to-brand-base"
              src="https://res.cloudinary.com/dyjj9jfc2/image/upload/c_scale,w_552/v1685050606/image-1_tkf616.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
