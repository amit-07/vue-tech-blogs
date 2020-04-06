<template>
        <li>
                <p
                    v-for="cat in category"
                    v-bind:key="cat.ID"
                >
                    <router-link :to="{ name: 'home', query: { category: cat.name }}">
                        <b>{{ cat.name }}</b>
                    </router-link>
                </p>
        </li>
</template>

<script>

export default {
    name: 'ListItem',
    props: ['category'],
    components:{
    },
    computed:{
        
    },
    methods:{
        uniqueCategories(category){
            return new Set(...category);
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li{
        text-align: center;
        cursor: pointer;
        color: #fff;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
</style>
