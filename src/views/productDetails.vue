<template>
  <div>
    <div class="product-details" v-show="!showConfirmOrder">
        <!-- 店铺信息 -->
        <div class="store-info">
            <div class="store-details">
              <img :src="shop.image" alt="店铺图片" class="store-logo" />
              <div class="store-description">
                <h3 class="store-name">{{ shop.name }}</h3>
                <div>
                  <el-rate
                      v-model="shop.mark"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                  </el-rate>
                </div>
                <div class="store-stats">
                  {{ shop.customerService}}
                </div>
              </div>
            </div>
            <div class="store-actions">
              <button class="contact-button">联系客服</button>
              <button class="visit-button">进入店铺</button>
            </div>
        </div>
        <!-- 商品信息 -->
        <div class="gallery-container">
           <!-- 左侧缩略图 -->
           <div class="thumbnail-list">
             <div 
               v-for="(image, index) in prouductImg" 
               :key="index" 
               class="thumbnail"
               :class="{ active: index === currentIndex }"
               @mouseover="selectImage(index)"
             >
               <img :src="image" alt="商品缩略图" style="border-radius: 8px;" />
             </div>
           </div>
           <div class="main-display">
             <img :src="prouductImg[currentIndex]" alt="大图展示" style="width: 80%;height: auto;" />
           </div>
           <div class="product">
             <h2 class="product-title">
               {{prouductTitle}}
             </h2>
         
             <div class="promotion-section">
               <div class="price-info">
                 <span class="current-price">￥{{ productDate.currentPrice }}</span>
                 <span class="original-price">优惠前￥{{ productDate.originalPrice }}</span>
               </div>
               <div class="timer">
                 新粉力圈 <br />
                 <span>{{ productDate.saleEndDate }}</span>
               </div>
             </div>
         
             <div class="tags">
               <span class="tag">立减无忧</span>
               <span class="tag">3期免息</span>
             </div>
         
             <div class="delivery-info">
               <div style="justify-content: start;display: flex;">
                 <strong>配&nbsp;&nbsp;送：</strong>48小时内发货
                 <span>配送至 {{ productDate.deliveryInfo }}</span>
               </div>
               <div style="justify-content: start;display: flex;">
                 <strong>保&nbsp;&nbsp;修：</strong>无忧保障，7天无理由退货
               </div>
             </div>

             <div class="package-selection">
                <h3>颜色分类</h3>
                <ul>
                  <li
                    v-for="(item, index) in packages"
                    :key="index"
                    :class="{ selected: selectedPackage === index }"
                    @click="selectPackage(index)"
                  >
                    <img :src="item.image" alt="配置图片" class="package-image" />
                    <span>{{ item.description }}</span>
                  </li>
                </ul>
             </div>

             <div class="delivery-info">
               <div style="justify-content: start;display: flex;">
                 <strong>数&nbsp;&nbsp;量：</strong>
                 <div class="quantity-selector">
                    <button @click="decrement" :disabled="quantity <= 1">-</button>
                    <input type="text" v-model="quantity" :disabled="isQuantity" style="height: 20px;"/>
                    <button @click="increment" :disabled="isQuantity">+</button>
                    <span class="status">{{ quantityType }}</span>
                </div>
               </div>
               <div style="justify-content: start;display: flex;">
                 <strong>库&nbsp;&nbsp;存：</strong>{{ inventory }}
               </div>
               <div style="justify-content: start;display: flex;">
                 <strong>保&nbsp;&nbsp;障：</strong>无忧保障，7天无理由退货
               </div>
             </div>

             <div class="action-buttons">
                <button class="buy-now" @click="handleBuyNow">立即购买</button>
                <button class="add-to-cart" @click="handleAddToCart">加入购物车</button>
                <div class="favorite" @click="handleFavorite">
                  <i :class="favorite"></i>
                  <span>收藏</span>
                </div>
            </div>
        </div>
        </div>
        <!-- 商品详情 -->
        <div>
            <div class="tabs-container">
                <!-- Tabs Header -->
                <div class="tabs-header">
                  <div
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="{ active: activeTab === index }"
                    class="tab"
                    @click="setActiveTab(index)"
                  >
                    {{ tab.name }}
                  </div>
                </div>
                <div class="tabs-divider"></div>
            
                <!-- Tabs Content -->
                <div class="tabs-content">
                  <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                    <div class="user-reviews" v-show="index === 0">
                        <div class="review-header">
                          <span>全部 ({{tabs[0].content.allCount}})</span>
                          <span>有图/视频 ({{tabs[0].content.imgCount}})</span>
                          <span>追评 ({{tabs[0].content.chaseCount}})</span>
                        </div>
                        <div class="review-filters">
                          <span v-for="(filter, index) in tabs[0].content.filters" :key="index" class="filter">{{ filter }}</span>
                        </div>
                        <div class="review-list">
                          <div class="review-item" v-for="(review, index) in tabs[0].content.reviews" :key="index">
                            <div class="review-user">
                              <span class="username">{{ review.name }}</span>
                              <span class="date">{{ review.date }}</span>
                              <span class="badge" v-if="review.isVip">VIP用户</span>
                            </div>
                            <div class="review-content">
                              <p>{{ review.content }}</p>
                            </div>

                          </div>
                        </div>
                    </div>
                    <div class="product-specs" v-show="index === 1">
                        <table>
                          <tr v-for="(row, index) in tabs[1].content.specsData" :key="index">
                            <th>{{ row.label1 }}</th>
                            <td>{{ row.value1 }}</td>
                            <th>{{ row.label2 }}</th>
                            <td>{{ row.value2 }}</td>
                          </tr>
                        </table>
                    </div>
                    <div class="product-images" v-show="index === 2">
                        <div v-for="(image, index) in tabs[2].content" :key="index">
                            <img :src="image" alt="" style="width: 90%;height: auto;">
                        </div>
                    </div>
                    <div class="product-grid" v-show="index === 3">
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
                    <div class="product-grid" v-show="index === 4">
                        <el-row :gutter="20">
                          <el-col :span="6" v-for="product in outerProducts" :key="product.id"  >
                            <div class="product-card" @click="goProductDetails(product.id)">
                              <img :src="product.image[1]" alt="商品图片" class="product-image" />
                              <p class="title">{{ product.title }}</p>
                              <p class="price">¥{{ product.price }}</p>
                            </div>
                          </el-col>
                        </el-row>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <el-dialog
          :visible.sync="dialogVisible"
          width="520px"
          :before-close="handleClose"
          :show-close="false">
          <el-card class="box-card" style="width: 480px;">
            <div>
              <p>商品信息：{{ prouductTitle }}</p>
              <p>购买数量：{{ quantity }}</p> 
              <p>套餐类型：{{ description }}</p>
              <p>总价：{{ totalPrice }}</p>
            </div>
            <div>
              收货地址: {{ address }}
              <p><el-link type="primary" @click="handleAddress">{{ address === '' ? '暂无地址点击添加' : '选择其他地址' }}</el-link></p>
            </div>
            <el-card v-show="updateAddress" style="margin-top: 20px;" v-for="(item, index) in addressList" :key="index">
              <div @click="handleUpdateAddress(item)"> {{ item }} </div>
            </el-card>
            <el-input
              v-show="addAddress"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="addressTextarea">
            </el-input>
            <el-button v-show="addAddress" type="primary" @click="handleAddAddress" style="margin: 20px;">确认添加</el-button>
          </el-card>
          <el-button type="primary" @click="handleClose" style="margin-top: 20px;margin-left: 350px;">确认订单</el-button>
          
        </el-dialog>

    </div>
  </div>
