<<<<<<< HEAD
/* import {firebaseAuth} from 'boot/firebase'
=======
import { firebaseAuth } from 'boot/firebase'
>>>>>>> b7da4249036c807b479fac40c48a1587ef1cb009

export default ({ router }) => {
  router.beforeEach((to, next) => {
    firebaseAuth.onAuthStateChanged(user => {
      if (!user && to.path !== '/agregarCitas') {
        next('/agregarCitas')
      } else {
        // console.log(loggedIn);
        next()
      }
    })
  })
<<<<<<< HEAD
} */
=======
}
>>>>>>> b7da4249036c807b479fac40c48a1587ef1cb009
