<script>
  import "../app.css";
  import { page } from "$app/stores";
  import BackButton from "../components/BackButton.svelte";
</script>

<div class="app">
  {#if $page.url.pathname != "/"}
    <div class="back-button">
      <BackButton />
    </div>
  {/if}
  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
  }

  .back-button {
    margin: 20px;
  }
</style>
