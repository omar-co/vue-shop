<template>
    <div v-if="products.length">
        <paginate name="products" :list="products" :per="perPage">
            <b-card-group columns>
                <product-item
                        v-for="product in paginated('products')"
                        :product="product"
                        :key="product.id"
                        @addToCart="addProductToCart"
                >

                </product-item>
            </b-card-group>
        </paginate>
        <paginate-links for="products" :limit="5" :show-step-links="true"
                        :classes="{'ul': 'pagination', 'li': 'page-item', 'li > a': 'page-link'}"></paginate-links>
    </div>
    <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'
    import ProductItem from "../store/ProductItem";
    export default {
        name: "ProductList",
        components: {
          ProductItem
        },
        mounted() {
            this.fetchProducts()
        },
        data() {
            return {
                paginate: ['products'],
                perPage: 3
            }
        },
        computed: {
            ...mapState('products', ['products'])
        },
        methods: {
            ...mapActions('products', ['fetchProducts']),
            ...mapMutations('cart', ['addProduct']),

            addProductToCart(product) {
                this.addProduct(product)
            }
        }
    }
</script>

<style scoped>

</style>