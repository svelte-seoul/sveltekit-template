<style lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile (max-width: 640px);

  .menu {
    height: 48px;
    background-color: var(--background);
  }

  main {
    height: calc(100% - 48px);

    background-color: var(--background);
    color: var(--text);
    text-align: center;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script context="module" lang="ts">
  import {t, locale, locales, loadTranslations} from '$lib/translations';

  export const load: Load = async ({url}) => {
    const {pathname} = url;
    const defaultLocale = 'en'; // get from cookie / user session etc...
    const initLocale = locale.get() || defaultLocale;
  
    await loadTranslations(initLocale, pathname); // keep this just before the `return`
  
    return {};
  };
</script>

<script lang="ts">
  import '../app.css';
  import {ThemeProvider} from 'sveltekit-theme';
  import {light, dark} from '../utils/theme';
  import type {Load} from '@sveltejs/kit';

  const isProduction = process.env.NODE_ENV;
</script>

<ThemeProvider customTheme={{light, dark}}>
  <div class="menu">
    {#if isProduction !== 'production'}
      <select bind:value={$locale}>
        {#each $locales as value}
          <option value={value}>{$t(`lang.${value}`)}</option>
        {/each}
      </select>
    {/if}
  </div>
  <main>
    <slot />
  </main>
</ThemeProvider>
