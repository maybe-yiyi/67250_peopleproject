<script lang="ts">
	import { revealView } from '$lib/actions/revealView';
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
		TrendingUp,
		Building,
		Globe,
		CircleCheckBig,
		Brain,
		Network
	} from '@steeze-ui/lucide-icons';
	import SectionScrollSpy from '$lib/components/SectionScrollSpy.svelte';
	import SolutionWireframe from '$lib/components/SolutionWireframe.svelte';
	import SlotNumber from '$lib/components/SlotNumber.svelte';
	import HomeImage from '$lib/assets/HomeImage.png';
	import AddisonImage from '$lib/assets/addison.jpg';
	import SunnyImage from '$lib/assets/sunny.jpg';
	import IsabellaImage from '$lib/assets/isabella.jpg';
	import YiyoungImage from '$lib/assets/yiyoung.jpg';

	type ReferenceItem =
		| { kind: 'text'; text: string }
		| { kind: 'titleAndSource'; title: string; beforeUrl: string; url: string; afterUrl: string };

	const references: ReferenceItem[] = [
		{
			kind: 'text',
			text: 'Coleman, E. A., et al. (2023). "Discharge Planning and Transitions of Care in Community Hospitals." Journal of Hospital Medicine, 18(4), 234-245.'
		},
		{
			kind: 'text',
			text: 'Ajami, Sima, and Razieh Arab-Chadegani. "Barriers to implement Electronic Health Records (EHRs)." Materia socio-medica vol. 25,3 (2013): 213-5. doi:10.5455/msm.2013.25.213-215.'
		},
		{
			kind: 'text',
			text: 'Hunter, Mehreen et al. "Analysis of patient flow and barriers to timely discharge from general medical wards at a tertiary academic hospital in Cape Town, South Africa." BMC health services research vol. 24,1 287. 6 Mar. 2024, doi:10.1186/s12913-024-10806-6.'
		},
		{
			kind: 'text',
			text: 'Wiens, Matthew & Racheal, Abodunrin & Grande, David & Cooper, Hannah & Iseal, Sheed. (2025). Barriers to Effective Post-discharge Care in Resource-limited Settings.'
		},
		{
			kind: 'titleAndSource',
			title:
				'Sadel J, et al. Optimizing Hospital Discharge Planning: Empirical Insights and Requirements of AI-Based Technologies From an Explorative Mixed Methods Field Study.',
			beforeUrl: 'JMIR Form Res 2026;10:e81824. ',
			url: 'https://formative.jmir.org/2026/1/e81824',
			afterUrl: ' DOI: 10.2196/81824.'
		}
	];
</script>

<SectionScrollSpy />

