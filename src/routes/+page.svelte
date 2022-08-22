<script lang="ts">
	import TestModule from '$lib/dashboard/TestModule.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="dashboard">
	<div class="dashboard__left">
		<TestModule>
			<div slot="title">Trips</div>
			<div slot="content">-</div>
		</TestModule>
	</div>
	<div class="dashboard__centre">
		<TestModule>
			<div slot="title">Recent Activity</div>
			<div slot="content">-</div>
		</TestModule>
	</div>
	<div class="dashboard__right">
		<TestModule>
			<div slot="title">Account</div>
			<div slot="content">-</div>
		</TestModule>
	</div>
</div>

<style>
	.dashboard {
		display: flex;
		flex-direction: row;
	}

	.dashboard__left,
	.dashboard__right {
		flex: 1;
	}

	.dashboard__centre {
		flex: 2;
		padding: 0 1em;
	}
</style>
