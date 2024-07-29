<script lang="ts">
  export let id: string;
  export let bgColor: string = "var(--color-darker-lilac)";
</script>

<input type="checkbox" {id} style={`accent-color: ${bgColor};`} />

<style lang="scss">
  input[type="checkbox"] {
    cursor: pointer;
  }
</style>
