<script lang="ts">
  import { base } from "$app/paths";
  import Typography from "./Typography.svelte";

  let backText: string = "< Terug naar home";
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
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration: underline;
  }

  a {
    text-decoration: none;
  }
</style>
