/* import {firebaseAuth} from 'boot/firebase'

export default ({router}) => {
  router.beforeEach((to, next) => {
    firebaseAuth.onAuthStateChanged(user => {
      if( !user && to.path !== '/agregarCitas'){
        next('/agregarCitas')
      }else{
        // console.log(loggedIn);
        next()
      }
    })
  })
} */
