export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'smykoil-n-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 3000, // default: 3000
    host: '192.168.1.106', // default: localhost,
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    [
      'qonfucius-nuxt-fontawesome', {
        componentName: 'fa',
        packs: [
          {
            package: '@fortawesome/free-brands-svg-icons',
            icons: ['faGithub', 'faGitlab', 'faVk'],
          },
          {
            package: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faCalendarWeek', 'faComment', 'faAt', 'faFileDownload', 'faCloudDownloadAlt',
              'faEye', 'faTimes', 'faChevronLeft', 'faChevronRight', 'faBars'
            ],
          },
        ],
        includeCss: true
      },
    ],
  ],

  loading: {
    color: '#10b981',
    height: '5px',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
  },

  proxy: {
    '/api': {
      target: process.env.API_URL + '/api',
      // changeOrigin: false,
      pathRewrite: {
        '^/api' : '/'
      }
    },
    '/storage': {
      target: process.env.API_URL + '/storage',
      // changeOrigin: false,
      pathRewrite: {
        '^/storage' : '/'
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
