import { images } from "@/pages/photo-gallery";

const ImageGrid: React.FC = () => {
  return (
    <div className="flex gap-4 w-full mx-auto">
      {images.map((img, i) => (
        <div className="h-auto max-w-full rounded-lg" key={img}>
          <a href={`#${i.toString()}`}>
            <img
              id={i.toString()}
              src={img}
              //   className="object-cover w-28 rounded-lg"
              className=" mask mask-hexagon mask-center z-10 h-32 w-32"
              alt="Our Practice"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
