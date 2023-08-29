/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'container': 'calc(100% - 4rem)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/4f0437a7-333c-42f9-801e-dce7a032c30c/CA-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }
    },
  },
  plugins: [],
}