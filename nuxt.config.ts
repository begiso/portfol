export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts', '@nuxt/image-edge'],
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
})
