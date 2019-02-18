<template>
  <div class="row justify-content-center">
    <div
      class="mx-2 my-2"
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      style="float: left"
    >
      <div class="card bg-danger" style="width: 18rem; border: 1px solid black">
        <div class="card-header text-white">
          <strong>{{project.nome}}</strong>
          <button
            type="button"
            class="close no-outline"
            @click="removeProject(project)"
          >
            <span>&times;</span>
          </button>
        </div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(criterio, index) in project.criteri"
            :key="index"
            :criterio="criterio"
            style="border: 1px solid black"
          >
            {{criterio.nameCriterio}}
            &nbsp;
            <span
              class="badge badge-pill badge-success"
            >{{criterio.valoreCriterio}}</span>&nbsp;
            <span class="badge badge-pill badge-primary">{{criterio.pesoCriterio}}</span>&nbsp;
            <span class="badge badge-pill badge-danger">{{criterio.tipoCriterio}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeProject (project) {
      this.$emit('remove-project', project)
    }
  }
}
</script>

<style>
.cardLuca {
  overflow: hidden;
  width: 912px;
  margin: 0 auto;
}

button:focus {
  outline: 0 !important;
  box-shadow: 0 !important;
}
</style>
