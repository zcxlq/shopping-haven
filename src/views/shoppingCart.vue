<template>
    <div class="shopping-cart" style="width: 90%; margin: 0 auto;display: flex;align-items: flex-start;">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="图片"
            width="120">
            <template slot-scope="scope">
              <img :src="scope.row.image" style="width: 100px; height: auto;" />
            </template>
          </el-table-column>
          <el-table-column
            prop="price"
            label="单价"
            width="120">
          </el-table-column>
          <el-table-column
            prop="description"
            label="型号"
            width="360">
          </el-table-column>
          <el-table-column
            prop="quantity"
            label="数量"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click="addCartRow(scope.$index, scope.row)"
                type="text"
                size="small"
                style="font-size: 14px;">
                移入收藏夹
              </el-button><br>
              
              <el-popconfirm
                    title="确定要移除该商品吗,不可撤销？"
                    @confirm="deleteRow(scope.$index, scope.row)"
                    :hide-icon="true"
                  >
                  <el-button type="text" slot="reference" class="no-style-button">
                      <a>移除</a>
                  </el-button>
              </el-popconfirm> 
            </template>
          </el-table-column>
        </el-table>
        <el-card class="box-card" style="width: 30%; margin-left: 20px;display: inline-block;">
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <h2 style="margin-top: -6px;">结算明细</h2>
              <span>实际优惠金额以下单页为准</span>
            </div>
            <div v-if="images.length > 0">
              <span v-for="item in images"> 
                <img :src="item" style="width: 100px; height: auto;margin-left: 10px;" />
              </span>

            </div>
            <div v-else>
              <img src="https://img.alicdn.com/imgextra/i4/O1CN01CIC9vl1ISaHmqoYNZ_!!6000000000892-55-tps-140-140.svg" style="width: 320px; height: auto;margin-left: 10px;" alt="">
              <p style="text-align: center;margin-top: -100px;">选择商品查看实际支付价格</p>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
              <h2 style="margin-top: -6px;">合计：</h2>
              <h2 style="margin-top: -6px;color: rgb(255, 80, 0);">¥{{totalPrice}}</h2>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
              <h2 style="margin-top: -6px;">收货地址：</h2>
              <h2 style="margin-top: -6px;color: rgb(255, 80, 0);">{{address}}</h2>
            </div>
            <p><el-link type="primary" @click="handleAddress">{{ address === '' ? '暂无地址点击添加' : '选择其他地址' }}</el-link></p>
            <el-card v-show="updateAddress" style="margin: 20px;" v-for="(item, index) in addressList" :key="index">
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
            <el-button
              class="checkout-button"
              type="primary"
              :disabled="totalPrice <= 0"
              @click="checkout"
            >
              {{ totalPrice > 0 ? `领券结算 (${itemCount})` : '结算' }}
            </el-button>
          </div>
        </el-card>
    </div>
</template>
<script>
import { getLocalStorage,setLocalStorage } from '@/api/localStorage';
export default {
  name: "ShoppingCart",
  data() {
    return {
      tableData: getLocalStorage("cart"),
      multipleSelection: [],
      images: [],
      totalPrice: 0,
      itemCount: 0,
      addressList: [],
      address: "",
      updateAddress: false,
      addAddress: false,
      addressTextarea: '',
      }
    },
    created() {
      this.getAddress();
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
        toggleSelection(rows) {
        if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
          this.images = [];
          this.totalPrice = 0;
          this.itemCount = val.length;
          val.forEach(item => {
            this.images.push(item.image);
            this.totalPrice += item.price * item.quantity;
          });
          console.log(this.images);
        },
        async addCartRow(index, tableData) {
          console.log('加入收藏夹',index,tableData.prouductId)
          const collect = getLocalStorage('collect').filter(val => val !== tableData.prouductId)
          collect.push(tableData.prouductId)
          collect.sort((a, b) => a - b);
          setLocalStorage('collect', collect)
          this.$message({
            message: '移入收藏夹成功',
            type: 'success'
          });
        },
        deleteRow(index, tableData) {
          console.log('删除',index,tableData)
          const cart = getLocalStorage('cart').filter(val => val.prouductId !== tableData.prouductId)
          console.log(cart)
          setLocalStorage('cart', cart)
          this.tableData = getLocalStorage('cart')
          this.$message({
            message: '移除成功',
            type: 'success'
          });
        },
        checkout(){
          console.log(this.tableData)
          let data = {
             orderId: '',
             prouductId: '',
             quantity: '',
             description: '',
             address: '',
             totalPrice: '',
             status: '',
             image: '',
          }
          let cart =  getLocalStorage('cart') || []
          const orderId = Number(new Date().getTime())
          // return console.log(Number(orderId) + 1,orderId)
          this.multipleSelection.forEach((item, index) => {
            data.orderId = orderId + index
            data.prouductId = item.prouductId
            data.quantity = item.quantity
            data.description = item.description
            data.address = this.address
            data.totalPrice = item.quantity * item.price
            data.status = Math.floor(Math.random() * 3)
            data.image = item.image
            const orderList = getLocalStorage('order') || []
            orderList.push(data)
            setLocalStorage('order', orderList)
            cart.splice(cart.findIndex(val => val.prouductId === item.prouductId && val.modelId === item.modelId), 1)
          })
          setLocalStorage('cart', cart)
          this.$router.go(0);
        }
    }
 }
</script>
<style scoped> 
.checkout-button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: rgb(255, 80, 0);
  border-color: rgb(255, 80, 0);
}
</style>