<script>
  import "../app.css";
  import { page } from "$app/stores";
  import BackButton from "../components/BackButton.svelte";
</script>

<div class="app">
  <main>
    {#if $page.url.pathname != "/"}
      <div class="back-button">
        <BackButton />
      </div>
    {/if}
    <slot />
  </main>
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .back-button {
    top: 20px;
    left: 20px;
    position: absolute;
  }
</style>
