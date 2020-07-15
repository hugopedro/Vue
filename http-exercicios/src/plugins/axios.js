import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-b6f16.firebaseio.com/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
           Vue.prototype.$http = axios.create({
                baseURL : 'https://curso-vue-b6f16.firebaseio.com/'
           })

           Vue.prototype.$http.interceptors.request.use(config => {
                console.log(config.method) // isso mostra no console qual função é chamada ao fazer qlquer coisa
            //    if (config.method == 'post') {
            //        config.method = 'put' //put salva o registro e exclui todos os outros
            //    }
            return config
           })
        
    }
})