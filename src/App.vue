<template>
  <main id="app">
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark elegant-color">
        <a class="navbar-brand" href="#">Slipstream</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cart">Cart</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin">Admin</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Router outlet -->
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name
    }
  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
