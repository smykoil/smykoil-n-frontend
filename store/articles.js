export const state = () => ({
  current: {},
  list: {},
  popular: [],
})

export const mutations = {
  setCurrent(state, item) {
    state.current = item
  },
  setList(state, list) {
    state.list = list
  },
  setPopular(state, list) {
    state.popular = list
  }
}

export const actions = {
  async fetchCurrent({commit}, article_id) {
    commit("setCurrent", {})
    let item = await this.$axios.$get(`/api/articles/${article_id}`)
    commit('setCurrent', item.data)
  },
  async fetchList({commit}, {category_id, per_page}) {
    commit("setList", {})

    let params = {}

    category_id ? params.category_id = category_id : false
    per_page ? params.per_page = per_page : false

    let articles = await this.$axios.$get(`/api/articles`, {params: params})

    commit('setList', articles.data)
  },
  async fetchPopular({commit}) {
    commit("setPopular", [])
    let articles = await this.$axios.$get(`/api/articles?per_page=2&sort_by=views_count`)
    commit('setPopular', articles.data.list)
  }
}

export const getters = {
  current: state => state.current,
  list: state => state.list,
  popular: state => state.popular
}
