<template>
    <div class="mine" style="width: 90%;margin: 0 auto;display: flex;">
     <div class="menu" style="width: 30%;margin-top: 20px;">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index">
           <router-link :to="{path: item.path}" class="nav-link">
            <h2 v-if="item.active" style="color: rgb(255, 80, 0);">{{item.title}}</h2>
            <h2 v-else>{{item.title}}</h2>
           </router-link>
        </div>
     </div>
     <div class="mine-content" style="width: 60%;">
      <div class="user-container">
       <div class="user-info">
        <div class="user-avatar">
          <img :src="userInfo.avatar" alt="用户头像" />
        </div>
        <div class="user-details">
          <h2 class="username">{{ userInfo.username }}</h2>
          <div class="additional-info">
            <span>{{ userInfo.userID }}</span>
            <span>&nbsp;&nbsp;收货地址：{{ userInfo.address }}</span>
          </div>
          <div class="membership">
            <span class="vip-badge">{{ userInfo.vipLevel }}</span>
            <span>{{ userInfo.vipDescription }}</span>
          </div>
        </div>
        </div>
        <div class="bonus-info">
          <div class="bonus-details">
            <div class="bonus-item">
              <span>红包 <strong>{{ userInfo.bonus.redPacket }} 元</strong></span>
              <span>优惠券 <strong>{{ userInfo.bonus.coupons }} 张</strong></span>
              <span>淘金币抵 <strong>{{ userInfo.bonus.taoJin }}</strong></span>
            </div>
            <div class="bonus-description">
              <span><i class="red-circle"></i> <strong>{{ userInfo.bonus.redPacket }}</strong> 百亿补贴惊喜红包</span>
              <span>00:{{ userInfo.bonus.timeLeft }} 后失效</span>
            </div>
            <div class="use-button">
              <button class="use-btn">去使用</button>
            </div>
          </div>
        </div>
     </div>
     <div class="order-container">
        <h3>我的订单</h3>
        <div class="status-container" style="display: flex;text-align: center;width: 100%;justify-content: space-between;">
            <div class="status-item" v-for="(item, index) in orderList" style="margin: 0 20px;">
              <p class="number">{{ item.number }}</p>
              <p class="label">{{ item.status }}</p>
            </div>
        </div>
     </div>
     <div class="address-container">
        <h3>我的地址&nbsp;&nbsp;<el-button type="text" @click="addAddress = true">新增地址</el-button></h3>
        <el-input
          v-show="addAddress"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="addressTextarea">
        </el-input>
        <el-button v-show="addAddress" type="primary" @click="handleAddAddress" style="margin: 20px;">确认添加</el-button>
        <el-input
            v-show="updataAddress"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="addressTextarea">
          </el-input>
          <el-button v-show="updataAddress" type="primary" @click="handleUpdataAddress(index)" style="margin: 20px;">确认修改</el-button>
        <el-card  style="margin: 20px;" v-for="(item, index) in addressList" :key="index">
          <div> {{ item }} </div>
          <el-popconfirm
                title="确定要取消该地址吗？"
                @confirm="handleDeleteAddress(index)"
                :hide-icon="true"
              >
              <el-button type="text" slot="reference" class="no-style-button">
                  <a>删除地址</a>
              </el-button>
          </el-popconfirm>&nbsp;&nbsp;
          <el-button type="text" @click="updata(item,index)">修改地址</el-button>&nbsp;&nbsp;
          <el-button type="text" @click="setDefault(index)">设为默认</el-button><br>
          <div style="margin-top: 10px;color:rgb(255, 80, 0);" v-if="index === 0">默认地址</div>
        </el-card>
     </div>
     </div>
     <div>
     </div>
  </div>
</template>
<script>
import { getLocalStorage,setLocalStorage } from '@/api/localStorage';
export default {
  data() {
      return {
          menuList: [
              {path: "/mine", title: "我的优好购", active: true},
              {path: "/shoppingCart", title: "我的购物车", active: false},
              {path: "/orderGoods", title: "我的订单", active: false},
              {path: "/collect", title: "我的收藏", active: false},
              {path: "", title: "地址管理", active: false},
          ],
          imageUrl: '',
          username: getLocalStorage('token'),
          userInfo: {},
          orderList: [
            {status: '下单成功', number: 0},
            {status: '物流运输', number: 0},
            {status: '待收货', number: 0},
            {status: '收货确认', number: 0},
            {status: '待评价', number: 0},
          ],
          addressList: getLocalStorage('address'),
          addAddress: false,
          addressTextarea: '',
          updataAddress: false,
          updataIndex: -1,
      }
  },
  created() {
    console.log('地址',this.addressList)
    this.userInfo = this.$store.state.user[this.username].userInfo
    const order = getLocalStorage('order')
    order.forEach(item => {
        this.getOrderList(item.status)
    })
    console.log('地址',this.addressList)
  },    
  methods: {
      getOrderList(status) {
        if (status >= 0) this.orderList[status].number++ 
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
            this.addressList.push(this.addressTextarea);
            setLocalStorage('address', this.addressList);
            this.addressTextarea = '';
     },
     handleDeleteAddress(index){
         this.addressList.splice(index, 1);
         setLocalStorage('address', this.addressList);
     },
     handleUpdataAddress() {
         this.updataAddress = false;
         this.addressList[this.updataIndex] = this.addressTextarea;
         setLocalStorage('address', this.addressList);
         this.addressTextarea = '';
     },
     updata(item,index) {
         this.updataAddress = true;
         this.addressTextarea = item
         this.updataIndex = index
     },
     setDefault(index) {
        const address = this.addressList[index]
        this.addressList.splice(index, 1)
        this.addressList.unshift(address)
        setLocalStorage('address', this.addressList)
     }
 }
}
</script>
<style scoped> 
.menu {
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu-item .nav-link {
  text-decoration: none; 
  color: #333; 
}

.menu-item .nav-link h1 {
  margin: 0;
  padding: 0;
}

.menu-item .nav-link:hover {
  color: rgb(255, 80, 0); 
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.user-container {
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.user-avatar img {
  width: 100%;
  height: 100%;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.additional-info {
  display: flex;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.membership {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #ff4000;
}

.vip-badge {
  display: inline-block;
  padding: 2px 5px;
  background-color: #ff4000;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 5px;
}

/* 红包信息 */
.bonus-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.bonus-details {
  display: flex;
  flex-direction: column;
}

.bonus-item {
  font-size: 14px;
  color: #333;
}

.bonus-item strong {
  font-size: 16px;
  color: #ff4000;
}

.bonus-description {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.bonus-description span {
  font-size: 14px;
  color: #666;
}

.red-circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ff4000;
  border-radius: 50%;
  margin-right: 5px;
}

.use-button {
  margin-top: 10px;
}

.use-btn {
  padding: 5px 10px;
  background-color: #ff4000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.status-item:hover {
  color: rgb(255, 80, 0); 
  cursor: pointer;
}
</style>