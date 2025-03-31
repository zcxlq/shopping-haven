<template>
    <div class="collect" style="width: 90%; margin: 0 auto;">
        <h1>我的收藏</h1>
        <div class="product-grid" v-show="collectList.length > 0">
            <el-row :gutter="20">
              <el-col :span="6" v-for="product in collectList" :key="product.id"  >
                <div class="product-card" @click="goProductDetails(product.id)">
                  <img :src="product.image[1]" alt="商品图片" class="product-image" />
                  <p class="title">{{ product.title }}</p>
                  <p class="price">¥{{ product.price }}</p>
                </div>
              </el-col>
            </el-row>
        </div>
        <div v-show="collectList.length === 0">
          <p style="text-align: center;height: 200px;line-height: 200px;font-size: 18px;color: rgb(255,80,0) ">暂无收藏商品,您可以去商城看看哦</p>
        </div>
    </div>
</template>
<script>
import { getLocalStorage,setLocalStorage } from '@/api/localStorage';
export default {
  name: 'collect',
  data() {
    return {
      collectList: []
    }
  },
  created() {
    const collect = getLocalStorage('collect')
    collect.forEach(item => {
        const product = this.$store.getters.getProductById(item)
        this.collectList.push(product)
    })
    console.log(this.collectList)
  },
  methods: {
    goProductDetails(id) {
        if(getLocalStorage("token") === null){
          this.$message('请先登录账号')
          return this.$router.push({path: '/login'})
        }
        this.$router.push({path: '/productDetails',query: {id: id}})
    },
  }
}
</script>
<style scoped> 
.product-grid {
  padding: 20px;
}

.product-card {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  margin-top: 20px;
}

.product-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
}

/* 标题样式 */
.title {
  font-size: 14px;
  color: #333;
  margin: 5px 0;
  white-space: normal;
}

/* 价格样式 */
.price {
  color: #f56c6c;
  font-weight: bold;
  font-size: 16px;
}
</style>