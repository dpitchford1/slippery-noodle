<script lang="ts">
    export let variant: 'primary' | 'secondary' | 'text' = 'primary';
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let disabled = false;
    export let icon = false;
    
    // Compute classes based on props
    $: classes = [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      icon ? 'btn--icon' : '',
    ].filter(Boolean).join(' ');
  </script>
  
  <button {type} {disabled} class={classes} on:click>
    <slot />
  </button>