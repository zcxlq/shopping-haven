<template>
    <div style="width: 100%;height: 100%;;background-color: #f0f2f5;">
        <div class="login">
        <el-row>
            <el-col :span="6"><img src="@/assets/logoshop.webp" style="width: 100px; height: 50px;" alt=""></el-col>
            <el-col :span="6" :pull="4"><div style="margin-top: 15px;font-size: 14px;user-select: none;">优好购</div></el-col>
            <el-col :span="6" :push="5">
                <nav class="navbar">
                    <ul class="nav-list">
                        <li class="nav-item"><a>请登录您的账号</a></li>
                        <li class="nav-item"><a @click="$router.push('/')">返回主页</a></li>
                    </ul>
                </nav>
            </el-col>
        </el-row>
        <div class="login-register-container">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ isLogin ? '登录' : '注册' }}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="toggleForm">{{ isLogin ? '去注册' : '去登录' }}</el-button>
              </div>
              <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="demo-form">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item v-if="!isLogin" label="确认密码" prop="confirmPassword">
                  <el-input type="password" v-model="form.confirmPassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">{{ isLogin ? '登录' : '注册' }}</el-button>
                </el-form-item>
              </el-form>
            </el-card>
        </div>
        </div>
    </div>
        
</template>
<script>
import { setLocalStorage, getLocalStorage } from "@/api/localStorage"
export default {
    name: 'Login',
    data() {
      return {
        isLogin: true,
        form: {
          username: '',
          password: '',
          confirmPassword: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '用户名长度应在 3 到 20 个字符之间', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 20, message: '密码长度应在 3 到 20 个字符之间', trigger: 'blur' }
          ],
          confirmPassword: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            { validator: this.validateConfirmPassword, trigger: 'blur' }
          ]
        }
        };
    },
    methods: {
        toggleForm() {
          this.isLogin = !this.isLogin;
          this.form = {
            username: '',
            password: '',
            confirmPassword: ''
          }
        },
        onSubmit() {
          this.$refs.form.validate((valid) => {
            if (valid) {
              if (this.isLogin) {
                const { username, password } = this.form;
                const user = getLocalStorage("user") || [];
                const loginUser = user.some(user => user.username === username && user.password === password);
                if (loginUser) {
                  this.$message({
                    message: '登录成功',
                    type: 'success'
                  });
                  setLocalStorage("token",this.form.username);
                  setLocalStorage("collect",[]);
                  setLocalStorage("cart",[]);
                  setLocalStorage("address",[]);
                  setLocalStorage("order",[]);
                  setLocalStorage("inventory",[]);
                  this.$router.push('/');
                }else {
                  this.$message({
                    message: '用户名或密码错误',
                    type: 'warning'
                  });
                }
              } else {
                // 这里可以添加注册的逻辑
                if (getLocalStorage("user") === null){
                  setLocalStorage("user",[]);
                }
                const { username, password } = this.form;
                const user = getLocalStorage("user")
                console.log(user)
                const falg = user.some(item => item.username === username)
                console.log(falg)
                if (falg) {
                  return this.$message({
                    message: '用户名已存在',
                    type: 'warning'
                  });
                }
                user.push({ username, password });
                setLocalStorage("user",user);
                setLocalStorage("token",this.form.username);
                setLocalStorage("collect",[]);
                setLocalStorage("cart",[]);
                setLocalStorage("address",[]);
                setLocalStorage("order",[]);
                setLocalStorage("inventory",[]);
                this.$message({
                    message: '注册成功',
                    type: 'success'
                  });
                this.$router.push('/');
              }
            } else {
              console.log('错误提交');
              return false;
            }
          });
        },
        validateConfirmPassword(rule, value, callback) {
          if (value !== this.form.password) {
            callback(new Error('两次输入密码不一致'));
          } else {
            callback();
          }
        }
    }
}
</script>
<style scoped>
.navbar {
    background-color: #f0f2f5;
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

.login{
  width: 90%;
  margin: 0 auto;
}

.login-register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box-card {
  width: 350px;
}
</style>