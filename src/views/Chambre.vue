<template>
    <div class="salon" :class="{lumiereAllumee:$store.state.lumieres.chambre}">
        <router-link to="/">Retour dans la maison</router-link>
        <h1>Ici c'est la chambre</h1>
        <button @click="actionLumiere">Alummer/Eteindre</button>
        <br />
        <router-link to="/grenier">Allez dans le grenier</router-link>
        <br />

        <img src="https://moderne-house.fr/wp-content/uploads/2016/06/chambre-parentale-design-2.jpg" width="600" /><br />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lumiereAllumee: false,
            };
        },
        methods: {
            //Update light status
            actionLumiere() {
                this.$store.commit("setLumiere", "chambre");
            },
        },
        mounted() {
            //Event listner to change light status
            this.$bus.$on("allumer-lumiere-chambre", $this.actionLumiere);
        },
    };
</script>
