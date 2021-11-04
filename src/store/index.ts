import { Http } from '@capacitor-community/http';
import { createStore } from 'vuex';

const store = createStore({
    state: { // dados da aplicacao
        contatos: []
    },
    getters: { // leem os dados da aplicacao (para "encapsular" os dados do "state")
        getContatos(state) {
            return state.contatos;
        }
    },
    mutations: { // manipula os dados do "state"
        setContatos(state, payload) {
            state.contatos = payload;
        }
    },
    actions: { // manipula "indiretamente" os dados do "state" (assíncrona)
        getContatosAPI(state) {
            const options = {
                url: 'https://usj-ads-pw-contato-2021-1.herokuapp.com/'
            };

            Http.get(options)
                .then( (response) => {
                    console.log(response.status);
                    console.log(response.data);
                    // atualizar DE FATO a lista (array) de contatos
                    state.commit('setContatos', response.data);
                });
        }
    }
});

export default store;
