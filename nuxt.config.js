export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-project',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/antd-ui', ssr: true},
    {src: '@/plugins/stripe-element.js', ssr: false},
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
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: 'true'
        },
        user: {
          // property: 'user'
          // property: false,
          property: ''
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          logout: false,
          user: { url: '/api/auth/me', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    restOnError: true
  },

  axios: {
    baseUrl: 'http://127.0.0.1:8000'
  },

  publicRuntimeConfig: {
    stripe: {
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    }
  },

  router: {
    middleware: ['auth']
  }
}
