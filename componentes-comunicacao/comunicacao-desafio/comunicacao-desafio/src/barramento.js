import Vue from 'vue'
export default new Vue({
    methods: {
        setUsuarioSelecionado(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback) {
            //vai ficar escutando sempre que tiver um evento do tipo usuarioSelecionado
            this.$on('usuarioSelecionado', callback)
        }
    }
})