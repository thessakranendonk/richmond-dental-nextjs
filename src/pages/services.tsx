import { RICHMOND_SERVICES } from "../../data/services";

const Services: React.FC = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {RICHMOND_SERVICES.map((service) => (
          <li key={service.service} id={service.id} className="pb-52">
            <div>{service.service}</div>
            <div>{service.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
