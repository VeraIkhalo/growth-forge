module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
        extend: {
          colors: {
            blue:{
              100: "#000000",
              200: "#c0fcfb",
              300: "#10029a"
              
            },
            purple:{
                100: "#10029a"
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