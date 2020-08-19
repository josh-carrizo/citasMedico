 <template>
    <div class="q-pa-md">
        <div class="q-gutter-sm">
          <h2>Bienvenido </h2>
        <div class="q-gutter-md row items-start" >
            <q-date v-model="Fecha" mask="DD-MM-YYYY HH:mm" color="purple" />
            <q-time v-model="Hora" mask="DD-MM-YYYY HH:mm" color="purple" />

            <q-input
                v-model="textareaModel"
                filled
                clearable
                autogrow
                color="green-8"
                label="Describa los sintomas"
            />
        </div>

        <q-btn-group spread>
            <q-btn color="purple" type=submit label="Cancelar" icon="cancel" />
            <q-btn color="purple" type=submit label="Agendar Hora" icon="library_add_check" />
        </q-btn-group>
        </div>
  </div>
</template>

<script>
import { db } from '../boot/firebase.js'

export default {
  name: 'agregarCitas',
  data () {
    return {
      model: '2019-22-02 21:02',
      textareaModel: '',
      Fecha: '',
      Hora: ''
    }
  },
  methods: {
    agregarCita () {
      console.log('Funciona agregar cita')
      db.collection('citas').add({
        Nombre: this.Nombre,
        Fecha: this.Fecha,
        Hora: this.Hora,
        Sintomas: this.textareaModel
      })
      this.textareaModel = ''
    },
    eliminarCita (id) {
      console.log(id)
      const respuesta = confirm('¿Estas seguro/a de eliminar esta cita?')
      // if(!respuesta){return;}
      if (respuesta === false) { return }
      db.collection('citas').doc(id).delete()
    }
  }
}
</script>
