<template>
    <div class="home">
        <router-link to="/cuisine">Aller dans la cuisine</router-link><br />
        <router-link to="/chambre">Aller dans la chambre</router-link><br />
        <router-link to="/salon">Aller dans le salon</router-link><br />
        <router-link to="/grenier">Aller dans le grenier</router-link><br />

        <br />
        <button @click="actionLumiereChambre">
            <template v-if="$store.state.lumieres.chambre">Eteindre</template>
            <template v-if="!$store.state.lumieres.chambre">Allumer</template>
            la lumiere de la chambre
        </button>
        <br />
        <button @click="actionLumiereSalon">
            <template v-if="$store.state.lumieres.salon">Eteindre</template>
            <template v-if="!$store.state.lumieres.salon">Allumer</template>
            la lumiere du salon
        </button>

        <p>Il y a un trésor caché dans la maison (Essaye toujour d'allumer la lumiere pour plus de visibiliter 😉)</p>
        <p>Le trésor est dans: {{$store.state.setTresorLoc}}</p>
    </div>
</template>

<script>
    export default {
        methods: {
            //Update light status (chambre)
            actionLumiereChambre() {
                this.$store.commit("setLumiere", "chambre");
            },
            //Update light status (salon)
            actionLumiereSalon() {
                this.$store.commit("setLumiere", "salon");
            },
        },
    };
</script>
