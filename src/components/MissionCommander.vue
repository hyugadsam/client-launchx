<template>
<h4>MC</h4>
  <div v-if="currentmsCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentmsCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Idioma</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentmsCommander.lang"
        />
      </div>
      <div class="form-group">
        <label for="title">Mission Commander</label>
        <input type="text" class="form-control" id="title"
          v-model="currentmsCommander.missionCommander"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMc">
      Eliminar Mc
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMc">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mc. </p>
  </div>
</template>
<script>

import MissionCommanderService from "../services/MissionCommanderService";


export default {
  name: "mc",
  data() {
    return {
      currentmsCommander: null,
      message: ''
    };
  },
  methods: {
    getMc(id) {
      MissionCommanderService.get(id)
        .then(response => {
          this.currentmsCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMc() {
      MissionCommanderService.delete(this.currentmsCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "mc" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMc() {
      MissionCommanderService.update(this.currentmsCommander.id, this.currentmsCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMc(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
