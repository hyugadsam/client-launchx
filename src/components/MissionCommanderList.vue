<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Lista de Mission Commanders</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(mc, index) in msCommanders"
          :key="index"
          @click="setActiveExplorer(mc, index)"
        >
          {{ mc.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentmsCommander">
        <h4>Mc</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentmsCommander.name}}
          <br><label><strong>Mission Commander:</strong></label> {{ currentmsCommander.missionCommander}}
          <br><label><strong>Idioma:</strong></label> {{ currentmsCommander.lang}}
        </div>
        <router-link :to="'/mc/' + currentmsCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un mc.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MissionCommanderService from "../services/MissionCommanderService";

export default {
  name: "mc-list",
  data() {
    return {
      tutorials: [],
      msCommanders: [],
      currentmsCommander: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    getAllMc(){
      MissionCommanderService.getAll()
        .then(response => {
          this.msCommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(mc, index) {
      this.currentmsCommander = mc;
      this.currentIndex = mc ? index : -1;
    }
  },
  mounted() {
    this.getAllMc();
  }
};
</script>