</template>
<script>
import { getLocalStorage, setLocalStorage } from '@/api/localStorage';
import ConfirmOrder from '@/views/confirmOrder';
export default {
    name: 'productDetails',
    components: {
        ConfirmOrder
    },
    data() {
        return {
            favorite:'el-icon-star-on', // 收藏图标
            prouductId: Number(this.$route.query.id), // 商品id
            prouductTitle: '',  // 商品标题
            prouductImg: [],  // 商品图片
            currentIndex: 0, // 当前显示的图片索引
            productDate: {}, // 商品信息
            selectedPackage: null, // 选择的套餐
            packages: [], // 套餐列表
            isQuantity: true, // 是否有库存
            quantity: 1, // 购买数量
            quantityType: '请选择商品', // 库存状态
            inventory: 0, // 库存数量
            isCollect: false, // 是否收藏
            collect: [], // 收藏列表
            cart: [], // 购物车列表
            activeTab: 0, // 当前激活的tab
            tabs: [], // 商品详情tab
            shop: {}, // 店铺信息
            shopRecommendedId: [], // 店铺推荐商品id
            products: [], // 店铺推荐商品列表
            outerProducts: [], // 推荐商品列表
            showConfirmOrder: false, // 确认订单弹窗
            dialogVisible: false, // Dialog 弹窗
            description: '', // 套餐描述
            address: '', // 收货地址
            addressList: [], // 地址列表
            addressTextarea: '', // 地址信息
            addAddress: false, // 添加地址弹窗
            updateAddress: false, // 修改地址弹窗
            totalPrice: 0 , // 总价
        }
    },
    watch: {
        // 监听商品套餐变化
        selectedPackage(newVal) {
            // setLocalStorage('inventory', [{inventory: 100,
            //   prouductId: 10001}]);
            let newInventory =  getLocalStorage('inventory').filter(item => item.prouductId === this.prouductId)
            console.log(getLocalStorage('inventory').filter(item => item.prouductId === this.prouductId));
            if(newInventory.length <= 0){
              newInventory = this.packages[this.selectedPackage].number
            }else{
              newInventory = newInventory[0].inventory[this.selectedPackage]
            } 
            this.inventory =  newInventory - Number(this.quantity);
            this.quantity = 1;
            if (newVal !== null && newInventory > 0) {  
                if(this.inventory > 0) this.isQuantity = false
                this.quantityType = '有货'
            }else {
                this.isQuantity = true
                this.quantityType = '无货'
            }
        },
        // 监听购买数量变化
        quantity(newVal) {
            console.log(newVal);
            let newInventory =  getLocalStorage('inventory').filter(item => item.prouductId === this.prouductId)
            console.log(getLocalStorage('inventory').filter(item => item.prouductId === this.prouductId));
            if(newInventory.length <= 0){
              newInventory = this.packages[this.selectedPackage].number
            }else{
              newInventory = newInventory[0].inventory[this.selectedPackage]
            } 
            this.inventory =  newInventory - Number(this.quantity);
            if (newVal > this.packages[this.selectedPackage].number) {    
                this.isQuantity = true
                this.quantityType = '无货'
            }else{
                this.isQuantity = false
                this.quantityType = '有货'
            }
            console.log(this.packages[this.selectedPackage],this.quantity,this.inventory);
        }
    },
    computed: {
        isJoined() {
            return this.selectedPackage !== null
        }
    },
    created() {
        // const address = ["11111111111111111111","222222222","333"]
        // setLocalStorage('address', address)
        this.getAddress();
        const token = getLocalStorage('token');
        // 获取收藏列表
        this.collect = getLocalStorage('collect') || this.$store.state.user[token].collect;
        // 获取购物车列表
        this.cart = getLocalStorage('cart') || [];
        this.collect.forEach(item => {
            if (item === this.prouductId) {
                this.isCollect = true;
            }
        })
        if(this.isCollect) {
            this.favorite = 'el-icon-star-on'
        }else {
            this.favorite = 'el-icon-star-off'
        }
        // 获取商品信息
        console.log('查看获得的商品信息',this.$store.getters.getProductById(this.prouductId));
        const { image,productDate,tabs,shopId,title } = this.$store.getters.getProductById(this.prouductId);
        this.prouductImg = image;
        this.prouductTitle = title;
        this.productDate = productDate;
        this.tabs = tabs;
        this.packages = productDate.packages;
        this.shop = this.$store.getters.getShopById(shopId);
        // 获取店铺推荐商品
        this.shopRecommendedId = this.shop.products.filter(item => item !== this.prouductId)
        this.shopRecommendedId.forEach(item => {
            this.products.push(this.$store.getters.getProductById(item)); 
        })
        this.outerProducts = this.$store.state.products
        console.log(this.shopRecommendedId, this.products);
    },
    methods: {
        handleAddress(){
            if(this.address === ''){
                 console.log("暂无地址，点击添加");
                this.addAddress = true;
            }else {
                console.log("选择其他地址",this.addressList);
                this.updateAddress = true;
            }
        },
        handleUpdateAddress(item){
          this.address = item;
          this.updateAddress = false;
        },
        handleAddAddress() {
            this.addAddress = false;
            if(this.addressTextarea.trim() === '') {
                this.$message({
                    message: '收货地址不能为空',
                    type: 'warning'
                });
                return;
            }
            setLocalStorage('address', [this.addressTextarea]);
            this.getAddress();
            this.addressTextarea = '';
        },
        getAddress() {
          const address = getLocalStorage('address');
          if(address == null) {
            setLocalStorage('address', [])
            address = []
          }
          this.addressList = address;
          this.address = address[0] || '';
        },
        contactCustomerService() {
              // 实现联系客服逻辑
              console.log('联系客服');
            },
        visitStore() {
          // 实现进入店铺逻辑
          console.log('进入店铺');
        },
        selectImage(index) {
            this.currentIndex = index;
        },
        selectPackage(index) {
            this.selectedPackage = index;
        },
        increment() {
          this.quantity++;
        },
        decrement() {
          if (Number(this.quantity) > 1) {
            this.quantity--;
          }
        },
        handleFavorite() {
            this.isCollect = !this.isCollect;
            if(this.isCollect) {
                this.collect.push(this.prouductId);
                this.favorite = 'el-icon-star-on'
            }else {
                this.collect.splice(this.collect.indexOf(this.prouductId), 1);
                this.favorite = 'el-icon-star-off'
            }
            this.collect.sort((a, b) => a - b);
            setLocalStorage('collect', this.collect);
        },
        handleBuyNow() {
            if(this.isJoined && this.inventory >= 0){
                this.description = this.packages[this.selectedPackage].description
                this.totalPrice = this.packages[this.selectedPackage].price * Number(this.quantity)
                this.dialogVisible = true
            }else {
                this.$message({
                    message: '未选择套餐类型或库存不足',
                    type: 'warning'
                });
            }
        },
        handleAddToCart() {
            if(this.isJoined && this.inventory >= 0){
                const cart = {
                                setmeal: this.packages[this.selectedPackage],
                                price: this.packages[this.selectedPackage].price,
                                image: this.packages[this.selectedPackage].image,
                                description: this.packages[this.selectedPackage].description,
                                quantity: Number(this.quantity),
                                prouductId: this.prouductId,
                                modelId: this.selectedPackage,
                            }
                const quantity = this.cart.filter(item => item.prouductId === cart.prouductId && item.modelId === cart.modelId) ;
                console.log("quantity",quantity,"cart",this.cart);
                if(!this.cart.some(item => item.prouductId === cart.prouductId && item.modelId === cart.modelId)){
                    this.cart.push(cart)
                }else {
                    cart.quantity = Number(this.quantity) + quantity[0].quantity
                    this.cart.splice(this.cart.indexOf(quantity[0]), 1, cart)
                }
                setLocalStorage('cart', this.cart)
                this.$notify({
                    title: '加入成功',
                    dangerouslyUseHTMLString: true,
                    message: `<div>
                                <p>
                                  购物车支持
                                  <span class="highlight-text">自动领券结算</span>
                                </p>
                              </div>`,
                    offset: 100,
                    type: 'success'
                });
            }else {
                this.$message({
                    message: '未选择套餐类型或库存不足',
                    type: 'warning'
                });
            }
        },
        setActiveTab(index) {
          this.activeTab = index;
        },
        goProductDetails(id) {
            if(getLocalStorage("token") === null){
              this.$message('请先登录账号')
              return this.$router.push({path: '/login'})
            }
            this.$router.push({path: '/productDetails',query: {id: id}})
            this.$router.go(0)
        },
        handleClose() {
          if (this.address === '') {
            return this.$message({
              message: '请选择收货地址',
              type: 'warning' });
          }
          const order = {
              orderId: new Date().getTime(),
              prouductId: this.prouductId,
              quantity: Number(this.quantity),
              description: this.description,
              address: this.address,
              totalPrice: this.packages[this.selectedPackage].price * Number(this.quantity),
              status: Math.floor(Math.random() * 3),
              image: this.prouductImg[0],
          }
          const orderList = getLocalStorage("order");
          orderList.push(order);
          setLocalStorage("order",orderList);

          const inventory = {
                          inventory: [],
                          prouductId: this.prouductId,
                      }
          const data = getLocalStorage("inventory").filter(item => item.prouductId !== inventory.prouductId);
          const inventoryList = getLocalStorage("inventory").filter(item => item.prouductId === inventory.prouductId);
         
          if(!inventoryList.some(item => item.prouductId === inventory.prouductId)){
            // 库存不存在，添加
            this.packages.forEach(item => {
              inventory.inventory.push(item.number)
            })
            inventory.inventory[this.selectedPackage] = this.packages[this.selectedPackage].number - Number(this.quantity)
            console.log("库存不存在，添加",inventory)
            data.push(inventory)
            console.log("库存不存在，添加")
          }else {
              // 库存存在，更新
              console.log("库存存在，更新",inventoryList)
              inventory.inventory = inventoryList[0].inventory
              inventory.inventory[this.selectedPackage] = inventoryList[0].inventory[this.selectedPackage]  - Number(this.quantity)
              console.log("库存存在，更新")
              data.push(inventory)
              console.log("库存存在，更新")
          }
          setLocalStorage('inventory', data)
          this.dialogVisible = false;
          this.$router.go(0);
        }
    }
}
</script>
<style scoped>
.product-details {
    width: 90%;
    margin: 0 auto;
}

