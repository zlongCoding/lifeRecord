<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>

export default {
  layout: "admin",
  data() {
    return {
      editorContent: ""
    };
  },
  methods: {
    getContent: function() {
      alert(this.editorContent);
    }
  },
  mounted() {
    let wangEditor = this.$wangEditor
    var editor =  new wangEditor(this.$refs.editor);
    console.log(editor, this.$wangEditor)
    editor.customConfig.uploadImgServer = '/upload'
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  }
};
</script>

<style scoped>
</style>
