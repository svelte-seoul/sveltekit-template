<style lang="postcss">
  .container {
    border: 1px solid var(--border) !important;
    box-sizing: border-box;
    border-radius: 4px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    &:focus-within {
      border: 1px solid var(--input-focus);
    }

    input, textarea {
      flex: 1;
      color: var(--text);
      caret-color: var(--text);
      text-transform: none;
      font-size: var(--font-size, 0.875rem);
      padding: 12px 16px;
      font-family: inherit;
      background-color: transparent;
      background: transparent;
      border: none;

      &:focus {
        outline: 2px solid var(--focus);
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--paper) inset !important;
        -webkit-text-fill-color: var(--text) !important;
      }
    }
  }
</style>

<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let placeholder = '';
  export let type = 'text';
  export let containerStyle = '';
  export let inputStyle = '';
  export let numOfLines = 1;

  export let value: string | number = '';

  const dispatch = createEventDispatcher();

  const onChanged = (e: any) => {
    value = /^(number|range)$/.exec(type) ? +e.target.value : e.target.value;

    dispatch('changed', value);
  };
</script>

<div class="container" style={containerStyle}>
  <slot name="leftElement" />
  {#if numOfLines === 1}
    <input
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      on:input={onChanged}
    />
  {:else}
    <textarea
      rows={numOfLines}
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      on:input={onChanged}
    />
  {/if}
  <slot name="rightElement" />
</div>
