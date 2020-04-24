<template>
    <div>
        {{user}}
    </div>

</template> 
<script>
    export default{
        data(){
            return {
                user:''
            }
        },
        created(){
            this.user = this.$cookieStore.getCookie('username')
        }
    }

</script>