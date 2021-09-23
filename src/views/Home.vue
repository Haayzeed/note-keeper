<template>
  <div class="home">
    <a class="github-link" target="_blank" href="https://github.com/Haayzeed/note-keeper">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.24756C6.475 2.24756 2 6.72506 2 12.2476C2 16.6667 4.865 20.4142 8.8375 21.7351C9.3375 21.8292 9.52083 21.5201 9.52083 21.2542C9.52083 21.0167 9.5125 20.3876 9.50833 19.5542C6.72667 20.1576 6.14 18.2126 6.14 18.2126C5.685 17.0584 5.0275 16.7501 5.0275 16.7501C4.12167 16.1301 5.0975 16.1426 5.0975 16.1426C6.10167 16.2126 6.62917 17.1726 6.62917 17.1726C7.52083 18.7017 8.97 18.2601 9.54167 18.0042C9.63167 17.3576 9.88917 16.9167 10.175 16.6667C7.95417 16.4167 5.62 15.5567 5.62 11.7251C5.62 10.6334 6.0075 9.74173 6.64917 9.04173C6.53667 8.78923 6.19917 7.77256 6.73667 6.39506C6.73667 6.39506 7.57417 6.12673 9.48667 7.42006C10.2867 7.19756 11.1367 7.08756 11.9867 7.08256C12.8367 7.08756 13.6867 7.19756 14.4867 7.42006C16.3867 6.12673 17.2242 6.39506 17.2242 6.39506C17.7617 7.77256 17.4242 8.78923 17.3242 9.04173C17.9617 9.74173 18.3492 10.6334 18.3492 11.7251C18.3492 15.5667 16.0117 16.4126 13.7867 16.6584C14.1367 16.9584 14.4617 17.5717 14.4617 18.5084C14.4617 19.8467 14.4492 20.9217 14.4492 21.2467C14.4492 21.5092 14.6242 21.8217 15.1367 21.7217C19.1375 20.4101 22 16.6601 22 12.2476C22 6.72506 17.5225 2.24756 12 2.24756Z" fill="black"/>
      </svg>
    </a>
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
    padding: 50px 20px;

    .github-link {
      position: absolute;
      top: 20px;
      right: 20px;

      svg {
        width: 48px;
        height: 48px;

        @media (max-width: 600px) {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
</style>
