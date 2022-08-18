Vue.component('header-component', {
    template: `
    <header class="header">
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid menu">
                <logo-mercado-libre></logo-mercado-libre>
                <search></search>
            </div>
            <menu-hamburger v-on:openToggle="showAndHideMenu"></menu-hamburger>
        </nav>
        <menu-categories :isOpen="isOpen"></menu-categories>
    </header>`,
    data: function() {
        return {
            isOpen: false
        }
    },
    methods: {
        showAndHideMenu() {
            this.isOpen = !this.isOpen
        }
    }
});