 Vue.component('menu-categories',{
    template : `
    <transition name="menu-animation">
        <div class="menu_navbar_visible" v-show="isOpen">
            <div class="menu_navbar_visible_button">
                <button v-on:click="menu-closed">
                    <img src="img/x_icon.png">
                </button>
            </div>
            <div>
                <ul>
                    <li v-for="category in categories"><a :href="'categorias.html?categoryID=' + category.id"> {{category.name}} </a></li>
                </ul>
            </div>
        </div>
    </transition>`,
    props: {
        isOpen: Boolean
    },
    data: function() {
       return {
            categories: [],
            error: ""
       }
    },
    methods: {
        getCategory() {
            axios
                .get(`https://api.mercadolibre.com/sites/MCO/categories`)
                .then(response => (this.categories =response.data))
                .catch(error => (this.error = error.message))
        }
    },
    mounted() {
        this.getCategory()
    }
 });