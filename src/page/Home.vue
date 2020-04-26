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
    </div>  
</template>
<script>
    export default{
        data(){
            return{
               msg:'home',
               user:''
            }
        },
        created () {
            var data = this.$cookieStore.getCookie('username')
            if(data){
                this.user = data;
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
    height: 40px;
    text-align: right;
    font-size: 17.7px;
    line-height: 40px;
    margin-right: 17px;
}
.usermodel{
    margin-right: 15.7px;
}
.contribute{
    margin-right: 15.7px;
    height: 32px;
    width: 70px;
    line-height: 32px;
    background-color: pink;
    font-size: 17px;
    color: #ffffff;
    border:none;
}
</style>