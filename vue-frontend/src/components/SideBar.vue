<template>
  <div class="side">
    <ul>
        <h2>Categories</h2>
        <hr>
        <ListItem
            v-for="category in categories"
            v-bind:key="category.ID"
            v-bind:category="category"
        />
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
    name: 'SideBar',
    props: ['categories'],
    // data(){
    //     return {
    //         categoryNames:
    //     }
    // },
    mounted(){
    },
    components:{
        ListItem
    },
    computed:{
        
    },
    methods:{
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .side{
        display: flex;
        flex-direction: column;
        background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
        height: min-content;
    }
    h2{
        color: #fff;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
</style>
