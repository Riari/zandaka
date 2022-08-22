<script lang="ts">
	import Module from './Module.svelte';
</script>

<Module>
    <div slot="title"><slot name="title" /></div>
    <div slot="content"><slot name="content" /></div>
</Module>