<template>
  <div>
    <b-table
      :items="ranking"
      :fields="fields"
      class="myTable"
      :sort-by="sort"
      :sort-desc="direction"
      v-if="ranking.length > 0"
    >
      <template slot="index" slot-scope="data">{{data.index + 1}}</template>
    </b-table>
    <button
      v-if="ranking.length > 0"
      type="submit"
      class="btn btn-sm btn-outline-danger mt-2 mb-2"
      @click="svuotaRanking"
    >
      <span role="status" aria-hidden="true"></span> Pulisci
    </button>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props: {
    ranking: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      sort: 'valore',
      direction: true,
      fields: [
        {
          key: 'index',
          label: '#',
          tdClass: 'font-weight-bold'
        },
        {
          key: 'progetto',
          sortable: false
        },
        {
          key: 'valore',
          sortable: false
        }
      ]
    }
  },
  methods: {
    svuotaRanking () {
      this.$emit('svuota-ranking')
    }
  }
}
</script>

<style>
.myTable thead {
  background-color: rgb(53, 58, 63);
  color: white;
}
</style>
