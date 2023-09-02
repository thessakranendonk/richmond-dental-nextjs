const NewPatientIntake: React.FC = () => {
  return (
    <div>
      {" "}
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
          height: "539px",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default NewPatientIntake;
