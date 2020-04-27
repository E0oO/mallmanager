<template>
    <div class="login-warp">
     
    <el-form class="login-form" label-position="right"
        label-width="60px" 
        :model="formdata" >
         <span class="register">注册</span>
      <h3>用户登陆</h3>
  <el-form-item label="账号">
    <el-input v-model="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type='password' v-model="formdata.password"></el-input>
  </el-form-item>
   <el-button type="primary" plain 
   @click.prevent = "handellogin"
   class="login-btn">登陆</el-button>

</el-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
    formdata: {
        username :'',
        passsword: ''
    }
    }
      },
      methods:{
        open1() 
        {
        
        },
        handellogin()
        {
          this.$http.post('login',this.formdata)
          .then(res=>{
          const {
              data,
              meta:{msg,status}
          } = res.data
          if(status === 200){
              this.$cookieStore.setCookie('username',this.formdata.username,10)
              this.$router.push({'name':'home'})
              this.$message({
              showClose: true,
              message: msg,
              type: 'success'
              });
          }
          else{
              this.$message({
              showClose: true,
              message: msg,
              type: 'error'
              });
            }
          })
          .catch(err=>{
            this.$message({
              showClose: true,
              message: '账号或密码错误',
              type: 'error'
              });
          })
        }
        },
}
</script>
<style>
body{
    /* background: url("../assets/img/youname.jpg"); */

}
.login-warp{
  height: 100%;
  /* 弹性盒布局 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-warp h3{
  text-align: center;
  padding: 10px;
  display: block;
}
.login-form{
  width: 317px;
  /* background-color: cyan; */
  border-radius: 5px;
  padding: 47.7px;
  background: url("../assets/img/youname.jpg");
  background-size: 550px 325px;
  background-position: center;
  background-repeat:no-repeat;
}
.login-btn{
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: block;
  margin: 0 auto;
}
/* 注册模块 */
.register{
  display: block;
  line-height: 20px;
  text-align: right;
  font-size: 18px;
  font-family:'PingFang SC';
  color: #606266;
  padding: 0;
  margin: 0;
}
</style>
