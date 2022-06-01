<script lang="ts">
  import {t} from '$lib/translations';
  import {type ThemeStore} from 'sveltekit-theme';
  import {getContext} from 'svelte';
  import {browser} from '$app/env';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const toggleTheme = () => {
    if (browser)
      {document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === '.') {
          changeThemeType();
        }
      });}
  };

  toggleTheme();
</script>

<div class="container">
  <p>{$t('index.title')}</p>

  <ul>
    <li>
      {@html $t('index.goto-link', {link: '/sign-in', name: $t('sign-in')})}
    </li>
    <li>
      {@html $t('index.goto-link', {link: '/temp', name: $t('temp-page')})}
    </li>
  </ul>
</div>
