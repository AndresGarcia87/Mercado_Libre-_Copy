Vue.component('menu-hamburger',{
    template :
    `<div class="menu_navbar" :class="[isOpen ? 'menu-open' : 'menu-closed']">
        <button class="navbar-toggler" 
                v-on:click="showAndHideMenu" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarToggleExternalContent" 
                aria-controls="navbarToggleExternalContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>`,
    data: function() {
        return {
            isOpen: false
        }
    },
    methods: {
        showAndHideMenu() {
            this.isOpen = !this.isOpen,
            this.$emit('openToggle')
        }
    }
});