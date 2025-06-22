<script lang="ts">
	import ViewOfflineApp from '$lib/ViewOfflineApp.svelte';
</script>

<main class="main">
	<h1 class="title">Quantum Tic-Tac-Toe</h1>
	<ViewOfflineApp />
</main>

<style>
.main {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding-top: var(--header-height);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
</style>