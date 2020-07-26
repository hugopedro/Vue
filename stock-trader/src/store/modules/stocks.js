import stocks from '@/data/stocks'
export default {
    state: {
        stocks: []
    },
    mutations: { //altera o estoque
        //primeiro parâmetro sempre é o state, o 2o é o que se deseja passar
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        //a primeira action é a de comprar a ação
        //o commit é responsável por chamar a mutation
        buyStock({ commit }, order){
            commit() // por enquanto commit vazio
        }, // a ordem é justamente a que criei em socks/Stock.vue  
        initStocks({ commit }) {
            //aqui é que inicializa as ações
            console.log('initStocks...')
            commit('setStocks', stocks )
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}