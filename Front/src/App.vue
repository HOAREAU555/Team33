<script setup>
  import DataGraph from './components/DataGraph.vue'
</script>

<template>
  <header></header>

    <div class="container maxwidth-100">
      <div class="row row-cols-2">
        <DataGraph class="col" :data="dataTemp" :layout="layoutTemp"/>
        <DataGraph class="col" :data="dataLumo" :layout="layoutLumo"/>
        <DataGraph class="col" :data="dataHumi" :layout="layoutHumi"/>
        <button class="col m-auto w-25 h-25 btn btn-primary"  @click="updateData()">
          Update data <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>
        </button>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  const apiAcces = axios.create({baseURL: "http://localhost:3000"});
  
  export default {
    name: "app",
    data() {
      return {
        mongoData: [],
        layoutTemp: {
          title: 'Temperature'
        },
        layoutLumo: {
          title: 'Luminosity'
        },
        layoutHumi: {
          title: 'Humidity'
        },
        dataTemp: [{"x": [], "y": []}],
        dataLumo: [{"x": [], "y": []}],
        dataHumi: [{"x": [], "y": []}],
    }},
    methods: {
      updateData() {
        apiAcces.get('/v1/data')
          .then(response => {
            this.dataTemp = [{"x": [], "y": []}];
            this.dataLumo = [{"x": [], "y": []}];
            this.dataHumi = [{"x": [], "y": []}];
            response.data.forEach((x, i) => {
              this.dataTemp[0]["y"].push(x.temperature);
              this.dataLumo[0]["y"].push(x.luminosity);
              this.dataHumi[0]["y"].push(x.humidity);
              this.dataTemp[0]["x"].push(x.updatedAt);
              this.dataLumo[0]["x"].push(x.updatedAt);
              this.dataHumi[0]["x"].push(x.updatedAt);
            })
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
    created() {
        this.updateData();
    },
    mounted: function () {
      window.setInterval(() => {
        this.updateData()
      }, 5000)
    },
  }
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
