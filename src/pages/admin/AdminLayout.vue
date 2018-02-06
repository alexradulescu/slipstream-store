<template>
  <section>
      <h1>{{message}}</h1>
      <nav>
          <route-link to="/admin">All products</route-link>
          <route-link to="/admin/new">New product</route-link>
      </nav>
  </section>
</template>

<script>
export default {
    name: 'AdminLayout',
    data () {
        return {
            message: 'Admin panel'
        }
    }
}
</script>

<style scoped>

</style>
