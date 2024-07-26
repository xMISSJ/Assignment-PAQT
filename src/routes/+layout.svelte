<script>
  import "../app.css";
  import { page } from "$app/stores";
  import BackButton from "../components/BackButton.svelte";
</script>

<div class="app">
  <main>
    {#if $page.url.pathname != "/"}
      <BackButton />
    {/if}
    <slot />
  </main>
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
