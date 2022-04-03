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

  .container {
    justify-self: center;
    width: 30%;
    color: var(--text);
  }
</style>

<script context="module" lang="ts">
  import {t, locale, locales, loadTranslations} from '$lib/translations';

  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({url}) => {
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
</script>

<ThemeProvider customTheme={{light, dark}}>
  <div class="menu">
    <select bind:value={$locale}>
      {#each $locales as value}
        <option value={value}>{$t(`lang.${value}`)}</option>
      {/each}
    </select>
  </div>
  <main>
    <slot />
  </main>
</ThemeProvider>
