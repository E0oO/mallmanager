<template>
    <div class="login-warp">
    
    <el-form class="login-form" label-position="right"
        label-width="60px" 
        :model="formdata">
      <h3>用户登陆</h3>
  <el-form-item label="账号">
    <el-input v-model="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input text='password' v-model="formdata.password"></el-input>
  </el-form-item>
   <el-button type="primary" plain class="login-btn">登陆</el-button>
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
      }
}
</script>
<style>
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
  background-color: cyan;
  border-radius: 5px;
  padding: 47.7px;
  
}
.login-btn{
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: block;
  margin: 0 auto;
}
</style>
