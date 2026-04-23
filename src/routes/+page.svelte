<script lang="ts">
	import SectionScrollSpy from '$lib/components/SectionScrollSpy.svelte';
</script>

<SectionScrollSpy />

<main class="flex flex-col">
	<section
		id="home"
		class="scroll-mt-28 px-6 py-16 md:py-24"
		aria-labelledby="home-heading"
	>
		<div class="mx-auto max-w-3xl">
			<h1 id="home-heading" class="text-3xl font-semibold text-navy md:text-4xl">
				Discharge planning
			</h1>
			<p class="mt-4 text-lg text-gray">
				Welcome to the discharge planning workspace. Use the navigation above to jump to sections on
				this page.
			</p>
			<p class="mt-4 text-gray">
				This is a single long page: scroll to explore, or follow the in-page links for each
				section.
			</p>
		</div>
	</section>

	<section
		id="problem"
		class="scroll-mt-28 border-t border-navy/10 bg-sky/30 px-6 py-16 md:py-24"
		aria-labelledby="problem-heading"
	>
		<div class="mx-auto max-w-3xl">
			<h2 id="problem-heading" class="text-2xl font-semibold text-navy md:text-3xl">Problem</h2>
			<p class="mt-4 max-w-prose text-gray">
				Define the discharge planning problem or case details in this section—criteria, timeline,
				stakeholders, and constraints for a safe transition of care.
			</p>
			<p class="mt-4 max-w-prose text-gray">
				Add forms, summaries, or embedded tools here as the application grows.
			</p>
		</div>
	</section>

	<section id="process" class="scroll-mt-28 px-6 py-16 md:py-24" aria-labelledby="process-heading">
		<div class="mx-auto max-w-3xl">
			<h2 id="process-heading" class="text-2xl font-semibold text-navy md:text-3xl">Process</h2>
			<p class="mt-4 max-w-prose text-gray">
				Placeholder section to add vertical space and demonstrate smooth scrolling between
				anchors. Replace with your real workflow steps, checklists, or documentation.
			</p>
			<ul class="mt-6 list-inside list-disc space-y-2 text-gray">
				<li>Assessment and eligibility</li>
				<li>Care coordination</li>
				<li>Discharge documentation</li>
				<li>Follow-up and handoff</li>
			</ul>
		</div>
	</section>
</main>
