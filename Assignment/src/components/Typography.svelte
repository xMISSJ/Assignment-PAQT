<script lang="ts">
  export let type: string = "title";
  export let variant: string = "h1";
  export let color: string = "var(--color-darker-lilac)";
  export let whiteSpace: string = "normal";
  export let style: string = "";
  export let component: HTMLElement | null = null;

  const fontStyles: Record<
    string,
    {
      fontSize: string;
      letterSpacing?: string;
    }
  > = {
    title: {
      fontSize: "30px",
    },
    subtitle: {
      fontSize: "22px",
      letterSpacing: "2px",
    },
    body: {
      fontSize: "12px",
    },
  };

  $: textStyle = fontStyles[type as string] || {};
</script>

<svelte:element
  this={variant}
  bind:this={component}
  style={`
    ${style}
    color: ${color};  
    white-space: ${whiteSpace};
    font-size: ${textStyle.fontSize};
    letter-spacing: ${textStyle.letterSpacing};
  `}
>
  <slot />
</svelte:element>
