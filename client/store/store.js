import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default ()=>{
	const store =  new Vuex.Store({
		strict: isDev,
		state: defaultState,
		mutations,
		getters,
		actions
	})

	if (module.hot) {
	  // 使 action 和 mutation 成为可热重载模块
	  module.hot.accept([
	  	'./state/state',
	  	'./mutations/mutations',
	  	'./actions/actions',
	  	'./getters/getters'
  	], () => {
  		const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

	    // 加载新模块
	    store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
	  })
	}
	return store
}