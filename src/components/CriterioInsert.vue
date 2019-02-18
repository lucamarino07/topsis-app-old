<template>
  <div>
    <form @submit.prevent="submitCriterio" class>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-6 mt-4">
            <label for="nameCriterio">
              <strong>Criterio</strong>
            </label>
            <input id="nameCriterio" type="text" class="form-control" v-model="nameCriterio">
          </div>

          <div class="col-lg-2 col-sm-12 col-6 mt-4">
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

          <div class="col-lg-2 col-sm-6 col-6 mt-4">
            <label for="tipoCriterioProject" class="text-danger">
              <strong>Tipologia</strong>
            </label>
            <select id="tipoCriterioProject" class="form-control" v-model="tipoCriterio">
              <option>min</option>
              <option>max</option>
            </select>
          </div>
          <div class="col-lg-2 col-6 mt-4">
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
  data() {
    return {
      nameCriterio: null,
      pesoCriterio: null,
      tipoCriterio: null,
      error: null
    };
  },
  methods: {
    submitCriterio() {
      if (this.nameCriterio && this.tipoCriterio && this.pesoCriterio) {
        this.$emit("add-criterio-vector", {
          nameCriterio: this.nameCriterio,
          pesoCriterio: this.pesoCriterio,
          tipoCriterio: this.tipoCriterio
        });

        this.nameCriterio = null;
        this.pesoCriterio = null;
        this.tipoCriterio = null;

        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Compilare tutti i campi per proseguire!!";
      }
    }
  }
};
</script>

<style>
</style>
