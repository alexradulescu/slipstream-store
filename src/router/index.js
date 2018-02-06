import Vue    from 'vue';
import Router from 'vue-router';
import Home   from '@/pages/Home';
import Cart   from '@/pages/Cart';
import AdminLayout        from '@/pages/admin/AdminLayout';
import AdminProductList   from '@/pages/admin/AdminProductList';
import AdminProductNew    from '@/pages/admin/AdminProductNew';
import AdminProductEdit   from '@/pages/admin/AdminProductEdit';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'AdminLayout',
      component: AdminLayout,
      children : [
        {
          path: '',
          name: 'AdminProductList',
          component: AdminProductList
        },
        {
          path: 'new',
          name: 'AdminProductNew',
          component: AdminProductNew
        },
        {
          path: 'edit/:id',
          name: 'AdminProductEdit',
          component: AdminProductEdit
        }
      ]
    }
  ]
})
