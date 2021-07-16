export const state = () => ({
  item: {},
})

export const mutations = {
  setItem(state, item) {
    state.item = item
  },
  removeItem(state) {
    state.item = {}
  }
}

export const actions = {
  async fetchItem({commit, state}, category_id) {
    commit("removeItem")
    let item = await this.$axios.$get(`/api/categories/${category_id}`)
    commit('setItem', item.data)
  }
}

export const getters = {
  item: state => state.item
}
