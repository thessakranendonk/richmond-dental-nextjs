import PageHeading from "@/components/ui/PageHeading";
const NewPatientIntake: React.FC = () => {
  return (
    <div>
      <div className="relative pt-10 sm:pt-0 h-[14rem] md:h-[18rem]">
        <PageHeading title="Patient Intake Form" />
      </div>{" "}
      <iframe
        id="JotFormIFrame-232445360571049"
        title="Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/232445360571049"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "100rem",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default NewPatientIntake;
