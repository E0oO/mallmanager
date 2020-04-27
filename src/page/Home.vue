<template>
    <div>
        <div class="head">
            <div class="wall">
                <img src="../assets/img/timg.jpeg" alt="标志">
                <span>表白墙</span>
            </div>
            <div class="logout">
            <span @click.prevent="usercenter" class="usermodel">欢迎你-{{user}}</span> 
            <button android:layout_width="fill_parent"
                android:layout_height="50dp"
                android:layout_marginTop="20dp"
                android:gravity="center"
                android:layout_marginLeft="20dp"
                android:layout_marginRight="20dp"
                android:textSize="15sp"
                android:textColor="#50000000"
                style="?android:attr/borderlessButtonStyle"
                class="contribute">表白</button>
            <span @click.prevent="exit">退出</span>
            </div>
        </div>
        <div class="msgmoudel">
            <el-button class="changemsg" @click.prevent="show">换一组</el-button>
            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-zoom-in-center">
                    <div v-show="show3" class="transition-box">{{box1}}</div>
                </transition>
                <transition name="el-zoom-in-top">
                    <div v-show="show3" class="transition-box">{{box2}}</div>
                </transition>
                <transition name="el-zoom-in-bottom">
                    <div v-show="show3" class="transition-box">{{box3}}</div>
                </transition>
            </div>
        </div>
    </div>  
</template>
<script>
    export default{
        data(){
            return{
               msg:'home',
               user:'',
               isshowmessage:false,
               show3: true,
               box1:'2',
               box2:'1',
               box3:'1',
            }
        },
        created () {
            var data = this.$cookieStore.getCookie('username')
            if(data){
                this.user = data;
                this.$http.get('data')
                .then(res=>{
                    this.box1 = res['data'][0]
                    this.box2 = res['data'][1]
                    this.box3 = res['data'][2]
                })  
                .catch(err=>{
                })
            }else{
               this.$router.push('/')
            }
            },
        methods: {
            exit(){
            this.$cookieStore.delCookie('username')
            this.$router.push('/')
            },
            usercenter(){
            this.$router.push('/center')
            },
            async getdata(){
                const res = await this.$http.get('data')
                const {data} = res.data
                        this.box1 = data[0]
                        this.box2 = data[1]
                        this.box3 = data[3]
            },
            onshow(){
                this.show3 = true
                this.$http.get('data')
                .then(res=>{
                    this.box1 = res['data'][0]
                    this.box2 = res['data'][1]
                    this.box3 = res['data'][2]
                })
                .catch(err=>{
                    console.log('err')
                })
            },
            show(){
                this.show3 = false
                setTimeout(this.onshow,100)
                
            }
            
        }
    }
</script>  
<style>
.head{
    width: 100%;
    height: 40px;
    border-bottom: 0px solid #ffffff;
    box-shadow: darkgrey 1px 1px 1px 1px;
}
.wall{
    position: absolute;
    float: left;
    margin-left: 25px;
    height: 40px;
    font-size: 17.7px;
    line-height: 40px;
    display:inline;
}
.wall img{
    width:25px;
    height: 25px;
    text-align: center;
    vertical-align: middle;
}
.logout{
    position:inherit;
    height: 40px;
    text-align: right;
    font-size: 17.7px;
    line-height: 40px;
    margin-right: 17px;
}
.usermodel{
    margin-right: 10px;
}
.contribute{
    margin-right: 10px;
    height: 32px;
    width: 70px;
    line-height: 32px;
    background-color: pink;
    font-size: 17.7px;
    color: #ffffff;
    border:none;
}
 .transition-box {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 20%;
    height: 200px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    /* margin-right: 20px; */
  }
.changemsg{
    margin-top: 205px;
    float: right;
    display: block;
}
.msgmoudel{
    height: 500px;
    width: 100%;
    /* background-color: gold; */
}
</style>