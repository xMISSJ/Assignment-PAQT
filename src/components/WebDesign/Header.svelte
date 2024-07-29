<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Typography from "../Typography.svelte";
</script>

<div class="header">
  <a class="logo-container" href={base + $page.url.pathname}>
    <Typography variant="h1" type="title">
      {"Pasionate about Food.".toUpperCase()}
    </Typography>
  </a>
</div>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100px;
    background-color: var(--color-dark-lilac-2);
    padding: 0 50px;
    box-sizing: border-box;
  }

  .logo-container {
    display: flex;
  }

  a {
    text-decoration: none;
  }
</style>
