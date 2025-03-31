<template>
    <div class="order-goods">
        <el-card v-for="(item,index) in orderList" shadow="hover" :key="index" style="width: 90%;margin: 0 auto;margin-top: 20px;">
          <div class="text item" style="display: flex;align-items: center;">
            <img :src="item.image" style="width: 10%;" alt="" @click="$router.push({path: '/productDetails',query: {id: item.prouductId}})">
            <div style="margin-left: 30px;">
                订单号：{{item.orderId}}<br>
                型号：{{item.description}}<br>
                数量：{{item.quantity}}<br>
                总价：{{item.totalPrice}}<br>
            </div>
            <div style="margin-left: auto;">
                <el-popover
                  placement="right"
                  width="400"
                  trigger="hover">
                    <el-steps :space="200" :active="item.status" finish-status="success">
                      <el-step title="下单成功"></el-step>
                      <el-step title="物流运输"></el-step>
                      <el-step title="待收货"></el-step>
                      <el-step title="收货确认"></el-step>
                      <el-step title="待评价"></el-step>
                    </el-steps>
                  <el-button type="text" slot="reference" @click="handlConfirm(item.orderId)">{{item.statusTitle}}</el-button>
                </el-popover><br>
                <el-popconfirm
                      title="确定要取消该订单吗,不可撤销？若您有需要可再次购买"
                      @confirm="handleDelete(item.orderId,'删除订单')"
                      :hide-icon="true"
                    >
                    <el-button type="text" slot="reference" class="no-style-button">
                        <a>取消订单</a>
                    </el-button>
                </el-popconfirm> 
                <br>
                <el-popconfirm
                      title="确定要删除该订单吗,不可撤销？"
                      @confirm="handleDelete(item.orderId,'删除订单',item.status)"
                      :hide-icon="true"
                    >
                    <el-button type="text" slot="reference" class="no-style-button">
                        <a>删除订单</a>
                    </el-button>
                </el-popconfirm> 
            </div>
          </div>
        </el-card>
        <div v-show="orderList.length === 0">
            <h3 style="text-align: center;margin-top: 50px;height: 400px;">暂无订单</h3>
        </div>
    </div>
</template>
<script>
import { getLocalStorage,setLocalStorage } from '@/api/localStorage';
export default {
    name: 'confirmOrder',
    data() {
        return {
            orderList: getLocalStorage('order'),
            statusTitle: '',
        }
    },
    created() {
        console.log(this.orderList);
        this.orderList.forEach((item, index) => {
            const statusTitle = this.statusTitleAction(item.status);
            this.orderList[index].statusTitle = statusTitle;
            console.log(this.$store.getters.getProductById(Number(item.prouductId)));
        });
        console.log(this.orderList);
    },
    methods: {
        statusTitleAction(status){
            if(status === 0) return '下单成功';
            if(status === 1) return '物流运输';
            if(status === 2) return '待收货';
            if(status === 3) return '收货确认';
            if(status === 4) return '待评价';
        },
        handleDelete(orderId,orderType,status) {
            // return console.log(orderId,orderType,status);
            if(orderType === '删除订单' && status < 4){
                return this.$message({
                    message: '订单交易未完成不允许删除！',
                    type: 'warning'
                })
            }
            this.$message({
                message: "操作成功！",
                type: "success"
            })
            this.orderList = this.orderList.filter(item => item.orderId !== orderId);
            setLocalStorage('order', this.orderList);
        },
        handlConfirm(orderId) {
            this.orderList.forEach((item, index) => {
                if (item.orderId === orderId && item.status === 3) {
                    const order = getLocalStorage('order').filter(item => item.orderId == orderId);
                    const orderList = getLocalStorage('order').filter(item => item.orderId !== orderId);
                    order[0].status = 4;
                    orderList.push(order[0]);
                    setLocalStorage('order', orderList);
                    this.orderList = getLocalStorage('order');
                }
            });
        }
    }
}
</script>
<style scoped> 
</style>