.store-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
}

/* 商家详情 */
.store-details {
  display: flex;
  align-items: center;
}

.store-logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
}

.store-description {
  display: flex;
  flex-direction: column;
}

.store-name {
  font-size: 16px;
  margin: 0;
}

.store-stats {
  color: #888;
  font-size: 12px;
}

/* 按钮样式 */
.store-actions button {
  border: 1px solid #f0f0f0;
  padding: 5px 10px;
  background: #fff;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.store-actions button:hover {
  background: #ddd;
}

.gallery-container {
  display: flex;
  width: 100%;
}

/* 左侧缩略图列表 */
.thumbnail-list {
  width: 20%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.thumbnail {
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.thumbnail.active {
  border-color: #007bff;
}

/* 右侧大图展示区 */
.main-display {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-display img {
  max-width: 100%;
  height: auto;
}

.product-details {
  text-align: center;
  margin-top: 10px;
}

.product-details h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.product-details p {
  font-size: 16px;
  margin: 5px 0;
}

.product {
  font-family: Arial, sans-serif;
  line-height: 1.5;
  width: 40%;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
}

.promotion-section {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background: #ffe6e6;
  border-radius: 8px;
}

.price-info {
  display: flex;
  flex-direction: column;
}

.current-price {
  font-size: 24px;
  font-weight: bold;
  color: red;
}

.original-price {
  font-size: 14px;
  text-decoration: line-through;
  color: gray;
}

.timer {
  font-size: 14px;
  color: orange;
  text-align: right;
}

.tags {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.tag {
  background: #ff9900;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.delivery-info {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

.package-selection {
  font-family: Arial, sans-serif;
  margin: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

li:hover {
  border: 1px solid #ff5500;
}

.selected {
  border: 1px solid #ff5500;
  background-color: #fff7e6;
}

.package-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-selector button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
}

.quantity-selector button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.quantity-selector input {
  width: 50px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.quantity-selector .status {
  color: green;
}

.action-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; /* 更改为适合页面比例 */
  margin: 0 auto;
  padding: 10px 0;
}

.buy-now, .add-to-cart {
  flex: 1;
  padding: 15px;
  border: none;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.buy-now {
  background-color: #ff4500; /* 红色 */
  border-right: 2px solid #ffa500; /* 添加分割线效果 */
}

.add-to-cart {
  background-color: #ffa500; /* 橙色 */
}

.favorite {
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000;
  cursor: pointer;
}

.tabs-container {
  font-family: Arial, sans-serif;
}

.tabs-header {
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 10px 0;
}

.tab {
  cursor: pointer;
  padding: 5px 10px;
  color: #666;
  font-size: 16px;
}

.tab.active {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
}

.tabs-divider {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.tabs-content {
  padding: 20px;
  color: #333;
  font-size: 14px;
}

.user-reviews {
  font-family: Arial, sans-serif;
}

.review-header {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  font-weight: bold;
}

.review-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.filter {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.filter:hover {
  background-color: #f2f2f2;
}

.review-item {
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0;
}

.review-user {
  display: flex;
  gap: 10px;
  font-size: 14px;
}

.review-user .badge {
  padding: 2px 5px;
  background-color: gold;
  border-radius: 5px;
  font-size: 12px;
}

.review-content {
  font-size: 16px;
  margin-top: 6px;
  line-height: 1.5;
}

.product-specs {
  margin: 20px;
  border-collapse: collapse;
  width: 100%;
}

.product-specs table {
  border: 1px solid #ddd;
  width: 100%;
}

.product-specs th,
.product-specs td {
  padding: 8px 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.product-specs th {
  background-color: #f7f7f7;
  font-weight: bold;
}

.product-specs td {
  background-color: #fff;
}

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