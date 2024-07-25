<script lang="ts">
  import DropDown from "./DropDown.svelte";
  import Typography from "./Typography.svelte";

  export let label: string = "Label";
  export let placeholder: string = "Placeholder";
  export let items: string[];
  export let onChange: (event: Event) => void;
</script>

<div class="dropdown">
  <Typography variant="h2" type="body" color="var(--color-darkest-lilac)">
    {label}
  </Typography>
  <select id="dogs" name="dog" on:change={onChange}>
    <option value="" disabled selected>{placeholder}</option>
    {#each items as item}
      <option value={item}>{item}</option>
    {/each}
  </select>
</div>

<style lang="scss">
  .dropdown {
    display: flex;
    flex-direction: column;
  }

  select {
    box-sizing: border-box;
    width: 150px;
    height: 20px;
    color: var(--color-darker-lilac);
  }
</style>
