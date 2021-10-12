export const state = () => ({
  mainMenu: [
    { to: '/categories/1', title: 'Игротека' },
    { to: '/categories/2', title: 'Полезные статьи' },
    { to: '/categories/3', title: 'Конспекты занятий' },
    { to: '/categories/4', title: 'Портфолио' },
  ],
  footerMenu: [
    'Главная',
    'Вопросы и предложения',
    'Обо мне',
    'Портфолио',
    'Контакты'
  ],
})

export const mutations = {
  setMainMenu(state, list) {
    state.menu = list
  },
  setFooterMenu(state, list) {
    state.menu = list
  },
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('articles/fetchPopular')
  },
}

export const getters = {
  mainMenu: state => state.mainMenu,
  footerMenu: state => state.footerMenu,
}
