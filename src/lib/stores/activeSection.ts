import { writable } from 'svelte/store';

export const LANDING_SECTION_IDS = ['home', 'problem', 'opportunity', 'solution'] as const;
export type LandingSectionId = (typeof LANDING_SECTION_IDS)[number];

export const activeSectionId = writable<LandingSectionId>('home');

export function parseLandingSectionHash(hash: string): LandingSectionId {
	const id = hash === '' || hash === '#' ? 'home' : hash.replace(/^#/, '');
	return LANDING_SECTION_IDS.includes(id as LandingSectionId) ? (id as LandingSectionId) : 'home';
}
