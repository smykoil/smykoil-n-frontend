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
    //host: '192.168.1.106',  // local
    host: 'localhost', // default
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-click-outside'
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
    '@nuxtjs/auth-next',
    ['qonfucius-nuxt-fontawesome', {
      componentName: 'FaIcon',
      packs: [
        {
          package: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faGitlab', 'faVk', 'faOdnoklassniki', 'faGoogle'],
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
    }],
  ],

  loading: {
    color: '#10b981',
    height: '5px',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    proxy: true,
  },


  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        cookie: {
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          csrf: { url: `/sanctum/csrf-cookie` },
          login: { url: `/auth/token` },
          user: { url: `/api/user` }
        }
      }
    }
  },

  proxy: {
    '/api': {
      target: `${process.env.API_URL}/`,
      changeOrigin: false
    },
    '/storage': {
      target: `${process.env.API_URL}/`,
      changeOrigin: false
    },
    '/sanctum': {
      target: `${process.env.API_URL}/`,
      changeOrigin: false
    },
    '/auth': {
      target: `${process.env.API_URL}/`,
      changeOrigin: false
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
