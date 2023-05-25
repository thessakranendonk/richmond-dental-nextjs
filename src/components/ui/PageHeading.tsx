import clsx from "clsx";

export interface PageHeadingProps {
  title: string;
}
const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-center h-full w-screen bg-[url('https://res.cloudinary.com/dybcfr6cd/image/upload/v1670110454/nordwood-themes-KcsKWw77Ovw-unsplash_wil93u.jpg')]">
        <h1 className="relative z-10 my-auto text-center px-4 text-3xl md:text-4xl xl:text-5xl text-white tracking-widest text-shadow-lg shadow-zinc-700">
          {title}
        </h1>
      </div>
      <div className="absolute inset-0 bg-brand-lighter/90 to-black mix-blend-multiply" />
    </>
  );
};

export default PageHeading;
