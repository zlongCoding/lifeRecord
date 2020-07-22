<template>
  <div class="mavonEditor">
    <!-- <no-ssr> -->
      <!-- :toolbars="markdownOption" -->
      <mavon-editor  v-model="handbook"/>
    <!-- </no-ssr> -->
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      handbook: ""
    };
  },
  mounted () {
   let panel = document.getElementsByClassName('v-note-panel')[0]
   console.log(panel, "-----")
   panel.style.maxHeight = `${document.body.clientHeight - 200}px`
  }
};
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>
