<script>
export default {
    name: "Child",
    props:{name: String, count: Number, counterUp:Function },
    data(){
        return{
            counter: this.count
        }
        
    },
    methods:{
        increment(value){
            this.counter= this.counter+value
            // this.$store.commit('increment', value)
            this.$store.dispatch("increment", value)
            
        },

    }
}
</script>

<template>
    <div id="Child">
        <button @click="increment(+1)">+1</button>
        <b class="header">{{counter}}</b>
        <button @click="increment(-1)">-1</button>
    </div>
</template>

