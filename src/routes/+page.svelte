<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		FileX,
		TriangleAlert,
		MessageSquareX,
		ClipboardX,
		Eye,
		Users,
		Calendar,
		LayoutDashboard,
		ListChecks,
		Bell,
		User,
		Check,
		Target,
		Layers,
		TrendingUp
	} from '@steeze-ui/lucide-icons';
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
				<div class="text-navy bg-[#dbeafe] rounded-3xl px-4 py-2 w-fit">
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
			<div class="rounded-md border-navy border-2 py-11 px-7 flex-1 min-w-[55%] bg-white mb-20">
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

	<section id="problem" class="scroll-my-28 py-20" aria-labelledby="problem-heading">
		<div class="flex flex-col items-center w-full max-w-[70vw] mx-auto">
			<h1 id="problem-heading" class="text-4xl font-medium text-navy">Problem & Context</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Discharge delays in smaller hospitals stem from systemic coordination failures, not
				individual negligence
			</p>
			<div class="grid grid-cols-3 my-14 gap-6">
				<div class="bg-sky rounded-md px-7 py-6 flex flex-col border-l-4 border-blue">
					<Icon src={FileX} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Fragmented Systems</span>
					<span class="text-gray"
						>Multiple disconnected tools create information silos across departments</span
					>
				</div>
				<div class="bg-sky rounded-md px-7 py-6 flex flex-col border-l-4 border-blue">
					<Icon src={TriangleAlert} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Incomplete Information</span>
					<span class="text-gray"
						>Delayed or missing patient data slows discharge planning decisions</span
					>
				</div>
				<div class="bg-sky rounded-md px-7 py-6 flex flex-col border-l-4 border-blue">
					<Icon src={MessageSquareX} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Poor Coordination</span>
					<span class="text-gray"
						>Limited communication between nurses, physicians, and case managers</span
					>
				</div>
				<div class="bg-sky rounded-md px-7 py-6 flex flex-col border-l-4 border-blue">
					<Icon src={ClipboardX} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Inconsistent Procedures</span>
					<span class="text-gray"
						>No standardized discharge planning workflow across hospital units</span
					>
				</div>
				<div class="bg-sky rounded-md px-7 py-6 flex flex-col border-l-4 border-blue">
					<Icon src={Eye} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Lack of Visibility</span>
					<span class="text-gray">No real-time overview of discharge status and bottlenecks</span>
				</div>
				<div class="bg-sky rounded-md px-7 py-6 flex flex-col border-l-4 border-blue">
					<Icon src={Users} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Unclear Ownership</span>
					<span class="text-gray"
						>No single person fully oversees discharge-related tasks and accountability</span
					>
				</div>
			</div>
			<div class="rounded-lg bg-navy w-full flex flex-col items-center p-8">
				<span class="text-white text-2xl">Key Stakeholders Affected</span>
				<div class="flex flex-row justify-between gap-7 mt-6">
					<div class="text-white bg-blue rounded-3xl px-5 py-3 w-fit">Nurses</div>
					<div class="text-white bg-blue rounded-3xl px-5 py-3 w-fit">Physicians</div>
					<div class="text-white bg-blue rounded-3xl px-5 py-3 w-fit">Case Managers</div>
					<div class="text-white bg-blue rounded-3xl px-5 py-3 w-fit">Hospital Administrators</div>
					<div class="text-white bg-blue rounded-3xl px-5 py-3 w-fit">Patients</div>
					<div class="text-white bg-blue rounded-3xl px-5 py-3 w-fit">Caregivers</div>
				</div>
			</div>
		</div>
	</section>

	<section id="opportunity" class="scroll-mt-28 bg-sky pt-16" aria-labelledby="opportunity-heading">
		<div class="flex flex-col items-center w-full max-w-[70vw] mx-auto">
			<h1 id="opportunity-heading" class="text-4xl font-medium text-navy">Why It Matters</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Discharge planning failures create ripple effects across operations, safety, and patient
				outcomes
			</p>
			<div class="grid grid-cols-2 my-14 gap-6">
				<div class="bg-white rounded-md px-9 py-8 flex flex-row border-l-4 border-red gap-4">
					<div class="bg-red/8 p-3 rounded-md h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-red" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Operational Inefficiency</span>
						<span class="text-red text-3xl my-2">27%</span>
						<span class="text-gray">Average increase in length of stay due to discharge delays</span
						>
					</div>
				</div>
				<div class="bg-white rounded-md px-9 py-8 flex flex-row border-l-4 border-yellow gap-4">
					<div class="bg-yellow/8 p-3 rounded-md h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-yellow" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Patient Safety Concerns</span>
						<span class="text-yellow text-3xl my-2">2.4x</span>
						<span class="text-gray"
							>Higher risk of adverse events with prolonged hospital stays</span
						>
					</div>
				</div>
				<div class="bg-white rounded-md px-9 py-8 flex flex-row border-l-4 border-red gap-4">
					<div class="bg-red/8 p-3 rounded-md h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-red" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Readmission Risk</span>
						<span class="text-red text-3xl my-2">23%</span>
						<span class="text-gray">Of readmissions linked to inadequate discharge planning</span>
					</div>
				</div>
				<div class="bg-white rounded-md px-9 py-8 flex flex-row border-l-4 border-yellow gap-4">
					<div class="bg-yellow/8 p-3 rounded-md h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-yellow" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Staff Burden</span>
						<span class="text-yellow text-3xl my-2">4.2 hrs</span>
						<span class="text-gray">Daily time wasted per staff member on coordination tasks</span>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-navy w-full flex flex-col items-center p-8">
			<span class="text-white text-2xl">Impact Visualization</span>
			<div class="flex flex-row justify-between gap-6 mt-6">
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">$2.8M</span>
					<span class="text-sky">Annual cost of delays</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">156</span>
					<span class="text-sky">Beds occupied unnecessarily</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">18%</span>
					<span class="text-sky">Patient satisfaction drop</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">340</span>
					<span class="text-sky">Staff hours lost weekly</span>
				</div>
			</div>
		</div>
	</section>

	<section id="solution" class="scroll-my-28 bg-white py-16" aria-labelledby="solution-heading">
		<div class="flex flex-col items-center w-full max-w-[70vw] mx-auto">
			<h1 id="solution-heading" class="text-4xl font-medium text-navy">Our Solution</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				A unified digital discharge coordination platform designed for smaller hospital environments
			</p>
			<div
				class="rounded-lg bg-navy w-full flex flex-row justify-between mt-12 items-center p-8 gap-8 bg-gradient-to-r from-navy to-blue"
			>
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">Single Platform</span>
					<span class="text-sky">All discharge data centralized</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">Real-Time</span>
					<span class="text-sky">Instant status updates</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<span class="text-white text-4xl">Role-Based</span>
					<span class="text-sky">Personalized workflows</span>
				</div>
			</div>
			<div class="grid grid-cols-2 my-14 gap-6">
				<div class="bg-sky rounded-lg px-9 py-8 flex flex-row border-2 border-blue gap-4">
					<div class="bg-blue p-3 rounded-md h-fit">
						<Icon src={Calendar} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Estimated Discharge Date Dashboard</span>
						<span class="text-gray"
							>Real-time visibility into projected discharge timelines for all patients</span
						>
						<div class="text-sm bg-white text-blue rounded-2xl py-1 px-3 w-fit">All Staff</div>
					</div>
				</div>
				<div class="bg-sky rounded-lg px-9 py-8 flex flex-row border-2 border-blue gap-4">
					<div class="bg-blue p-3 rounded-md h-fit">
						<Icon src={LayoutDashboard} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Shared Patient Timeline</span>
						<span class="text-gray"
							>Unified view of patient journey from admission to discharge</span
						>
						<div class="text-sm bg-white text-blue rounded-2xl py-1 px-3 w-fit">
							Physicians & Nurses
						</div>
					</div>
				</div>
				<div class="bg-sky rounded-lg px-9 py-8 flex flex-row border-2 border-blue gap-4">
					<div class="bg-blue p-3 rounded-md h-fit">
						<Icon src={ListChecks} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Task Tracker</span>
						<span class="text-gray"
							>Role-specific task assignments for nurses, physicians, and case managers</span
						>
						<div class="text-sm bg-white text-blue rounded-2xl py-1 px-3 w-fit">
							All Disciplines
						</div>
					</div>
				</div>
				<div class="bg-sky rounded-lg px-9 py-8 flex flex-row border-2 border-blue gap-4">
					<div class="bg-blue p-3 rounded-md h-fit">
						<Icon src={Bell} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Smart Alert System</span>
						<span class="text-gray"
							>Priority notifications for critical discharge milestones and blockers</span
						>
						<div class="text-sm bg-white text-blue rounded-2xl py-1 px-3 w-fit">Case Managers</div>
					</div>
				</div>
				<div class="bg-sky rounded-lg px-9 py-8 flex flex-row border-2 border-blue gap-4">
					<div class="bg-blue p-3 rounded-md h-fit">
						<Icon src={User} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Role-Based Views</span>
						<span class="text-gray"
							>Customized interfaces for different stakeholder perspectives</span
						>
						<div class="text-sm bg-white text-blue rounded-2xl py-1 px-3 w-fit">Administrators</div>
					</div>
				</div>
			</div>
			<div class="text-navy text-4xl font-medium">Wireframe</div>
			<div class="rounded-lg bg-navy w-full flex flex-col items-center p-8">
				<span class="text-white text-2xl font-medium">System Benefits</span>
				<div class="flex flex-row justify-between gap-7 mt-6">
					<div class="text-white flex flex-col items-center px-5 py-3 gap-2">
						<Icon src={Check} class="h-8 w-8 [stroke-width:2]" />
						<span>Improved Visibility</span>
						<span class="text-sky text-sm">Everyone sees the same real-time data</span>
					</div>
					<div class="text-white flex flex-col items-center px-5 py-3 gap-2">
						<Icon src={Check} class="h-8 w-8 [stroke-width:2]" />
						<span>Better Coordination</span>
						<span class="text-sky text-sm">Clear task ownership and handoffs</span>
					</div>
					<div class="text-white flex flex-col items-center px-5 py-3 gap-2">
						<Icon src={Check} class="h-8 w-8 [stroke-width:2]" />
						<span>Workflow Standardization</span>
						<span class="text-sky text-sm">Consistent processes across units</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		id="strategy"
		class="scroll-my-28 py-16 bg-gradient-to-b from-sky to-white"
		aria-labelledby="strategy-heading"
	>
		<div class="flex flex-col items-center w-full max-w-[70vw] mx-auto">
			<h1 id="strategy-heading" class="text-4xl font-medium text-navy">Strategic Analysis</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Value creation through targeted process improvement and competitive positioning
			</p>
			<div class="mt-12 grid grid-cols-2 gap-8">
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 flex flex-col">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Target} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Value Creation</span>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 rounded-full bg-blue text-white flex justify-center">1</div>
						<div class="flex flex-col">
							<span class="text-navy">Operational Efficiency</span>
							<span class="text-gray">Reduce coordination overhead and administrative burden</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 rounded-full bg-blue text-white flex justify-center">2</div>
						<div class="flex flex-col">
							<span class="text-navy">Clinical Outcomes</span>
							<span class="text-gray">Improve patient safety and reduce readmission rates</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 rounded-full bg-blue text-white flex justify-center">3</div>
						<div class="flex flex-col">
							<span class="text-navy">Resource Utilization</span>
							<span class="text-gray">Free up beds faster and optimize capacity</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 rounded-full bg-blue text-white flex justify-center">4</div>
						<div class="flex flex-col">
							<span class="text-navy">Staff Satisfaction</span>
							<span class="text-gray">Reduce frustration from manual coordination</span>
						</div>
					</div>
				</div>
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 grid grid-cols-1">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Layers} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Value Chain</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky">
						<span class="text-blue">Patient Admission</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Capture baseline discharge data</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky">
						<span class="text-blue">Clinical Assessment</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Document barriers and needs</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky">
						<span class="text-blue">Care Planning</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Set EDD and assign tasks</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky">
						<span class="text-blue">Daily Coordination</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Track progress and escalate issues</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky">
						<span class="text-blue">Discharge Execution</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Complete final requirements</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky">
						<span class="text-blue">Post-Discharge</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Monitor transitions and outcomes</span>
					</div>
				</div>
			</div>
			<div class="rounded-2xl p-8 bg-navy flex flex-col mt-12 w-full">
				<div class="gap-3 flex flex-row">
					<Icon src={TrendingUp} class="h-8 w-8 text-white" />
					<span class="text-white text-2xl font-medium">Competitive Positioning</span>
				</div>
				<div class="grid grid-cols-2 mt-6">
					<div class="flex flex-col">
						<span class="mb-4 text-white text-xl font-medium">Our Solution</span>
						<ul class="list-disc list-inside marker:text-green text-white space-y-2">
							<li>Affordable for smaller hospitals</li>
							<li>Easy to implement and use</li>
							<li>Modular and adaptable</li>
							<li>Focused on discharge planning</li>
						</ul>
					</div>
					<div class="flex flex-col">
						<span class="mb-4 text-white text-xl font-medium">Existing Systems</span>
						<ul class="list-disc list-inside marker:text-red text-white space-y-2">
							<li>Expensive enterprise solutions</li>
							<li>Complex implementation</li>
							<li>One-size-fits-all approach</li>
							<li>Broad patient flow, not discharge-focused</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
