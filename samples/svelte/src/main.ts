import { mount } from 'svelte';

import './app.css';

import SvelteApp from './App.svelte';

const svelteApp = mount(SvelteApp, {
	target: document.getElementById('svelte') ?? document.body
});

export default svelteApp;
