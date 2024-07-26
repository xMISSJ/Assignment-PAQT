<script lang="ts">
  import Typography from "../Typography.svelte";

  export let label: string = "Label";
  export let fieldName: string = "Name";
  export let placeholder: string = "Placeholder";
  export let items: string[];
  export let onChange: (event: Event) => void;
</script>

<div class="dropdown">
  <Typography variant="h2" type="body" color="var(--color-darkest-lilac)">
    {label}
  </Typography>
  <select id="dogs" name={fieldName} on:change={onChange}>
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
    align-items: center;
  }

  select {
    box-sizing: border-box;
    text-align: center;
    width: 150px;
    height: 20px;
    color: var(--color-darker-lilac);
  }
</style>
