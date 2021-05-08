import Vue from 'vue'
import vuetify from '@/plugins/vuetify/vuetify.js'
import App from '@/components/App.vue'

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
