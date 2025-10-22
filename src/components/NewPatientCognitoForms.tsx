import Script from "next/script";

export default function CognitoFormEmbed() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.cognitoforms.com/f/lNlU0CZ_4kGStt3vQZy0xw/1"
        allow="payment"
        style={{ border: 0, width: "100%" }}
        height="4458"
        title="Cognito Form"
      />
      <Script src="https://www.cognitoforms.com/f/iframe.js" strategy="lazyOnload" />
    </div>
  );
}
