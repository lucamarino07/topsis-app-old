<template>
  <div>
    <form @submit.prevent="submitCriterio" class>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-6 mt-4">
            <label for="nameCriterio">
              <strong>Criterio</strong>
            </label>
            <select id="nameCriterio" class="form-control" v-model="nameCriterio">
              <option
                v-for="(criterioStart, index) in criteriStart"
                :key="index"
              >{{criterioStart.nameCriterio}}</option>
            </select>
          </div>
          <div class="col-lg-2 col-sm-6 col-6 mt-4">
            <label for="valoreCriterio" class="text-success">
              <strong>Valore</strong>
            </label>
            <input
              id="valoreCriterio"
              type="number"
              step="0.01"
              class="form-control"
              v-model="valoreCriterio"
            >
          </div>
          <div class="col-lg-2 col-sm-6 col-4 mt-4">
            <label for="pesoCriterio" class="text-primary">
              <strong>Peso</strong>
            </label>
            <input
              id="pesoCriterio"
              type="number"
              step="0.01"
              class="form-control"
              v-model="pesoCriterio"
              min="0"
              max="1"
            >
          </div>

          <div class="col-lg-2 col-sm-6 col-4 mt-4">
            <label for="tipoCriterioProject" class="text-danger">
              <strong>Tipologia</strong>
            </label>
            <select id="tipoCriterioProject" class="form-control" v-model="tipoCriterio">
              <option>min</option>
              <option>max</option>
            </select>
          </div>
          <div class="col-lg-2 col-4 mt-4">
            <label for="tipoCriterioProject">
              <strong>Inserisci</strong>
            </label>
            <br>
            <button type="submit" class="btn btn-sm btn-success">+</button>

            <!-- <input id="tipoCriterioProject" type="text" class="form-control" v-model="tipoCriterio"> -->
          </div>
        </div>
      </div>
    </form>
    <br>
    <strong>
      <p class="mt-2">{{error}}</p>
    </strong>
  </div>
</template>

<script>
export default {
  name: "Criterio",
  props: {
    criteriStart: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nameCriterio: null,
      pesoCriterio: null,
      tipoCriterio: null,
      valoreCriterio: null,
      error: null
    };
  },
  mounted() {
    //   console.log(this.criteriStart)
  },
  watch: {
    nameCriterio(newQuestion, oldQuestion) {
      console.log("criteriStart", newQuestion, this.criteriStart);
      this.pesoCriterio = this.criteriStart.find(
        obj => obj.nameCriterio === newQuestion
      ).pesoCriterio;
      this.tipoCriterio = this.criteriStart.find(
        obj => obj.nameCriterio === newQuestion
      ).tipoCriterio;
    }
  },
  methods: {
    submitCriterio() {
      if (this.nameCriterio && this.valoreCriterio) {
        this.$emit("add-criterio", {
          nameCriterio: this.nameCriterio,
          valoreCriterio: this.valoreCriterio,
          pesoCriterio: this.pesoCriterio,
          tipoCriterio: this.tipoCriterio
        });

        this.nameCriterio = null;
        this.valoreCriterio = null;
        this.pesoCriterio = null;
        this.tipoCriterio = null;

        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Compilare tutti i campi per l'inserimento del criterio!";
      }
    }
  }
};
</script>

<style>
</style>
