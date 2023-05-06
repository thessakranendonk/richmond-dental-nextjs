import { images } from "@/pages/office-tour";

const ImageGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {images.map((img, i) => (
        <div className="h-auto max-w-full rounded-lg" key={img}>
          <a href={`#${i.toString()}`}>
            <img
              id={i.toString()}
              src={img}
              //   className="object-cover w-28 rounded-lg"
              className="mask mask-hexagon mask-center object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
              alt="Our Practice"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
