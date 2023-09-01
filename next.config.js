module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_CONTACT_FORM_RECEIVE_EMAIL:
      process.env.NEXT_PUBLIC_CONTACT_FORM_RECEIVE_EMAIL,
    NEXT_PUBLIC_CONTACT_FORM_PASS: process.env.NEXT_PUBLIC_CONTACT_FORM_PASS,
    NEXT_PUBLIC_SENDGRID_KEY: process.env.NEXT_PUBLIC_SENDGRID_KEY,
  },
};
