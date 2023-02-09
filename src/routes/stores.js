import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("ru");
export const webStore = writable("https://ru.pattern.monster");

// export let themeStore;
