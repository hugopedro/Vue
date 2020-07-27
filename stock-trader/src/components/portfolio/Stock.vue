<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} 
                  <small>
                    (Preço: {{ stock.price }}) | Qtde: {{ stock.quantity }}
                  </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card> <!--componente responsável por comprar a ação -->
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"
                    v-model.number="quantity"></v-text-field>
                <v-btn class="blue darken-3 white--text"
                :disabled="quantity <=0 || !Number.isInteger(quantity)"
                    @click="sellStock ">Vender</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId : this.stock.id,
                stockPrice : this.stock.price,
                quantity : this.quantity
            }

            this.$store.dispatch('buyStock', order)
            this.quantity = 0 //é pra quando ele comprar nao ficar resquício do valor na caixa
        }
    }
}
</script>

<style>

</style>