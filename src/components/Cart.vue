<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <template v-slot:cell(actions)="data">
                <b-button
                        size="sm"
                        variant="danger"
                        @click.stop="removeProductFromCart(data.item)"
                >
                    Eliminar
                </b-button>
            </template>
        </b-table>
        <b-alert show variant="success" class="text-center">
           Total: $ {{ totalCost }}
        </b-alert>
    </div>
    <b-alert v-else show variant="info">Carrito Vacío</b-alert>
</template>

<script>
    import {mapGetters, mapMutations, mapState} from 'vuex'
    export default {
        name: "Cart",
        data() {
            return {
                fields: ['name', 'qty', 'price', 'actions']
            }
        },
        computed: {
            ...mapState('cart', ['cart']),
            ...mapGetters('cart', ['totalCost'])
        },
        methods: {
            ...mapMutations('cart', ['removeProductFromCart'])
        }
    }
</script>
