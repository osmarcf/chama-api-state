<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Chamada à API</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Chamada à API</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-button expand="block" @click="lerContatos">Ler contatos da API</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },
  methods: {
    lerContatos: function() {
      this.$store.dispatch('getContatosAPI');
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
 
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-button {
  margin: 20px
}
</style>