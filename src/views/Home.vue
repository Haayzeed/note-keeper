<template>
  <div class="home">
    <noteForm />
    <displayNote />
  </div>
</template>

<script>
// @ is an alias to /src
import noteForm from '@/components/noteForm.vue';
import displayNote from '@/components/displayNote.vue';
export default {
  name: 'Home',
  components: {
    noteForm,
    displayNote
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 50px;
  }
</style>
