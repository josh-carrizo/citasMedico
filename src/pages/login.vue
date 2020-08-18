<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(135deg,  #EA5C54  0%,#bb6dec 100%);"
  >
    <div class="column">

      <q-btn glossy color="purple" class="full-width" exact to="Register" clickable label="Don't have account? Register Now!" />
      <br>
      <div class="row">

        <q-card square dark class="q-pa-md q-ma-none no-shadow bg-grey-10" style="width:320px;">
          <q-card-section class="q-mt-xl q-mb-md">
            <p class="text-weight-bolder text-grey">Login to your account</p>
          </q-card-section>
          <q-card-section>
            <q-btn v-if="!loggedIn">LogIn</q-btn>
            <q-btn v-else @click="logoutUser">Logout</q-btn>
            <q-btn v-if="!loggedIn">LogUp</q-btn>
            {{loggedIn}}
            <q-form @submit.prevent="LogIn" class="q-gutter-md" >
              <q-input dark dense square filled clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input dark dense square filled clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            <div class="row full-width items-center">
              <div class="col-6">
                <q-btn  type="submit" outline rounded size="md" color="red-4" class="full-width text-white" label="Sign In" />
              </div>
              <div class="col-6">
                <p class="text-no-wrap text-grey text-caption text-right">Forgot password?</p>
              </div>
            </div>
            </q-form>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'logoutUser']),
    submitForm () {
      console.log('funciona form')
      this.loginUser(this.formData)
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  }
}
</script>
