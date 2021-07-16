export const state = () => ({
  current: {},
  list: {},
})

export const mutations = {
  setCurrent(state, item) {
    state.item = item
  },
  setList(state, list) {
    state.list = list
  },
  removeCurrent(state) {
    state.item = {}
  },
  clearList(state) {
    state.list = {}
  }
}

export const actions = {
  async fetchCurrent({commit, state}, article_id) {
    commit("removeCurrent")
    let item = await this.$axios.$get(`/api/articles/${article_id}`)
    commit('setCurrent', item.data)
  },
  async fetchList({commit, state}, category_id) {
    commit("clearList")
    let list = await this.$axios.$get(`/api/articles?category_id=${category_id}`)
    commit('setList', {
      list: list.data.articles,
      pagination: list.data.pagination
    })
  }
}

export const getters = {
  item: state => state.item,
  list: state => state.list
}
