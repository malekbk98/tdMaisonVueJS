<template>
    <div class="salon" :class="{lumiereAllumee:$store.state.lumieres.salon}">
        <router-link to="/">Retour dans la maison</router-link>
        <h1>Ici c'est le salon</h1>
        <button @click="actionLumiere">Alummer/Eteindre</button>
        <br />
        <img
            src="https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2021.2F07.2F07.2F365769b1-ca66-4205-806f-488c5cf74c84.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/2957%2C2445/nos-plus-belles-inspirations-pour-un-salon-a-la-deco-moderne-et-chic.jpeg"
            width="600"
        />
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
                this.$store.commit("setLumiere", "salon");
            },
        },
    };
</script>
