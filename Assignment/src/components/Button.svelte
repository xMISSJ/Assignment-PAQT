<script lang="ts">
  export let width: number | null = null;
  export let onClick: Function;

  function handleClick() {
    onClick();
  }
</script>

<button
  class="button"
  style="width: {width == null ? 'fit-content' : width + 'px'};"
  on:click={handleClick}
>
  <slot />
</button>

<style lang="scss">
  .button {
    display: inline-block;
    height: fit-content;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 14px;
    background-color: white;

    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      background-color: var(--color-button-bg);
      color: white;
    }
  }
</style>
