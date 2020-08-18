<template>
  <q-page class="bg-grey-3 column">
    <!-- Lista de Items -->

    <q-list class="bg-white q-pa-md" separator bordered>
      <q-item>
        <q-item-section>
          <q-icon name="done" />
        </q-item-section>
        <q-item-section>
          <p>Fecha</p>
        </q-item-section>
        <q-item-section>
          <p>Hora</p>
        </q-item-section>
        <q-item-section>
          <p>Nombre Paciente</p>
        </q-item-section>
        <q-item-section>
          <p>Sintomas</p>
        </q-item-section>
        <q-item-section>
          <q-icon name="delete" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="bg-white q-pa-md" separator bordered>
      <q-item
        v-for="(item, i) in items"
        :key="i"
        tag="label"
        v-ripple
        clickeable
        :class="{'bg-blue-1 listo': item.listo == true}">
        <q-item-section avatar>
          <q-checkbox v-model="item.listo" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.Fecha}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.Hora}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.Nombre}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.Sintoma}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn v-if="item.listo" flat round color="primary" icon="delete" @click.stop="eliminarItem(i)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'citas',
  data () {
    return {
      items: [
        {
          Fecha: '20/02/2020',
          Hora: '19:30',
          Nombre: 'Don Balboa',
          Sintoma: 'Dolores'
        },
        {
          Fecha: '20/02/2020',
          Hora: '19:30',
          Nombre: 'Don Balbo',
          Sintoma: 'Dolores'
        },
        {
          Fecha: '20/02/2020',
          Hora: '19:30',
          Nombre: 'Don Baboa',
          Sintoma: 'Dolores'
        }
      ]
    }
  },
  methods: {
    eliminarItem (i) {
      this.$q.dialog({
        dark: true,
        title: 'Alerta',
        message: '¿Estás seguro de eliminar este item?'
      }).onOk(() => {
        // Esto es cuando el usuario esta OK con eliminar el item
        // eliminamos el item
        this.items.splice(i, 1)
        // le notificamos al usuario
        this.$q.notify('El item ha sido eliminado')
      })
    }
  }
}
</script>
