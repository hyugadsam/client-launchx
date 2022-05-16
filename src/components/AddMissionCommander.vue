<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo MC</h3>
      <div class="form-group">
        <label for="name">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="titnamele"
          required
          v-model="mc.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="lang">Idioma</label>
        <input
          type="text"
          class="form-control"
          id="lang"
          required
          v-model="mc.lang"
          name="lang"
        />
      </div>
      <div class="form-group">
        <label for="missionCommander">Mission Commander</label>
        <input
          type="text"
          class="form-control"
          id="missionCommander"
          required
          v-model="mc.missionCommander"
          name="missionCommander"
        />
      </div>
      <div class="form-group">
        <label for="enrollments">Inscripciones</label>
        <input
          type="number"
          class="form-control"
          id="enrollments"
          min="0"
          required
          v-model="mc.enrollments"
          name="enrollments"
        />
      </div>
      
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="hasCertification"
          required
          v-model="mc.hasCertification"
          name="hasCertification"
        />
        <label class="form-check-label" for="hasCertification">Certificacion &nbsp;</label>

      </div>
      <br/>
      <button @click="saveMc" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> MC creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMc">Add</button>
    </div>
  </div>
</template>

<script>

import MissionCommanderService from "../services/MissionCommanderService";


export default {
  name: "add-mc",
  data() {
    return {
      mc: {
        id: null
      },
      submitted: false
    };
  },
  methods: {
    saveMc() {
      MissionCommanderService.create(this.mc)
        .then(response => {
          this.mc.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMc() {
      this.submitted = false;
      this.mc = {};
    }
  }
};
</script>
