import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

// import example from './module-example'
import firebase from 'firebase/app'
import VueFirestore from 'vue-firestore'
import '../boot/firebase.js'
import 'firebase/auth'

Vue.use(Vuex)
Vue.use(VueFirestore, { key: 'id' })

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function () {
  const Store = new Vuex.Store({
    state: {
      User: null,
      error: null
    },
    mutations: {
      setUser (state, newUser) {
        console.log('error user')
        state.User = newUser
      },
      setError (state, newError) {
        console.log('error error')
        state.error = newError
      }
    },
    actions: {
      registerAction (context, datos) {
        firebase.auth()
          .createUserWithEmailAndPassword(datos.email, datos.password)
          .then(function (response) {
            console.log(response)
            firebase.auth().currentUser.updateProfile({
              displayName: datos.name
            })
          })
          .then(function (response) {
            console.log(response)
            context.commit('setError', null)
            context.commit('setUser', { email: datos.email, name: datos.name })
            router.push('/')
          })
          .catch((error) => {
            console.log(error)
            context.commit('setError', error.message)
            context.commit('setUser', null)
          })
      },
      logIn (context, datos) {
        firebase
          .auth()
          .signInWithEmailAndPassword(datos.email, datos.password)
          .then(response => {
            context.commit('setError', null)
            context.commit('setUser', response.user)
            this.$router.push({ path: '/citas' })
          })
          .catch(error => {
            context.commit('setError', error.message)
            context.commit('setUser', null)
          })
      },
      logOut (context) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            context.commit('setError', null)
            context.commit('setUser', null)
          })
      }
    }

    // enable strict mode (adds overhead!)
    // for dev mode only
  })

  return Store
}
export const strict = false
