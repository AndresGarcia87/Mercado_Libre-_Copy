Vue.component('search',{
    template : 
    `<form class="d-flex form">
        <input class="form-control me-2" type="search" v-model="searchText" placeholder="Buscar productos, marcas y más…" aria-label="Search">
        <button class="btn btn-outline-success" type="button" v-on:click="searchProducts"></button>
    </form>`,
    data: function() {
        return {
            searchText: "",
            error: ""
        }
    },
    methods: {
        searchProducts() {
            axios
                .get(`https://api.mercadolibre.com/sites/MCO/search?q=${encodeURIComponent(this.searchText)}`)
                .then(response => (this.products = response.data.results))
                .catch(error => (this.error = error.message))
            }
    }
});