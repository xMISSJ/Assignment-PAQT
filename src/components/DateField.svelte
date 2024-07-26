<script lang="ts">
  import Typography from "./Typography.svelte";

  export let label: string = "Label";
  export let type: string = "date";
  export let value: string;
  export let onChange: (event: Event) => void;
</script>

<div class="datefield">
  <Typography variant="h2" type="body" color="var(--color-darkest-lilac)">
    {label}
  </Typography>
  <input {type} {value} on:change={onChange} />
</div>

<style lang="scss">
  .datefield {
    display: flex;
    flex-direction: column;
  }

  input {
    box-sizing: border-box;
    width: 150px;
    height: 20px;
    color: var(--color-darker-lilac);
  }
</style>
