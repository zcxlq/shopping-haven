<template>
    <div class="header">
        <el-row>
            <el-col :span="6"><img src="@/assets/logoshop.webp" style="width: 100px; height: 50px;" alt="" @click="$router.push('/')"></el-col>
            <el-col :span="6" :pull="4"><div style="margin-top: 15px;font-size: 14px;user-select: none;">优好购</div></el-col>
            <el-col :span="11" :push="2">
                <nav class="navbar">
                    <ul class="nav-list">
                        <li class="nav-item"><a @click="$router.push('/orderGoods')">已买的宝贝</a></li>
                        <li class="nav-item"><a @click="$router.push('/mine')">我的优好购</a></li>
                        <li class="nav-item"><a @click="$router.push('/shoppingCart')"><i class="el-icon-goods"></i>购物车</a></li>
                        <li class="nav-item"><a @click="$router.push('/collect')">收藏夹</a></li>
                        <li class="nav-item"><a>联系客服</a></li>
                        <li class="nav-item" v-if="username === null"><a @click="$router.push('/login')">登录/注册</a></li>
                        <li class="nav-item" v-else><a>你好，{{username}}</a></li>
                        <li class="nav-item">
                            <el-popconfirm
                                  title="确定要退出登录吗？"
                                  @confirm="logout"
                                  :hide-icon="true"
                                >
                                <el-button slot="reference" class="no-style-button">
                                    <a>退出登录</a>
                                </el-button>
                            </el-popconfirm>   
                        </li>
                    </ul>
                </nav>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getLocalStorage } from '@/api/localStorage';
export default {
    name: 'Header',
    data() {
        return {
            username: getLocalStorage('token')
        }
    },
    created() {
        console.log(this.username);
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('collect');
            localStorage.removeItem('cart');
            localStorage.removeItem('address');
            localStorage.removeItem('order');
            localStorage.removeItem("inventory");
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
/* 导航栏样式 */
.header {
    width: 90%;
    margin: 0 auto;
}

.navbar {
    background-color: #ffffff;
    padding: 10px 20px;
}

.nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.nav-item {
    margin-right: 20px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.nav-item span {
    font-size: 12px;
    margin-left: 5px;
    color: #888888;
}

.nav-item i.icon-cart {
    margin-right: 5px;
}

a:hover {
  color: #f40; 
}

.no-style-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
}

</style>