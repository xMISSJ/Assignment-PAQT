<script lang="ts">
  export let type: string = "title";
  export let variant: string = "h1";
  export let color: string = "var(--color-darker-lilac)";
  export let whiteSpace: string = "normal";
  export let style: string = "";
  export let component: HTMLElement | null = null;

  const fontStyles: { [key: string]: FontStyle } = {
    title: {
      fontSize: "30px",
      fontWeight: "600",
    },
    title2: {
      fontSize: "30px",
    },
    subtitle: {
      fontSize: "22px",
      letterSpacing: "2px",
      fontWeight: "600",
    },
    body: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: "600",
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
    font-weight: ${textStyle.fontWeight};
  `}
>
  <slot />
</svelte:element>
