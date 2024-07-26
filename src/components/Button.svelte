<script lang="ts">
  import Typography from "./Typography.svelte";

  export let width: number | null = null;
  export let height: number | null = null;
  export let onClick: Function;
  export let rounded: boolean = true;

  function handleClick() {
    onClick();
  }
</script>

<button
  class="button"
  style="
    width: {width == null ? 'fit-content' : width + 'px'};
    height: {height == null ? 'fit-content' : height + 'px'};
    border-radius: {rounded ? 14 : 0}px;
  "
  on:click={handleClick}
>
  <Typography variant="h2" type="body" color="var(--color-darkest-lilac)">
    <slot />
  </Typography>
</button>

<style lang="scss">
  .button {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: white;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background-color: var(--color-dark-lilac);
      color: white;
    }
  }
</style>
