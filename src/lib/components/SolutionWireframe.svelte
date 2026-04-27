<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bell } from '@steeze-ui/lucide-icons';

	type ViewMode = 'staff' | 'patient';
	type StaffScreen = 'list' | 'detail';

	const hospitalName = 'Placeholder Hospital';

	const stats = {
		list: [
			{ label: 'Active Patients', value: '6' },
			{ label: 'Discharges Expected Today', value: '2' },
			{ label: 'Flagged Bottlenecks', value: '8' }
		]
	} as const;

	const patients = [
		{
			name: 'Sarah Martinez',
			room: '302A',
			admit: '04/15/2026',
			edd: '04/27/2026',
			bottleneck: 'Cardiology consult pending',
			progress: 65,
			status: 'on-track' as const
		},
		{
			name: 'James Kim',
			room: '215B',
			admit: '04/17/2026',
			edd: '04/28/2026',
			bottleneck: 'Home care setup',
			progress: 45,
			status: 'at-risk' as const
		},
		{
			name: 'Maria Rodriguez',
			room: '418C',
			admit: '04/14/2026',
			edd: '04/24/2026',
			bottleneck: 'Insurance authorization',
			progress: 85,
			status: 'delayed' as const
		},
		{
			name: 'Robert Chen',
			room: '109A',
			admit: '04/18/2026',
			edd: '04/27/2026',
			bottleneck: 'PT evaluation',
			progress: 72,
			status: 'on-track' as const
		},
		{
			name: 'Linda Thompson',
			room: '304B',
			admit: '04/16/2026',
			edd: '04/30/2026',
			bottleneck: 'DME delivery scheduled',
			progress: 58,
			status: 'on-track' as const
		},
		{
			name: 'David Park',
			room: '201C',
			admit: '04/19/2026',
			edd: '04/29/2026',
			bottleneck: 'Wound care training',
			progress: 40,
			status: 'at-risk' as const
		}
	] as const;

	const staffTaskSections: {
		title: string;
		rows: {
			role: string;
			task: string;
			pri: string;
			status: string;
			eta: string;
			notes?: string;
		}[];
	}[] = [
		{
			title: 'Current bottleneck',
			rows: [
				{
					role: 'Logistics / Admin',
					task: 'Insurance prior-authorization',
					pri: 'STAT',
					status: 'Delayed',
					eta: '2 days',
					notes: 'Payer response pending'
				}
			]
		},
		{
			title: 'Critical tasks',
			rows: [
				{
					role: 'Pharmacy',
					task: 'Medicine reconciliation',
					pri: 'Routine',
					status: 'Not started',
					eta: '2 days',
					notes: '-'
				},
				{
					role: 'Case management',
					task: 'Secure SNF bed (rehab)',
					pri: 'Routine',
					status: 'In progress',
					eta: '1 day',
					notes: '—'
				},
				{
					role: 'Nursing',
					task: 'Discharge education',
					pri: 'Routine',
					status: 'At risk',
					eta: '1 day',
					notes: '—'
				}
			]
		}
	];

	const portalTasks: {
		dept: string;
		task: string;
		pri: string;
		status: string;
		est: string;
		created: string;
		notes: string;
		highlight?: 'blocked' | 'done';
	}[] = [
		{
			dept: 'Logistics / Admin',
			task: 'Insurance prior-authorization',
			pri: 'STAT',
			status: 'Blocked',
			est: '4 hrs',
			created: 'Apr 27, 9:10 AM',
			notes: 'Waiting on payer response',
			highlight: 'blocked'
		},
		{
			dept: 'Pharmacy',
			task: 'Medicine reconciliation',
			pri: 'STAT',
			status: 'Not started',
			est: '1 hr',
			created: 'Apr 27, 10:00 AM',
			notes: 'Requires finalized discharge meds'
		},
		{
			dept: 'Nursing',
			task: 'Discharge education',
			pri: 'Routine',
			status: 'In progress',
			est: '45m',
			created: 'Apr 27, 11:30 AM',
			notes: 'Reviewing wound care instructions'
		},
		{
			dept: 'Transport',
			task: 'Schedule ride',
			pri: 'Routine',
			status: 'Blocked',
			est: '20m',
			created: 'Apr 27, 12:00 PM',
			notes: 'Blocked by insurance authorization'
		},
		{
			dept: 'Housekeeping',
			task: 'Room turnover prep',
			pri: 'Routine',
			status: 'Not started',
			est: '30m',
			created: 'Apr 27, 1:15 PM',
			notes: 'Can begin once discharge confirmed'
		},
		{
			dept: 'Physician',
			task: 'Final discharge order',
			pri: 'STAT',
			status: 'Completed',
			est: '—',
			created: 'Apr 27, 8:45 AM',
			notes: 'Signed and submitted',
			highlight: 'done'
		},
		{
			dept: 'Lab',
			task: 'Final lab clearance',
			pri: 'Routine',
			status: 'Completed',
			est: '—',
			created: 'Apr 27, 7:50 AM',
			notes: 'All labs in range',
			highlight: 'done'
		}
	];

	let viewMode = $state<ViewMode>('staff');
	let staffScreen = $state<StaffScreen>('list');
	let selectedPatient = $state<(typeof patients)[number]>(patients[0]);

	const detailStats = $derived([
		{ label: 'Patient' as const, value: selectedPatient.name, sub: selectedPatient.room },
		{ label: 'Est. Discharge (from now)' as const, value: '3.2 days' as const },
		{ label: 'Current bottleneck' as const, value: selectedPatient.bottleneck }
	]);

	function openDetailFor(p: (typeof patients)[number]) {
		selectedPatient = p;
		staffScreen = 'detail';
	}

	function backToList() {
		staffScreen = 'list';
	}

	function setViewMode(mode: ViewMode) {
		viewMode = mode;
		if (mode === 'patient') {
			staffScreen = 'list';
		}
	}

	const statusPill = {
		'on-track': 'bg-blue text-white',
		'at-risk': 'bg-amber-500 text-white',
		delayed: 'bg-red-600 text-white'
	} as const;

	const statusLabel: Record<keyof typeof statusPill, string> = {
		'on-track': 'On track',
		'at-risk': 'At risk',
		delayed: 'Delayed'
	};

	const taskPill = (s: string) => {
		const t = s.toLowerCase();
		if (t.includes('delay') || t.includes('blocked')) return 'bg-red-600 text-white';
		if (t.includes('not started') || t.includes('at risk')) return 'bg-amber-500 text-white';
		if (t.includes('complete')) return 'bg-lime-700 text-white';
		return 'bg-blue text-white';
	};

	const priPill = (p: string) => {
		const t = p.toLowerCase();
		if (t === 'stat') return 'bg-red-600 text-white';
		return 'bg-blue/90 text-white';
	};
