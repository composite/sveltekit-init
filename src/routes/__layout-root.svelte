<script>
  import 'material-icons/iconfont/material-icons.css';
  import '@noonnu/nanumbarungothic';
  import 'dayjs/locale/ko.js';
  import '../app.scss';
  import { onMount } from 'svelte';

  onMount(async () => {
    await import('materialize-css/dist/js/materialize.js');
  });
</script>

<slot />
