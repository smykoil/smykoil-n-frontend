export const state = () => ({
  list: [],
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
}

export const actions = {
  async fetchList({commit, state}, {model_type, model_id}) {
    commit("setList", [])
    let list = await this.$axios.$get(`/api/comments/${model_type}/${model_id}`)
    commit('setList', list.data)
  }
}

export const getters = {
  list: state => state.list
}
