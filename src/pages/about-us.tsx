const AboutUs: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-8 mt-24 flex flex-col gap-y-10 xl:mx-0 relative -z-20">
      <div className="xl:flex xl:flex-row xl:justify-between">
        <img
          src="https://res.cloudinary.com/dybcfr6cd/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,w_1000/v1682719836/richmond-dental/DSC5543-1024x683_zdp76h.jpg"
          alt="About Us"
          className="mask mask-hexagon mask-center mb-8 object-contain xl:mask-left -z-20 h-48 md:h-72 xl:h-[55rem] xl:w-[42rem] mt-5 mx-auto"
        />
        <div className="p-0 my-auto xl:w-1/2 md:max-w-2xl text-center md:mx-auto xl:text-left">
          <h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-zinc-800 text-center">
            About Us
          </h1>
          <p className="text-zinc-500 text-center text-sm xl:text-lg">
            We believe that everyone can have a healthy smile for life and with
            our help it's easier than you think! We are passionate about helping
            patients to live better lives thanks to good oral health.
          </p>
        </div>
      </div>
      <div className="w-screen -ml-8 xl:ml-0 xl:flex xl:flex-row xl:justify-between bg-clip-content text-transparent bg-gradient-to-r from-teal-400 to-teal-700">
        <div className="w-[calc(10% - 10px)] mx-5 p-0 my-auto md:max-w-5xl text-center md:mx-auto xl:text-left py-12 text-zinc-200">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-center">
            Why Choose Us?
          </h2>
          <p className="text-center text-sm xl:text-lg">
            Our downtown dental office provides a wide range of general,
            cosmetic and emergency dentistry services using modern equipments.
            Our dental implant procedure and veneers are well known in Toronto.
            We have surgical clean air, extensive safety measurements in place
            to prevent infectious pathogens like Covid-19 from spreading. On top
            of that, we disinfect and sterilize every equipments and surfaces
            after each procedure.
          </p>
          <p className="text-center text-sm xl:text-lg">
            Our patients always leave the office with a happy smile. That’s why
            we have a perfect 5-star rating on Google! Our dental team is
            professional, capable and honest. Our goal is to make your visit as
            smooth as possible.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:flex-row xl:justify-between">
        <div className="p-0 my-auto xl:w-1/2 md:max-w-2xl text-center md:mx-auto xl:text-left">
          <img
            src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1682865302/richmond-dental/dr-richmond_wfufcc.png"
            alt="Dr. Michael Le"
            className="xl:hidden mask mask-hexagon mask-center object-contain xl:mask-right mx-auto -z-20 h-48 md:h-72 xl:h-[55rem] xl:w-[42rem] mb-5 bg-clip-content text-transparent bg-gradient-to-r from-teal-400 to-teal-600
        "
          />
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-zinc-800 text-center">
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
        <img
          src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1682865302/richmond-dental/dr-richmond_wfufcc.png"
          alt="Dr. Michael Le"
          className="hidden xl:flex mask mask-hexagon mask-center object-contain xl:mask-right mx-auto -z-20 h-48 md:h-72 xl:h-[55rem] xl:w-[42rem] mt-5 bg-clip-content text-transparent bg-gradient-to-r from-teal-400 to-teal-600
        "
        />
      </div>
    </div>
  );
};

export default AboutUs;
