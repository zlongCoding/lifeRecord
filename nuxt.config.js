
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [
    { src: "element-ui/lib/theme-chalk/index.css", lang: "css" },
    { src: "~static/css/style.scss", lang: "scss" },
    { src: "~static/css/element_cover.scss", lang: "scss" },
    { src: "~static/css/client.scss", lang: "scss" },
    ,
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~plugins/vue-infinite-scroll", ssr: false },
    { src: "~plugins/element-ui", ssr: true },
    { src: "~plugins/vue-cookie", ssr: true },
    { src: "~plugins/wangeditor", ssr: false },
    { src: "~plugins/mavon-editor", ssr: false },

    // "~plugins/axios"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: "~styles/vars.scss",
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  loading: { color: "#409eff" },
  // , height: "4px"
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
    // postcss: {
    //   // plugins: {
    //   //   // Disable `postcss-url`
    //   //   "postcss-url": false,
    //   //   // Add some plugins
    //   //   "postcss-nested": {},
    //   //   "postcss-responsive-type": {},
    //   //   "postcss-hexrgba": {},
    //   // },
    //   preset: {
    //     autoprefixer: {
    //       grid: true,
    //     },
    //   },
    // },
  },
  proxy: [["/api", { target: "https://bw31d.com" }]],
};
