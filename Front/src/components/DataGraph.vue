<template>
  <div class="graph-container">
    <div ref="graph"></div>
  </div>
</template>

<script>
  import "https://cdn.plot.ly/plotly-2.13.1.min.js"

  export default {
    name: "graph-component",
    props: {
      data: {
        type: Array,
        required: false
      },
      layout: {
        type: Object,
        required: false
      }
    },
    mounted() {
      Plotly.newPlot(this.$refs.graph, {
        "data": this.data,
        "layout": this.layout
      });
    },
    updated() {
      Plotly.newPlot(this.$refs.graph, {
        "data": this.data,
        "layout": this.layout
      });
    }
  }
</script>