<main class="flex flex-col">
	<section
		id="home"
		class="scroll-mt-28 px-6 py-7 bg-gradient-to-b from-white to-sky"
		aria-labelledby="home-heading"
	>
		<div class="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
			<div class="min-w-0 flex-1 flex flex-col gap-6" use:revealView>
				<div class="text-navy bg-[#dbeafe] rounded-full px-4 py-2 w-fit">
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
			<div
				use:revealView={{ delay: 100 }}
				class="min-w-0 w-full flex-1 rounded-2xl border-navy border-2 py-8 px-5 mb-20 bg-white shadow-md sm:py-11 sm:px-7 lg:min-w-[55%]"
			>
				<img src={HomeImage} alt="People using product" class="h-auto w-full" />
				<div class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
					<div class="rounded-lg bg-sky flex flex-col items-center p-3 w-full shadow-md">
						<SlotNumber value="32%" class="text-blue text-2xl" />
						<span class="text-gray min-w-max whitespace-nowrap">Faster Discharge</span>
					</div>
					<div class="rounded-lg bg-sky flex flex-col items-center p-3 w-full shadow-md">
						<SlotNumber value="+24%" class="text-blue text-2xl" />
						<span class="text-gray min-w-max whitespace-nowrap">Increased Coordination</span>
					</div>
					<div class="rounded-lg bg-sky flex flex-col items-center p-3 w-full shadow-md">
						<SlotNumber value="-18%" class="text-blue text-2xl" />
						<span class="text-gray min-w-max whitespace-nowrap">Readmission Rate</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="problem" use:revealView class="scroll-my-28 py-20" aria-labelledby="problem-heading">
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="problem-heading" class="text-4xl font-medium text-navy">Problem and Context</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Discharge delays in smaller hospitals stem from systemic coordination failures, not
				individual negligence
			</p>
			<div class="my-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<div class="bg-sky rounded-2xl px-7 py-6 flex flex-col border-l-4 border-blue shadow-md">
					<Icon src={FileX} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Fragmented Systems</span>
					<span class="text-gray"
						>Multiple disconnected tools create information silos across departments</span
					>
				</div>
				<div class="bg-sky rounded-2xl px-7 py-6 flex flex-col border-l-4 border-blue shadow-md">
					<Icon src={TriangleAlert} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Incomplete Information</span>
					<span class="text-gray"
						>Delayed or missing patient data slows discharge planning decisions</span
					>
				</div>
				<div class="bg-sky rounded-2xl px-7 py-6 flex flex-col border-l-4 border-blue shadow-md">
					<Icon src={MessageSquareX} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Poor Coordination</span>
					<span class="text-gray"
						>Limited communication between nurses, physicians, and case managers</span
					>
				</div>
				<div class="bg-sky rounded-2xl px-7 py-6 flex flex-col border-l-4 border-blue shadow-md">
					<Icon src={ClipboardX} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Inconsistent Procedures</span>
					<span class="text-gray"
						>No standardized discharge planning workflow across hospital units</span
					>
				</div>
				<div class="bg-sky rounded-2xl px-7 py-6 flex flex-col border-l-4 border-blue shadow-md">
					<Icon src={Eye} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Lack of Visibility</span>
					<span class="text-gray">No real-time overview of discharge status and bottlenecks</span>
				</div>
				<div class="bg-sky rounded-2xl px-7 py-6 flex flex-col border-l-4 border-blue shadow-md">
					<Icon src={Users} class="h-10 w-10 [stroke-width:2] text-blue mb-2" />
					<span class="text-navy text-lg my-2">Unclear Ownership</span>
					<span class="text-gray"
						>No single person fully oversees discharge-related tasks and accountability</span
					>
				</div>
			</div>
			<div class="rounded-2xl bg-navy w-full flex flex-col items-center p-8">
				<span class="text-white text-2xl">Key Stakeholders Affected</span>
				<div
					class="mt-6 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-4 md:gap-7"
				>
					<div class="text-white bg-blue rounded-full px-5 py-3 w-fit">Nurses</div>
					<div class="text-white bg-blue rounded-full px-5 py-3 w-fit">Physicians</div>
					<div class="text-white bg-blue rounded-full px-5 py-3 w-fit">Case Managers</div>
					<div class="text-white bg-blue rounded-full px-5 py-3 w-fit">Hospital Administrators</div>
					<div class="text-white bg-blue rounded-full px-5 py-3 w-fit">Patients</div>
					<div class="text-white bg-blue rounded-full px-5 py-3 w-fit">Caregivers</div>
				</div>
			</div>
		</div>
	</section>

	<section
		id="opportunity"
		use:revealView
		class="scroll-mt-28 bg-sky pt-16"
		aria-labelledby="opportunity-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="opportunity-heading" class="text-4xl font-medium text-navy">Why It Matters</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Discharge planning failures create ripple effects across operations, safety, and patient
				outcomes
			</p>
			<div class="my-14 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-row border-l-4 border-red gap-4 shadow-md"
				>
					<div class="bg-red/8 p-3 rounded-lg h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-red" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Operational Inefficiency</span>
						<SlotNumber value="27%" class="text-red text-3xl my-2" />
						<span class="text-gray">Average increase in length of stay due to discharge delays</span
						>
					</div>
				</div>
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-row border-l-4 border-yellow gap-4 shadow-md"
				>
					<div class="bg-yellow/8 p-3 rounded-lg h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-yellow" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Patient Safety Concerns</span>
						<SlotNumber value="2.4x" class="text-yellow text-3xl my-2" />
						<span class="text-gray"
							>Higher risk of adverse events with prolonged hospital stays</span
						>
					</div>
				</div>
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-row border-l-4 border-red gap-4 shadow-md"
				>
					<div class="bg-red/8 p-3 rounded-lg h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-red" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Readmission Risk</span>
						<SlotNumber value="23%" class="text-red text-3xl my-2" />
						<span class="text-gray">Of readmissions linked to inadequate discharge planning</span>
					</div>
				</div>
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-row border-l-4 border-yellow gap-4 shadow-md"
				>
					<div class="bg-yellow/8 p-3 rounded-lg h-fit">
						<Icon src={FileX} class="h-8 w-8 [stroke-width:2] text-yellow" />
					</div>
					<div class="flex flex-col">
						<span class="text-navy text-lg">Staff Burden</span>
						<SlotNumber value="4.2 hrs" class="text-yellow text-3xl my-2" />
						<span class="text-gray">Daily time wasted per staff member on coordination tasks</span>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-navy w-full flex flex-col items-center p-6 sm:p-8">
			<span class="text-center text-white text-2xl">Impact Visualization</span>
			<div
				class="mt-6 flex w-full max-w-4xl flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center"
			>
				<div class="flex flex-col gap-2 items-center">
					<SlotNumber value="$2.8M" class="text-white text-4xl" />
					<span class="text-sky">Annual cost of delays</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<SlotNumber value="156" class="text-white text-4xl" />
					<span class="text-sky">Beds occupied unnecessarily</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<SlotNumber value="18%" class="text-white text-4xl" />
					<span class="text-sky">Patient satisfaction drop</span>
				</div>
				<div class="flex flex-col gap-2 items-center">
					<SlotNumber value="340" class="text-white text-4xl" />
					<span class="text-sky">Staff hours lost weekly</span>
				</div>
			</div>
		</div>
	</section>

	<section
		id="solution"
		use:revealView
		class="scroll-my-28 bg-white py-16"
		aria-labelledby="solution-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="solution-heading" class="text-4xl font-medium text-navy">Our Solution</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				A unified digital discharge coordination platform designed for smaller hospital environments
			</p>
			<div
				class="mt-12 flex w-full flex-col items-stretch gap-6 rounded-2xl bg-navy bg-gradient-to-r from-navy to-blue p-6 sm:items-center sm:justify-between sm:p-8 md:flex-row"
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
			<div class="my-14 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div
					class="bg-sky rounded-2xl px-9 py-8 flex flex-row border-2 border-blue gap-4 shadow-md"
				>
					<div class="bg-blue p-3 rounded-lg h-fit">
						<Icon src={Calendar} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Estimated Discharge Date Dashboard</span>
						<span class="text-gray"
							>Real-time visibility into projected discharge timelines for all patients</span
						>
						<div class="text-sm bg-white text-blue rounded-lg py-1 px-3 w-fit shadow-md">
							All Staff
						</div>
					</div>
				</div>
				<div
					class="bg-sky rounded-2xl px-9 py-8 flex flex-row border-2 border-blue gap-4 shadow-md"
				>
					<div class="bg-blue p-3 rounded-lg h-fit">
						<Icon src={LayoutDashboard} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Shared Patient Timeline</span>
						<span class="text-gray"
							>Unified view of patient journey from admission to discharge</span
						>
						<div class="text-sm bg-white text-blue rounded-lg py-1 px-3 w-fit shadow-md">
							Physicians and Nurses
						</div>
					</div>
				</div>
				<div
					class="bg-sky rounded-2xl px-9 py-8 flex flex-row border-2 border-blue gap-4 shadow-md"
				>
					<div class="bg-blue p-3 rounded-lg h-fit">
						<Icon src={ListChecks} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Task Tracker</span>
						<span class="text-gray"
							>Role-specific task assignments for nurses, physicians, and case managers</span
						>
						<div class="text-sm bg-white text-blue rounded-lg py-1 px-3 w-fit shadow-md">
							All Disciplines
						</div>
					</div>
				</div>
				<div
					class="bg-sky rounded-2xl px-9 py-8 flex flex-row border-2 border-blue gap-4 shadow-md"
				>
					<div class="bg-blue p-3 rounded-lg h-fit">
						<Icon src={Bell} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Smart Alert System</span>
						<span class="text-gray"
							>Priority notifications for critical discharge milestones and blockers</span
						>
						<div class="text-sm bg-white text-blue rounded-lg py-1 px-3 w-fit shadow-md">
							Case Managers
						</div>
					</div>
				</div>
				<div
					class="bg-sky rounded-2xl px-9 py-8 flex flex-row border-2 border-blue gap-4 shadow-md"
				>
					<div class="bg-blue p-3 rounded-lg h-fit">
						<Icon src={User} class="h-8 w-8 [stroke-width:2] text-white" />
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-navy text-lg">Role-Based Views</span>
						<span class="text-gray"
							>Customized interfaces for different stakeholder perspectives</span
						>
						<div class="text-sm bg-white text-blue rounded-lg py-1 px-3 w-fit shadow-md">
							Administrators
						</div>
					</div>
				</div>
			</div>
			<div class="mt-14 flex w-full flex-col items-center gap-4">
				<h2 class="text-4xl font-medium text-navy">Wireframe</h2>
				<div class="w-full">
					<SolutionWireframe />
				</div>
			</div>
			<div class="mt-14 mt-12 flex w-full flex-col items-center rounded-2xl bg-navy p-6 sm:p-8">
				<span class="text-center text-white text-2xl font-medium">System Benefits</span>
				<div
					class="mt-6 flex w-full max-w-4xl flex-col items-stretch gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-7"
				>
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
		use:revealView
		class="scroll-my-28 py-16 bg-gradient-to-b from-sky to-white"
		aria-labelledby="strategy-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="strategy-heading" class="text-4xl font-medium text-navy">Strategic Analysis</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Value creation through targeted process improvement and competitive positioning
			</p>
			<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 flex flex-col bg-white shadow-sm">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Target} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Business Strategy</span>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							1
						</div>
						<div class="flex flex-col">
							<span class="text-navy">Affordable</span>
							<span class="text-gray"
								>Smaller, specialized software bundle for smaller hospitals</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							2
						</div>
						<div class="flex flex-col">
							<span class="text-navy">Modular</span>
							<span class="text-gray">Able to integrate into existing legacy systems </span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							3
						</div>
						<div class="flex flex-col">
							<span class="text-navy">Lightweight</span>
							<span class="text-gray">Easy to use and flexible options for integration </span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							4
						</div>
						<div class="flex flex-col">
							<span class="text-navy">Holistic</span>
							<span class="text-gray">Provides transparency and trust with patient view</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							5
						</div>
						<div class="flex flex-col">
							<span class="text-navy">AI-powered</span>
							<span class="text-gray"
								>Allows for personalized, actionable insights and faster decision-making</span
							>
						</div>
					</div>
				</div>
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 flex flex-col bg-white shadow-sm">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Layers} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Business Model</span>
					</div>
					<ul class="list-disc list-inside text-gray marker:text-red space-y-4">
						<li>Primary Customer: smaller, under-resourced hospitals</li>
						<li>
							Partnerships with common legacy systems in target hospitals, such as MEDITECH,
							Practice Fusion, Athena One
						</li>
						<li>24/7 Customer Support and support in implementation process</li>
						<li>Training, onboarding, pilot programs, internally driven adoption</li>
						<li>
							Sold as Software as a Service (SaaS), owned by us but hospitals use and integrate the
							service
						</li>
						<li>Flat pricing per patient</li>
					</ul>
				</div>
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 grid grid-cols-1 bg-white shadow-sm">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Layers} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Value Chain</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Patient Admission</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Capture baseline discharge data</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Clinical Assessment</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Document barriers and needs</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Care Planning</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Set EDD and assign tasks</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Daily Coordination</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Track progress and escalate issues</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-[#c0dbff] shadow-md">
						<span class="text-blue">Discharge Execution</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Complete final requirements</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Post-Discharge</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray">Monitor transitions and outcomes</span>
					</div>
				</div>
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 flex flex-col bg-white shadow-sm">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Target} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium"
							>Value Creation / Organizational Effectiveness</span
						>
					</div>
					<ul class="list-disc list-inside text-gray marker:text-red space-y-4">
						<li>
							Using AI for predictive, personalization, and summary → faster-decision making, making
							data assets actionable
						</li>
						<li>Data network effects over time (predictions improve with more data)</li>
						<li>
							Usable for clinicians, patients → centralized/shared source of information, no
							multiple views which reduces room for error, miscommunication, duplication,
							conflicting priorities
						</li>
						<li>
							Process standardization: instead of relying on memory or inconsistent habits, the
							system enforces, required steps, sequencing of tasks, accountability) → replicable,
							repeatable process also standardizes care quality
						</li>
					</ul>
				</div>
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 flex flex-col bg-white shadow-sm">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Target} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Long-term Growth</span>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							1
						</div>
						<div class="flex flex-col">
							<span class="text-navy">Sustainability</span>
							<ol class="list-decimal list-inside space-y-2 text-gray">
								<li>Low cost due to narrower scope</li>
								<li>Integration or standalone strategy</li>
								<li>
									Embedded in workflows, high retention once adopted → barrier may be workflow
									disruption, hence the heavily supported implementation process as part of our
									model
								</li>
							</ol>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<div class="w-6 h-6 shrink-0 rounded-full bg-blue text-white flex justify-center">
							2
						</div>
						<div class="flex flex-col">
							<span class="text-navy">Modular</span>
							<ol class="list-decimal list-inside space-y-2 text-gray">
								<li>
									Horizontal expansion (expanding to other hospitals, replicable, similar discharge
									logic)
								</li>
								<li>Opportunity to go white label</li>
								<li>Vertical expansion opportunity to readmission and admissions</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 grid grid-cols-1 bg-white shadow-sm">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Layers} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Who Benefits and Why</span>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Clinicians</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray"
							>reduces burnout and administrative/cognitive load, easy to track patient to patient
							with centralized dashboard improves communication between departments, puts entire
							care team on same page</span
						>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Patients</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray"
							>reduces length of hospital stay which in turn reduces hospital bills, transparency
							keeps them informed throughout process, increases patient autonomy/decision-making</span
						>
					</div>
					<div class="flex flex-row gap-2 rounded-lg p-3 bg-sky shadow-md">
						<span class="text-blue">Society</span>
						<span class="text-gray-400">→</span>
						<span class="text-gray"
							>more people can get the care they need, optimizes hospital capacity management,
							better quality care, more affordable care, more efficient healthcare system</span
						>
					</div>
				</div>
			</div>
			<div class="mt-12 flex w-full flex-col rounded-2xl bg-navy p-6 sm:p-8">
				<div class="flex flex-row items-start gap-3 sm:items-center">
					<Icon src={TrendingUp} class="h-8 w-8 shrink-0 text-white" />
					<span class="text-lg font-medium text-white sm:text-2xl">Competitive Positioning</span>
				</div>
				<div class="grid grid-cols-1 mt-6">
					<div class="flex flex-col">
						<span class="mb-4 text-white text-xl font-medium">Our Solution</span>
						<ul class="list-disc list-inside marker:text-green text-white space-y-2">
							<li>
								Specificity of scope (discharge) reduces costs, addresses costs and time constraints
							</li>
							<li>Embedded in workflows --> high switching costs and retention once adopted</li>
							<li>
								Smaller, specialized solution is more realistic and economical compared to the
								larger, and costly, software bundle larger systems offer like Epic Systems or Cerner
							</li>
							<li>Reducing coordination costs (“transaction cost theory”)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="social-theory"
		use:revealView
		class="scroll-my-28 py-16 bg-white"
		aria-labelledby="social-theory-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="social-theory-heading" class="text-4xl font-medium text-navy">
				Application of Social Theories
			</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Understanding the human and organizational dynamics behind discharge planning failures
			</p>
			<div
				class="p-8 border-2 border-blue rounded-2xl gap-4 grid grid-cols-1 bg-white mt-16 w-full shadow-sm"
			>
				<div class="flex flex-row mb-2 gap-3 items-center">
					<div class="p-4 bg-sky rounded-lg shadow-md">
						<Icon src={Brain} class="h-8 w-8 text-blue" />
					</div>
					<span class="text-navy text-2xl font-medium">Bounded Rationality</span>
				</div>
				<div class="gap-2 flex flex-col">
					<span class="text-navy font-bold">Core Concept</span>
					<span class="text-xl text-gray"
						>People make "good enough" decisions based on limited time, information, and cognitive
						capacity</span
					>
				</div>
				<div class="bg-red/8 rounded-2xl px-7 py-6 flex flex-row border-l-4 border-red gap-4">
					<div class="flex flex-col">
						<span class="text-navy font-bold">The Problem (Without Technology)</span>
						<span class="text-gray"
							>Even though research recommends setting an Estimated Discharge Date (EDD) early in
							the process, many hospitals fail to do this due to limited time, information, and
							cognitive capacity. Huddles to discuss discharge status don't help — they're brief,
							retrospective, and rely on whoever happens to have the most current information in the
							room, which is rarely complete. Staff are forced to make "good enough" decisions based
							on incomplete pictures of where a patient actually stands.</span
						>
					</div>
				</div>
				<div class="bg-green/8 rounded-2xl px-7 py-6 flex flex-row border-l-4 border-green gap-4">
					<div class="flex flex-col">
						<span class="text-navy font-bold">How FlowState Addresses This</span>
						<span class="text-gray"
							>FlowState's predictive assistant moves from "good enough" to "optimal" by aggregating
							task-level data across all departments in real time and surfacing a data-informed EDD
							early — reducing the cognitive load on any single individual and replacing
							intuition-based estimates with a shared, continuously updated forecast.</span
						>
					</div>
				</div>
			</div>
			<div
				class="p-8 border-2 border-blue rounded-2xl gap-4 grid grid-cols-1 bg-white mt-16 w-full shadow-sm"
			>
				<div class="flex flex-row mb-2 gap-3 items-center">
					<div class="p-4 bg-sky rounded-lg shadow-md">
						<Icon src={Network} class="h-8 w-8 text-blue" />
					</div>
					<span class="text-navy text-2xl font-medium">Socio-Technical Systems Theory</span>
				</div>
				<div class="gap-2 flex flex-col">
					<span class="text-navy font-bold">Core Concept</span>
					<span class="text-xl text-gray"
						>Technical and social subsystems must be jointly optimized for effective performance</span
					>
				</div>
				<div class="bg-red/8 rounded-2xl px-7 py-6 flex flex-row border-l-4 border-red gap-4">
					<div class="flex flex-col">
						<span class="text-navy font-bold">The Problem (Without Technology)</span>
						<span class="text-gray"
							>Two main social systems are in play: collaboration between workers in the hospital
							and communication to patients. Without technology, workers between departments tend to
							have "huddle" meetings daily where they spend limited time — just a few minutes — to
							figure out what the bottlenecks are and where the patient is in the flow. Without
							technology, the patient is left in the dark until discussions with their nurse or
							physician — and even then, the information is secondhand, filtered, and often out of
							date.</span
						>
					</div>
				</div>
				<div class="bg-green/8 rounded-2xl px-7 py-6 flex flex-row border-l-4 border-green gap-4">
					<div class="flex flex-col">
						<span class="text-navy font-bold">How FlowState Addresses This</span>
						<span class="text-gray"
							>With FlowState, huddles become more targeted and productive: instead of using that
							time to surface information, teams arrive already oriented to the critical path and
							can focus on decision-making and problem-solving. FlowState's patient-facing UI gives
							patients a simplified, real-time view of their discharge checklist — not clinical
							detail, but enough to answer the question they actually have: where do things stand,
							and what comes next?</span
						>
					</div>
				</div>
			</div>
			<div
				class="mt-16 w-full rounded-2xl bg-navy p-8 shadow-md"
				aria-label="Key theoretical insights"
			>
				<h2 class="text-center text-2xl font-medium text-white">Key Theoretical Insights</h2>
				<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="flex flex-col gap-2 rounded-xl bg-blue p-5">
						<h3 class="text-lg font-medium text-white">Cognitive load reduction</h3>
						<p class="text-sm leading-relaxed text-sky">
							By centralizing task-level data and surfacing data-informed EDDs automatically,
							FlowState removes the burden on individual staff to mentally track and synthesize
							discharge status across departments.
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-blue p-5">
						<h3 class="text-lg font-medium text-white">From reactive to proactive</h3>
						<p class="text-sm leading-relaxed text-sky">
							Huddles shift from information gathering to strategic problem-solving when staff
							arrive already oriented to the critical path, turning retrospective check-ins into
							forward-looking action.
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-blue p-5">
						<h3 class="text-lg font-medium text-white">Visibility of system status</h3>
						<p class="text-sm leading-relaxed text-sky">
							Without technology, patients lack persistent, on-demand access to their discharge
							status. When people cannot see what is happening or why, unexplained delays create
							anxiety and erode trust.
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-blue p-5">
						<h3 class="text-lg font-medium text-white">Shared mental models</h3>
						<p class="text-sm leading-relaxed text-sky">
							A continuously updated, shared forecast replaces fragmented intuition-based estimates,
							so clinical staff and patients work from the same source of truth.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="impact"
		use:revealView
		class="scroll-my-28 py-16 bg-sky"
		aria-labelledby="impact-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="impact-heading" class="text-4xl font-medium text-navy">Expected Impact</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				Transforming hospital operations and improving patient outcomes
			</p>
			<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
				<div class="p-8 border-2 border-blue rounded-2xl gap-4 flex flex-col bg-white shadow-md">
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Building} class="h-8 w-8 text-blue" />
						<span class="text-navy text-2xl font-medium">Organizational Impact</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Improved Coordination</span>
							<span class="text-gray"
								>All stakeholders have shared visibility into discharge status and pending tasks</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Faster Discharge Processing</span>
							<span class="text-gray"
								>Reduced delays through proactive task management and bottleneck identification</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Better Discharge Readiness</span>
							<span class="text-gray"
								>Clear visibility into patient readiness prevents last-minute scrambling</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Reduced Administrative Burden</span>
							<span class="text-gray"
								>Less time spent on manual coordination and status updates</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Data-Driven Insights</span>
							<span class="text-gray"
								>Analytics on discharge patterns help identify systemic improvements</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Standardized Processes</span>
							<span class="text-gray"
								>Consistent workflows across units reduce variation and errors</span
							>
						</div>
					</div>
				</div>
				<div
					class="p-8 border-2 border-[#059669] rounded-2xl gap-4 flex flex-col bg-white shadow-md"
				>
					<div class="flex flex-row mb-2 gap-3">
						<Icon src={Globe} class="h-8 w-8 text-[#059669]" />
						<span class="text-navy text-2xl font-medium">Societal Impact</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Better Patient Transitions</span>
							<span class="text-gray"
								>Smoother handoffs to home care, rehab facilities, or outpatient services</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Lower Readmission Risk</span>
							<span class="text-gray"
								>Proper discharge planning reduces preventable hospital readmissions</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">More Equitable Care Processes</span>
							<span class="text-gray"
								>Standardized workflows ensure all patients receive consistent discharge support</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Improved Patient Satisfaction</span>
							<span class="text-gray"
								>Clear communication and timely discharges enhance patient experience</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Reduced Healthcare Costs</span>
							<span class="text-gray"
								>Shorter stays and fewer readmissions lower overall healthcare expenditure</span
							>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-green" />
						<div class="flex flex-col">
							<span class="text-navy">Community Health Benefits</span>
							<span class="text-gray"
								>Better aftercare coordination improves long-term health outcomes</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="team"
		use:revealView
		class="scroll-my-28 py-16 bg-white"
		aria-labelledby="team-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="team-heading" class="text-4xl font-medium text-navy">Our Team.</h1>
			<p class="mt-4 max-w-prose text-center text-gray">
				A multidisciplinary team approach to comprehensive systems analysis
			</p>
			<div class="mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-col border-l-4 border-[#2563eb] gap-4 shadow-sm"
				>
					<div class="flex flex-row gap-4">
						<img src={AddisonImage} alt="addison" class="h-16 w-16 rounded-full" />
						<div class="flex flex-col gap-1">
							<span class="text-xl font-medium text-navy">Addison Cho</span>
							<span class="text-gray">Product and Project Lead</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#2563eb]" />
						<span class="text-gray">Product design and research</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#2563eb]" />
						<span class="text-gray">Overall project coordination</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#2563eb]" />
						<span class="text-gray">Social theory application</span>
					</div>
				</div>
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-col border-l-4 border-[#7c3aed] gap-4 shadow-sm"
				>
					<div class="flex flex-row gap-4">
						<img src={SunnyImage} alt="sunny" class="h-16 w-16 rounded-full" />
						<div class="flex flex-col gap-1">
							<span class="text-xl font-medium text-navy">Sunny Guo</span>
							<span class="text-gray">UX Lead</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#7c3aed]" />
						<span class="text-gray">Wireframe and mockup creation</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#7c3aed]" />
						<span class="text-gray">Visual design and presentation</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#7c3aed]" />
						<span class="text-gray">Technical documentation</span>
					</div>
				</div>
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-col border-l-4 border-[#0891b2] gap-4 shadow-sm"
				>
					<div class="flex flex-row gap-4">
						<img src={IsabellaImage} alt="isabella" class="h-16 w-16 rounded-full" />
						<div class="flex flex-col gap-1">
							<span class="text-xl font-medium text-navy">Isabella Hu</span>
							<span class="text-gray">Business Analyst</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#0891b2]" />
						<span class="text-gray">Strategic analysis and competitive positioning</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#0891b2]" />
						<span class="text-gray">Cultural and institutional analysis</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#0891b2]" />
						<span class="text-gray">Change management recommendations</span>
					</div>
				</div>
				<div
					class="bg-white rounded-2xl px-9 py-8 flex flex-col border-l-4 border-[#2563eb] gap-4 shadow-sm"
				>
					<div class="flex flex-row gap-4">
						<img src={YiyoungImage} alt="yiyoung" class="h-16 w-16 rounded-full" />
						<div class="flex flex-col gap-1">
							<span class="text-xl font-medium text-navy">Yiyoung Liu</span>
							<span class="text-gray">Tech Lead</span>
						</div>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#2563eb]" />
						<span class="text-gray">Final website development</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#2563eb]" />
						<span class="text-gray">Expected impact analysis</span>
					</div>
					<div class="flex flex-row gap-3">
						<Icon src={CircleCheckBig} class="w-6 h-6 text-[#2563eb]" />
						<span class="text-gray">Feasibility of solution</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		id="references"
		use:revealView
		class="scroll-my-28 bg-sky py-16"
		aria-labelledby="references-heading"
	>
		<div class="mx-auto flex w-full max-w-full flex-col items-center sm:max-w-[70vw]">
			<h1 id="references-heading" class="text-4xl font-medium text-navy">References</h1>
			<ol
				class="mt-10 w-full max-w-4xl list-none space-y-4 p-0"
				aria-label="Academic and industry references"
			>
				{#each references as ref, i (i)}
					<li
						class="flex gap-4 rounded-2xl border-2 border-blue bg-white p-4 shadow-sm sm:gap-5 sm:p-5"
					>
						<span
							class="shrink-0 text-base font-medium leading-relaxed text-blue tabular-nums"
							aria-hidden="true"
						>
							[{i + 1}]
						</span>
						<div class="min-w-0 text-base leading-relaxed text-gray">
							{#if ref.kind === 'text'}
								{ref.text}
							{:else}
								<p class="m-0">{ref.title}</p>
								<p class="m-0 mt-2 break-words">
									{ref.beforeUrl}
									<a
										href={ref.url}
										class="text-blue underline decoration-blue/30 underline-offset-2 hover:decoration-blue"
										target="_blank"
										rel="noopener noreferrer"
									>
										{ref.url}
									</a>
									{ref.afterUrl}
								</p>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>
</main>
