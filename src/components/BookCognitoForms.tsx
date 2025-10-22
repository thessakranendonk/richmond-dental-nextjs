// components/BookCognitoForm.tsx
import Script from "next/script";

export default function BookCognitoForm() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.cognitoforms.com/f/lNlU0CZ_4kGStt3vQZy0xw/3"
        allow="payment"
        style={{ border: 0, width: "100%" }}
        height={563} // initial height; iframe.js will auto-resize
        title="Book Cognito Form"
      />
      <Script
        src="https://www.cognitoforms.com/f/iframe.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
