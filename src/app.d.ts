/// <reference types="@sveltejs/kit" />
import type M from 'materialize-css';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare module 'dayjs/locale/ko.js';
declare module 'materialize-css/dist/js/materialize.js';
declare global {
	interface Window {
		M: M; //materialize-css auto init
	}
}
