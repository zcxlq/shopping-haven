<template>
    <div class="confirm-order">
        
    </div>
</template>
<script>
import { getLocalStorage } from '@/api/localStorage';
export default {
    name: 'confirmOrder',
    data() {
        return {
            orderList: getLocalStorage('order')
        }
    },
    created() {
        console.log(this.orderList);
    }
}
</script>
<style scoped> 
</style>