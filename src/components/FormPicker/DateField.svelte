<script lang="ts">
  import Typography from "../Typography.svelte";

  export let label: string = "Label";
  export let fieldName: string = "Name";
  export let type: string = "date";
  export let fieldValue: string;
  export let onChange: (event: Event) => void;
</script>

<div class="datefield">
  <Typography variant="h2" type="body" color="var(--color-darkest-lilac)">
    {label}
  </Typography>
  <input {type} name={fieldName} value={fieldValue} on:change={onChange} />
</div>

<style lang="scss">
  .datefield {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 150px;
    height: 20px;
    color: var(--color-darker-lilac);
  }
</style>
