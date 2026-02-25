<template>
  <div>
    <h2>Danh sách sản phẩm</h2>

    <div v-for="p in products" :key="p.id" class="product-item">
      <router-link :to="'/products/' + p.id">
        <h3 style="cursor: pointer; color: blue">{{ p.productName }}</h3>
      </router-link>

      <p>Giá: {{ p.price }}đ</p>

      <button @click="addToCart(p)">Thêm vào giỏ</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import productApi from '@/api/productApi'
// import { useCartStore } from '@/stores/cart'

// import { ref } from 'vue'

const user = ref(localStorage.getItem('user'))
const products = ref([])
// const cartStore = useCartStore()
// const productDetail =

onMounted(async () => {
  const res = await productApi.getAll()
  products.value = res.data
})

function addToCart(product) {
  cartStore.add(product)
  alert('Đã thêm vào giỏ')
}
</script>
