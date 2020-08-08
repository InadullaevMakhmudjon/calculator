import { math } from '~/utils'

const url = process.env.SERVER_URL

export const state = () => ({
  width: 0,
  content: 0,
  caption: '',
  start: true,
  previous: null,
  operationChar: '',
  operator: null,
  oneOvered: false,
  history: [],
})

export const mutations = {
  setWidth(state, value) {
    state.width = value
  },
  setContent(state, value) {
    state.content = value
  },
  setCaption(state, value) {
    state.caption = value
  },
  setResult(state, value) {
    state.result = value
  },
  setPrevious(state, value) {
    state.previous = value
  },
  setOperator(state, value) {
    state.operator = value
  },
  setData(state, data) {
    state.history = data
  },
  removeData(state) {
    state.history = []
  },
  calculate(state, { operation }) {
    if (!state.caption || state.caption.includes('=')) {
      state.caption = `${state.content} ${operation}`
    } else {
      state.caption = state.oneOvered
        ? `${state.caption} ${operation}`
        : `${state.caption} ${state.content} ${operation}`
      if (state.operator) {
        state.content = state.operator(
          Number(state.previous),
          Number(state.content)
        )
      }
    }
    state.operator = math[operation]
    state.operationChar = operation
    state.start = true
    state.oneOvered = false
    state.previous = state.content
  },
  equal(state) {
    if (!state.caption.includes('=')) {
      state.caption = state.oneOvered
        ? `${state.caption} =`
        : `${state.caption} ${state.content} =`
      state.content = state.operator(
        Number(state.previous),
        Number(state.content)
      )
      state.oneOvered = false
    }
  },
  negativePosotive(state) {
    const condition = `${state.content}`.includes('-')
    state.content = condition
      ? `${state.content}`.substring(1)
      : `-${state.content}`
  },
  dotCharacter(state) {
    if ([0, '0'].includes(state.content)) {
      state.content = '0.'
    }
    if (state.content && !state.content.includes('.')) {
      state.content += '.'
    }
  },
  deleteCharacter(state) {
    if (state.caption.includes('=')) {
      state.caption = ''
      state.start = !state.start
    } else if (state.content && !state.start) {
      const value = `${state.content}`.slice(0, -1)
      state.content = value || 0
    }
  },
  clear(state) {
    state.content = 0
    state.caption = ''
    state.start = true
    state.previous = null
    state.operator = null
  },
  changeStart(state) {
    state.start = !state.start
  },
  oneOver(state) {
    if (![0, '0'].includes(state.caption)) {
      state.caption = `${state.caption} 1/(${state.content})`
      state.content = 1 / Number(state.content)
      state.oneOvered = true
    }
  },
  squared(state) {
    const value = Number(state.content)
    state.caption = `${state.caption} sqr(${state.content})`
    state.content = value * value
    state.oneOvered = true
  },
  rooted(state) {
    state.caption = `${state.caption} √(${state.content})`
    state.content = Math.sqrt(Number(state.content))
    state.oneOvered = true
  },
  percent(state) {
    if (state.previous) {
      const value = Number(state.previous) * (Number(state.content) / 100)
      state.caption = `${state.caption} ${value}`
      state.oneOvered = true
    } else {
      state.caption = 0
      state.content = 0
      state.oneOvered = true
    }
  },
}

export const actions = {
  async getAll({ commit }) {
    const data = await this.$axios.$get(url)
    commit('setData', data)
  },
  async clear({ commit }) {
    await this.$axios.$delete(url)
    const response = await this.$axios.$get(url)
    commit('setData', response)
  },
  async create({ commit, state }) {
    await this.$axios.$post(url, {
      calculation: state.caption,
      result: state.content,
      date: new Date().toISOString(),
    })
    const response = await this.$axios.$get(url)
    commit('setData', response)
  },
}