</script>

<div
	class="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg text-slate-900"
	role="region"
	aria-label="FlowState product wireframe demo"
>
	<header
		class="flex h-16 shrink-0 items-center justify-between gap-3 bg-cyan-900 px-4 sm:px-8 text-white"
	>
		<div class="flex min-w-0 flex-1 items-center gap-3">
			<div class="h-8 w-8 shrink-0 rounded bg-white/10" aria-hidden="true"></div>
			<span class="min-w-0 shrink truncate text-sm font-medium sm:text-base">{hospitalName}</span>
			<div class="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs whitespace-nowrap sm:text-sm">
				{viewMode === 'staff' ? 'Discharge coordinator' : 'Patient view'}
			</div>
		</div>
		<button
			type="button"
			class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg p-1.5 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
			aria-label="Notifications"
		>
			<Icon src={Bell} class="h-5 w-5 [stroke-width:2]" />
		</button>
	</header>

	<nav
		class="flex h-12 items-end gap-6 border-b border-slate-300 px-4 sm:px-8"
		aria-label="Wireframe sections"
	>
		<span
			class="border-b-2 border-cyan-900 px-0.5 pb-3 text-sm font-medium text-cyan-900 sm:text-base"
		>
			{viewMode === 'patient' ? 'My care' : 'Dashboard'}
		</span>
		{#if viewMode === 'staff'}
			<span class="pb-3 text-sm text-slate-500 sm:text-base">Reports</span>
			<span class="pb-3 text-sm text-slate-500 sm:text-base">Settings</span>
		{/if}
	</nav>

	<main class="min-h-[420px] px-4 py-6 sm:px-8 sm:py-8">
		{#if viewMode === 'staff' && staffScreen === 'list'}
			<div class="flex flex-col gap-6">
				<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
					{#each stats.list as s}
						<div class="rounded-[10px] bg-indigo-50 px-5 py-4">
							<p class="text-sm text-blue-800">{s.label}</p>
							<p class="mt-1 text-lg font-medium text-cyan-900">{s.value}</p>
						</div>
					{/each}
				</div>

				<div
					class="overflow-hidden rounded-[10px] border border-slate-300 bg-white"
					role="table"
					aria-label="Active patients"
				>
					<div
						class="grid grid-cols-[minmax(0,1.4fr)_0.5fr_0.75fr_0.75fr_minmax(0,1.2fr)_0.5fr_0.7fr] gap-2 border-b border-slate-300 bg-indigo-50 px-3 py-3 text-xs font-bold text-cyan-900 sm:gap-3 sm:px-4 sm:text-sm"
					>
						<div>Name</div>
						<div>Room</div>
						<div class="hidden sm:block">Admitted</div>
						<div>EDD</div>
						<div class="hidden md:block">Bottleneck</div>
						<div>Progress</div>
						<div>Status</div>
					</div>
					{#each patients as p}
						<button
							type="button"
							class="grid w-full grid-cols-[minmax(0,1.4fr)_0.5fr_0.75fr_0.75fr_minmax(0,1.2fr)_0.5fr_0.7fr] gap-2 border-b border-slate-200 px-3 py-3 text-left text-xs sm:gap-3 sm:px-4 sm:text-sm last:border-0 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-800 focus-visible:outline-offset-2"
							onclick={() => openDetailFor(p)}
						>
							<span class="font-medium text-slate-900">{p.name}</span>
							<span>{p.room}</span>
							<span class="hidden sm:block text-slate-600">{p.admit}</span>
							<span class="text-slate-800">{p.edd}</span>
							<span class="hidden md:block truncate text-slate-600" title={p.bottleneck}
								>{p.bottleneck}</span
							>
							<span class="flex items-center gap-2 min-w-0">
								<span class="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-300">
									<span class="block h-full bg-blue-700" style={`width: ${p.progress}%`}></span>
								</span>
								<span class="shrink-0 tabular-nums text-slate-800">{p.progress}%</span>
							</span>
							<span>
								<span
									class="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap {statusPill[
										p.status
									]}"
								>
									{statusLabel[p.status]}
								</span>
							</span>
						</button>
					{/each}
				</div>
				<p class="text-center text-sm text-slate-500">
					Click a row to open the coordinator task board for that patient.
				</p>
			</div>
		{:else if viewMode === 'staff' && staffScreen === 'detail'}
			<div class="flex flex-col gap-5">
				<div class="flex flex-wrap items-center gap-2">
					<button
						type="button"
						class="text-sm font-medium text-cyan-800 underline decoration-cyan-600/50 underline-offset-2 hover:text-cyan-900"
						onclick={backToList}
					>
						← Back to dashboard
					</button>
					<span class="text-slate-400">|</span>
					<span class="text-sm text-slate-600">Patient workspace</span>
				</div>

				<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
					<div class="rounded-[10px] bg-indigo-50 px-5 py-4">
						<p class="text-sm text-blue-800">{detailStats[0].label}</p>
						<p class="mt-0.5 font-medium text-cyan-900">{detailStats[0].value}</p>
						<p class="text-sm text-cyan-800/80">Room {detailStats[0].sub}</p>
					</div>
					<div class="rounded-[10px] bg-indigo-50 px-5 py-4">
						<p class="text-sm text-blue-800">{detailStats[1].label}</p>
						<p class="mt-0.5 text-lg text-cyan-900">{detailStats[1].value}</p>
					</div>
					<div class="rounded-[10px] bg-indigo-50 px-5 py-4">
						<p class="text-sm text-blue-800">{detailStats[2].label}</p>
						<p class="mt-0.5 font-medium text-cyan-900">{detailStats[2].value}</p>
					</div>
				</div>

				<div class="overflow-x-auto rounded-[10px] border border-slate-300">
					<table class="w-full min-w-[640px] text-left text-sm">
						<thead>
							<tr class="border-b border-slate-300 bg-indigo-50 text-cyan-900">
								<th class="px-3 py-3 font-bold sm:px-4">Role</th>
								<th class="px-3 py-3 font-bold sm:px-4">Task</th>
								<th class="px-3 py-3 font-bold sm:px-4">Priority</th>
								<th class="px-3 py-3 font-bold sm:px-4">Status</th>
								<th class="px-3 py-3 font-bold sm:px-4">Est. time</th>
								<th class="px-3 py-3 font-bold sm:px-4">Notes</th>
							</tr>
						</thead>
						<tbody>
							{#each staffTaskSections as section}
								<tr class="bg-indigo-200/80">
									<td colspan="6" class="px-4 py-2.5 text-sm font-bold text-slate-900">
										{section.title}
									</td>
								</tr>
								{#each section.rows as row}
									<tr class="border-b border-slate-200 bg-white">
										<td class="px-3 py-3 align-top sm:px-4">{row.role}</td>
										<td class="px-3 py-3 align-top sm:px-4">{row.task}</td>
										<td class="px-3 py-3 align-top sm:px-4">
											<span
												class="inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium {priPill(
													row.pri
												)}"
											>
												{row.pri}
											</span>
										</td>
										<td class="px-3 py-3 align-top sm:px-4">
											<span
												class="inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium {taskPill(
													row.status
												)}"
											>
												{row.status}
											</span>
										</td>
										<td class="px-3 py-3 text-slate-700 sm:px-4">{row.eta}</td>
										<td class="px-3 py-3 text-slate-600 sm:px-4">{row.notes}</td>
									</tr>
								{/each}
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{:else}
			<div class="flex flex-col gap-4">
				<div class="rounded-[10px] border border-slate-200 bg-indigo-50 px-5 py-4">
					<p class="text-base font-bold text-blue-800">
						Patient: {selectedPatient.name} — Room {selectedPatient.room}
					</p>
					<p class="mt-1 text-sm leading-relaxed text-cyan-900">
						Estimated discharge: April 29
						<br />
						Current focus: insurance authorization
					</p>
				</div>

				<div class="overflow-x-auto rounded-[10px] border border-slate-300">
					<table class="w-full min-w-[720px] text-left text-sm">
						<thead>
							<tr class="border-b border-slate-300 bg-indigo-50 text-cyan-900">
								<th class="px-3 py-3 font-bold sm:px-4">Department</th>
								<th class="px-3 py-3 font-bold sm:px-4">Task</th>
								<th class="px-3 py-3 font-bold sm:px-4">Priority</th>
								<th class="px-3 py-3 font-bold sm:px-4">Status</th>
								<th class="px-3 py-3 font-bold sm:px-4">Est.</th>
								<th class="px-3 py-3 font-bold sm:px-4">Created</th>
								<th class="px-3 py-3 font-bold sm:px-4">Notes</th>
							</tr>
						</thead>
						<tbody>
							{#each portalTasks as t}
								<tr
									class="border-b border-slate-200 {t.highlight === 'blocked'
										? 'bg-rose-100'
										: t.highlight === 'done'
											? 'bg-green-100'
											: 'bg-white'}"
								>
									<td class="px-3 py-3 align-top sm:px-4">{t.dept}</td>
									<td class="px-3 py-3 align-top sm:px-4">{t.task}</td>
									<td class="px-3 py-3 align-top sm:px-4">
										<span
											class="inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium {priPill(
												t.pri
											)}"
										>
											{t.pri}
										</span>
									</td>
									<td class="px-3 py-3 align-top sm:px-4">
										<span
											class="inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium {taskPill(
												t.status
											)}"
										>
											{t.status}
										</span>
									</td>
									<td class="px-3 py-3 text-slate-700 sm:px-4">{t.est}</td>
									<td class="px-3 py-3 text-slate-600 sm:px-4 whitespace-nowrap">{t.created}</td>
									<td class="px-3 py-3 text-slate-600 sm:px-4 max-w-xs">{t.notes}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<p class="text-sm text-slate-500">
					Patient view mirrors the same plan with clearer language and without internal-only fields.
				</p>
			</div>
		{/if}
	</main>

	<div
		class="flex flex-wrap items-center justify-end gap-2 border-t border-slate-200 bg-slate-50/90 px-4 py-3 sm:px-8"
	>
		<div
			class="inline-flex overflow-hidden rounded-[10px] border border-slate-200 bg-white p-0.5 shadow-sm"
			role="group"
			aria-label="Choose staff or patient wireframe"
		>
			<button
				type="button"
				class="rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:px-5 {viewMode ===
				'staff'
					? 'bg-cyan-900 text-white shadow'
					: 'text-cyan-900 hover:bg-slate-100'}"
				onclick={() => setViewMode('staff')}
			>
				Staff view
			</button>
			<button
				type="button"
				class="rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:px-5 {viewMode ===
				'patient'
					? 'bg-blue text-white shadow'
					: 'text-cyan-900 hover:bg-slate-100'}"
				onclick={() => setViewMode('patient')}
			>
				Patient portal
			</button>
		</div>
	</div>
</div>
