<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lista de contatos</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Lista de contatos</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-list>
          <ion-item v-for="contato in lista" :key="contato.id">{{ contato.nome }}</ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem
  },
  computed: {
    lista() {
      return this.$store.getters.getContatos;
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