// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {lang: 'en'},
      title: `Family Recipe Website`,
      meta: [
        {name: 'charset', content:'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Family Recipe Website'}
        ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        },
        {
          rel: `stylesheet`,
          href: `https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Oleo+Script+Swash+Caps:wght@400;700&display=swap`
        }
        ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        },
        {
          src:"https://kit.fontawesome.com/918e15e8c2.js" ,
          crossorigin:"anonymous",
          tagPosition: 'bodyClose'
        }
        ]
    }
  },
  css: ['@/assets/scss/main.scss']
})
