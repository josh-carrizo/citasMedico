 <template>
    <div class="q-pa-md">
        <div class="q-gutter-sm">
        <div class="q-gutter-md row items-start" >
            <q-date v-model="model" mask="DD-MM-YYYY HH:mm" color="purple" />
            <q-time v-model="model" mask="DD-MM-YYYY HH:mm" color="purple" />

            <q-input
                v-model="textareaModel"
                filled
                clearable
                autogrow
                color="green-8"
                label="Describa los sintomas"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
            />
        </div>

        <q-btn-group spread>
            <q-btn color="purple" label="Cancelar" icon="cancel" />
            <q-btn color="purple" label="Agendar Hora" icon="library_add_check" />
        </q-btn-group>
        </div>
  </div>
</template>

<script>
export default {
  name: 'agregarCitas',
  data () {
    return {
      model: '2019-22-02 21:02',
      textareaModel: ''
    }
  }
}
</script>
