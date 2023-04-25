import { RICHMOND_TECHNOLOGY } from "../../data/technology-digital-dentistry";

const Services: React.FC = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {RICHMOND_TECHNOLOGY.map((tech) => (
          <li key={tech.technology} id={tech.id} className="pb-52">
            <div>{tech.technology}</div>
            <div>{tech.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
