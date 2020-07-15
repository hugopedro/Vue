import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-b6f16.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
           Vue.prototype.$http = axios.create({
                baseURL : 'https://curso-vue-b6f16.firebaseio.com/',
                headers: {
                    "Authorization" : "abc123"
                }
           })

           Vue.prototype.$http.interceptors.request.use(config => {
                console.log(config.method) // isso mostra no console qual função é chamada ao fazer qlquer coisa
            //    if (config.method == 'post') {
            //        config.method = 'put' //put salva o registro e exclui todos os outros
            //    }
            return config
           }, error => Promise.reject(error)) // é só pra falar qual erro que deu se der

           Vue.prototype.$http.interceptors.response.use(res => { // por enquanto pega-se o objeto, vamos testar agora com array
                // const array = []
                // for (let chave in res.data ) { // for navega encima da chave
                //     array.push({ id: chave, ...res.data[chave] }) // o ... quer dizer que ele vai pegar todos os atributos
                // }

                // res.data = array 
                return res

           }, error => Promise.reject(error))
        
    }
})