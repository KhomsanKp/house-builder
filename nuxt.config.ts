// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  app: {
    head: {
      htmlAttrs: {
        lang: "th", // บอก Google ว่าเว็บนี้เป็นภาษาไทย
      },
  
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            colors: {
              primary: "#1565C0", // สีน้ำเงินเข้ม (สื่อถึงความมั่นคง)
              secondary: "#F57C00", // สีส้ม (สื่อถึงการก่อสร้าง/พลังงาน)
              accent: "#82B1FF",
            },
          },
        },
      },
    },
  },
});
