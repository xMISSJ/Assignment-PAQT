<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Typography from "./Typography.svelte";

  let backText: string = "Terug naar home";
</script>

<div class="back-button">
  <a href={base + "/"}>
    <Typography variant="p" type="body">
      {backText}
    </Typography>
  </a>
</div>

<style lang="scss">
  .back-button {
    margin-top: 20px;
    margin-left: 20px;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration: underline;
  }

  a {
    text-decoration: none;
  }
</style>
