export default {
    state: {
        funds: 1000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
            if (record) {
                record.quantity += quantity 
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
            if (record.quantity > quantity) { // se a qtd de ações que eu tenho é maior que a qtd de ações q eu quero vender
                record.quantity -= quantity // se sim subtrai
            } else { // do contrário vende todas as ações
                state.stock.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: { //retorna todas as ações do portfólio
        stockPortfolio(state, getters) { // o 2º parâmetro é todas os getters da aplicação
            return state.stocks.map(stock => {
                //transformações pra tornar o registro completo
                const record = getters.stocks.find(element => element.id == stock.id)
                return { //retorna o objeto completo
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name, // obteu por causa do find
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}