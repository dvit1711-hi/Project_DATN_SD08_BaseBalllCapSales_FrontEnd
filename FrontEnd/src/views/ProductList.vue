<template>
  <div>
    <h2>Danh sách sản phẩm</h2>

    <div v-for="p in products" :key="p.productID">
      <h2>{{ p.productName }}</h2>
      <p>{{ p.price }}</p>

      <div v-for="c in p.colors" :key="c.productColorID">
        <h4>Màu: {{ c.colorName }}</h4>

        <img v-for="img in c.images" :key="img.imageUrl" :src="img.imageUrl" width="100" />
      </div>
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
