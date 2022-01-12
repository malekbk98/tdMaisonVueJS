<template>
    <div class="salon" :class="{lumiereAllumee:$store.state.lumieres.grenier}">
        <router-link to="/chambre">Retour dans la chambre</router-link>
        <h1>Ici c'est le grenier</h1>
        <button @click="actionLumiere">Alummer/Eteindre</button>
        <br />
        <img src="https://soumissionrenovation.ca/sn_uploads/blog/images/SOumissionRenovation_isolation-grenier-maison.jpg" width="600" /><br />
        <img v-if="$store.state.lumieres.grenier" @click="trouverTresor" src="http://assets.stickpng.com/images/589b244b2096a705e895cd79.png" width="100" />
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
                this.$store.commit("setLumiere", "grenier");
            },
            //Find a tresor
            trouverTresor() {
                //Save tresor location in store data
                this.$store.commit("setTresorLoc", "grenier");
                alert("🎉 Félicitation vous avez trouvé le trésor 🎉");

                //Retourn to homepage
                this.$router.push({ name: "Home" });
            },
        },
    };
</script>
