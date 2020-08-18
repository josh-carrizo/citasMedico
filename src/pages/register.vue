<template>
    <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(135deg,  #EA5C54  0%,#bb6dec 100%);"
    >
    <div class="column q-pa-lg">
    <q-btn glossy color="purple" class="full-width" exact to="Login" clickable label="You already register? Log In!" />
      <br>
      <div class="row">
        <q-card square dark class="q-pa-md q-ma-none no-shadow bg-grey-10" style="width:320px;">
          <q-card-section class="q-mt-xl q-mb-md">
            <h4 class="text-weight-bolder text-grey q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form  @submit.prevent="CreateUser" class="q-px-sm q-pt-xl q-pb-lg">
              <q-input dark dense square filled clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input dark dense square filled clearable v-model="RepeatPassword" type="password" label="Repeat your Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input dark dense square filled clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" type="submit" class="full-width text-white" label="Get Started" />
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      RepeatPassword: '',
      password: ''
    }
  },
  methods: {
    CreateUser () {
      console.log('Funciona Create User')
      if (this.formCreate.password !== this.formCreate.RepeatPassword) {
        alert('Ambas contraseñas deben coincidir')
        return
      }
      const datos = { email: this.email, password: this.password }
      this.$store.dispatch('registerAction', datos)
    }
  }
}
</script>
