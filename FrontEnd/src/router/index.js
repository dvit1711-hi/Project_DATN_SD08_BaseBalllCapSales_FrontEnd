import { createRouter, createWebHistory } from 'vue-router'

// import Home from '@/views/Home.vue'
// import Login from '@/views/Login.vue'
// import Register from '@/views/Register.vue'

import ProductList from '@/views/ProductList.vue'
// import ProductDetail from '@/views/ProductDetail.vue'

// import Cart from '@/views/Cart.vue'
// import Checkout from '@/views/Checkout.vue'
// import MyOrders from '@/views/MyOrders.vue'
// import Profile from '@/views/Profile.vue'

// Admin
// import AdminProducts from '@/views/admin/AdminProducts.vue'
// import AdminOrders from '@/views/admin/AdminOrders.vue'
// import AdminUsers from '@/views/admin/AdminUsers.vue'

const routes = [
  // { path: '/', component: Home },
  // { path: '/login', component: Login },
  // { path: '/register', component: Register },

  { path: '/products', component: ProductList },
  // { path: '/products/:id', component: ProductDetail },

  // { path: '/cart', component: Cart },
  // { path: '/checkout', component: Checkout },
  // { path: '/orders', component: MyOrders },
  // { path: '/profile', component: Profile },

  // // Admin
  // { path: '/admin/products', component: AdminProducts },
  // { path: '/admin/orders', component: AdminOrders },
  // { path: '/admin/users', component: AdminUsers },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'))

  // Nếu route bắt đầu bằng /admin
  // if (to.path.startsWith('/admin')) {
  //   if (!user || user.name !== 'admin') {
  //     return next('/login') // hoặc redirect về trang lỗi
  //   }
  // }

  next()
})

export default router
