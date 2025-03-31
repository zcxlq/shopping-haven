<template>
  <div class="home">
    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
        <el-option label="宝贝" value="1"></el-option>
        <el-option label="店铺" value="2"></el-option>
      </el-select>
      <el-button slot="append" style="background-color: rgb(255,80,0);color: #fff;">搜索</el-button>
    </el-input>
    <div class="carousel-container">
      <div class="category-list">
        <div class="header">分类</div>
        <div class="promotion">
          <span class="tag">热</span>
          爆款超值秒杀 / 每满200减30
        </div>
        <ul class="categories">
          <li v-for="(category, index) in categories" :key="index">
            <i :class="category.icon"></i> {{ category.name }}
          </li>
        </ul>
      </div>
      <div class="carousel" style="width: 600px; margin: 0 auto;">
        <el-carousel height="400px" width="600px" indicator-position="outside">
          <el-carousel-item v-for="item in carouselList" :key="item">
            <el-image class="carousel-image" style="border-radius: 20px;" :src="item"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="guess-like" style="display: flex;justify-content: start;">
      <img src="@/assets/guesslike.webp" style="height: 50px;width: 50px;margin-top: 20px" alt="">
    </div>
    <div class="product-grid" >
      <el-row :gutter="20">
        <el-col :span="6" v-for="product in products" :key="product.id"  >
          <div class="product-card" @click="goProductDetails(product.id)">
            <img :src="product.image[1]" alt="商品图片" class="product-image" />
            <p class="title">{{ product.title }}</p>
            <p class="price">¥{{ product.price }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getLocalStorage } from '@/api/localStorage'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      input: '',
      select: '1',
      categories: [
        { name: '电脑 / 配件 / 办公 / 文具', icon: 'el-icon-s-platform' },
        { name: '工业品 / 商业 / 农业 / 定制', icon: 'el-icon-film' },
        { name: '家电 / 手机 / 通信 / 数码', icon: 'el-icon-mobile' },
        { name: '家具 / 家装 / 家居 / 厨具', icon: 'el-icon-table-lamp' },
        { name: '女装 / 男装 / 内衣 / 配饰', icon: 'el-icon-sell' },
        { name: '女鞋 / 男鞋 / 运动 / 户外', icon: 'el-icon-time' },
        { name: '汽车 / 珠宝 / 艺玩 / 箱包', icon: 'el-icon-switch-button' },
        { name: '食品 / 生鲜 / 酒类 / 健康', icon: 'el-icon-trophy' },
        { name: '母婴 / 童装 / 玩具 / 宠物', icon: 'el-icon-position' },
        { name: '美妆 / 个护 / 娱乐 / 图书', icon: 'el-icon-truck' }
      ],
      url: "src/assets/carouse2.jpg",
      carouselList: [
        'https://img2.baidu.com/it/u=2306655080,4233348916&fm=253&fmt=auto&app=138&f=JPEG?w=645&h=313',
        'https://img1.baidu.com/it/u=2064098358,1948542679&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=330',
        'https://img2.baidu.com/it/u=749772871,588318002&fm=253&fmt=auto&app=138&f=JPEG?w=1010&h=455',
        'https://img0.baidu.com/it/u=2039516694,1873603816&fm=253&fmt=auto&app=138&f=JPEG?w=1080&h=500'
      ],
      products: this.$store.state.products
    }
  },
  methods: {
    goProductDetails(id) {
      if(getLocalStorage("token") === null){
        this.$message('请先登录账号')
        return this.$router.push({path: '/login'})
      }
      this.$router.push({path: '/productDetails',query: {id: id}})
    }
  }
}
</script>
<style scoped>
.home {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
.input-with-select {
  width: 50%;
  margin: 0 auto;
}
.carousel-container {
  display: flex;
  margin-top: 20px;
}
.category-list {
  width: 300px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
}

.promotion {
  font-size: 14px;
  color: #f56c6c;
  margin-bottom: 16px;
  text-align: left;
}

.tag {
  background-color: #f56c6c;
  color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  margin-right: 4px;
}

.categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories li {
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #333;
}

.categories li i {
  margin-right: 8px;
  font-size: 16px;
  color: #999;
}

.carousel-image{
  width: 600px;
  height: 300px;
  margin: 0 auto;
  margin-top: 50px;
  display: block;
}

.product-grid {
  padding: 20px;
}

/* 卡片样式 */
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

/* 商品图片样式 */
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
