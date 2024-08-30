module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
        extend: {
          colors: {
            black: {
              DEFAULT: "#000",
              100: "#232323",
              
            },
            blue:{
              100: "#060624",
              200: "#E4F9FF",
              
            },
            purple:{
                100: "#4131B2"
            },
            grey: {
              100: "#999999"
            }
            
          },
          fontFamily: {
            ithin: ["Inter-Thin", "sans-serif"],
            
          },
        },
      },
      plugins: [],
    };