<script lang="ts">
	import SectionScrollSpy from '$lib/components/SectionScrollSpy.svelte';
	import HomeImage from '$lib/assets/HomeImage.png';
</script>

<SectionScrollSpy />

<main class="flex flex-col">
	<section
		id="home"
		class="scroll-mt-28 px-6 py-7 bg-gradient-to-b from-white to-sky"
		aria-labelledby="home-heading"
	>
		<div class="flex flex-row justify-between gap-50">
			<div class="flex-1 flex flex-col gap-6">
				<div class="text-navy bg-sky rounded-3xl px-4 py-2 w-fit">
					Information Systems People Project 2026
				</div>
				<h1 id="home-heading" class="text-5xl font-bold text-navy">FlowState:</h1>
				<h2 class="text-3xl font-semibold text-navy">
					Improved Hospital Discharge Planning Through Integrated Systems
				</h2>
				<p class="mt-4 text-xl text-gray">
					A comprehensive information systems solution addressing fragmented discharge workflows in
					smaller and community hospitals
				</p>
				<p class="mt-4 text-gray">
					This is a single long page: scroll to explore, or follow the in-page links for each
					section.
				</p>
			</div>
			<div class="rounded-md border-navy border-2 py-11 px-7 flex-1 min-w-[55%] bg-white">
				<img src={HomeImage} alt="People using product" class="h-auto w-full" />
				<div class="grid grid-cols-3 mt-8 gap-22">
					<div class="rounded-md bg-sky flex flex-col items-center p-3 w-full">
						<span class="text-blue text-2xl">32%</span>
						<span class="text-gray min-w-max whitespace-nowrap">Faster Discharge</span>
					</div>
					<div class="rounded-md bg-sky flex flex-col items-center p-3 w-full">
						<span class="text-blue text-2xl">+24%</span>
						<span class="text-gray min-w-max whitespace-nowrap">Increased Coordination</span>
					</div>
					<div class="rounded-md bg-sky flex flex-col items-center p-3 w-full">
						<span class="text-blue text-2xl">-18%</span>
						<span class="text-gray min-w-max whitespace-nowrap">Readmission Rate</span>
					</div>
				</div>
			</div>
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
				Placeholder section to add vertical space and demonstrate smooth scrolling between anchors.
				Replace with your real workflow steps, checklists, or documentation.
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
