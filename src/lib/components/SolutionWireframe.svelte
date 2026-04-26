<script lang="ts">
	type Status = 'on-track' | 'at-risk' | 'delayed';

	const rows: {
		name: string;
		room: string;
		admission: string;
		edd: string;
		bottleneck: string;
		progress: number;
		status: Status;
	}[] = [
		{
			name: 'Sarah Martinez',
			room: '302A',
			admission: '04/15/2026',
			edd: '04/22/2026',
			bottleneck: 'Cardiology consult pending',
			progress: 65,
			status: 'on-track'
		},
		{
			name: 'James Kim',
			room: '215B',
			admission: '04/17/2026',
			edd: '04/21/2026',
			bottleneck: 'Home care setup',
			progress: 45,
			status: 'at-risk'
		},
		{
			name: 'Maria Rodriguez',
			room: '418C',
			admission: '04/14/2026',
			edd: '04/20/2026',
			bottleneck: 'Insurance authorization',
			progress: 85,
			status: 'delayed'
		},
		{
			name: 'Robert Chen',
			room: '109A',
			admission: '04/18/2026',
			edd: '04/23/2026',
			bottleneck: 'PT evaluation',
			progress: 72,
			status: 'on-track'
		},
		{
			name: 'Linda Thompson',
			room: '304B',
			admission: '04/16/2026',
			edd: '04/24/2026',
			bottleneck: 'DME delivery scheduled',
			progress: 58,
			status: 'on-track'
		},
		{
			name: 'David Park',
			room: '201C',
			admission: '04/19/2026',
			edd: '04/25/2026',
			bottleneck: 'Wound care training',
			progress: 40,
			status: 'at-risk'
		}
	];

	const tabs = ['Dashboard', 'Patients', 'Reports', 'Settings'] as const;
	type Tab = (typeof tabs)[number];

	let activeTab = $state<Tab>('Dashboard');
	let viewMode = $state<'staff' | 'patient'>('staff');
	let selectedIndex = $state<number | null>(0);

	/** settings demo toggles */
	let notifEmail = $state(true);
	let compactTable = $state(false);

	/** report panel “opened” (demo) */
	let reportOpen = $state<string | null>(null);

	const tabPanelId = 'wireframe-app-panel';

	function statusLabel(s: Status): string {
		if (s === 'on-track') return 'On Track';
		if (s === 'at-risk') return 'At Risk';
		return 'Delayed';
	}

	function statusClass(s: Status): string {
		if (s === 'on-track') return 'bg-blue text-white';
		if (s === 'at-risk') return 'bg-yellow text-white';
		return 'bg-red text-white';
	}

	function selectRow(i: number) {
		selectedIndex = selectedIndex === i ? null : i;
	}
</script>

<div
	class="w-full"
	role="region"
	aria-label="Interactive discharge dashboard wireframe (demo, not a live system)"
>
	<div
		class="relative z-10 touch-manipulation isolate overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-md"
	>
		<header
			class="flex min-h-16 flex-wrap items-center justify-between gap-4 bg-navy px-4 py-3 text-white sm:px-6"
		>
			<div class="flex min-w-0 items-center gap-3">
				<div class="h-8 w-8 shrink-0 rounded-lg bg-white/15" aria-hidden="true"></div>
				<span class="truncate text-base font-medium">Placeholder Hospital</span>
			</div>
			<div class="flex items-center gap-2 sm:gap-3">
				<span
					class="hidden max-w-[14rem] truncate rounded-full bg-white/15 px-3 py-1.5 text-sm sm:inline"
				>
					{viewMode === 'staff' ? 'Discharge Coordinator' : 'Patient (preview)'}
				</span>
				<button
					type="button"
					class="grid h-9 w-9 shrink-0 place-content-center rounded-lg bg-white/10 text-white/90 transition hover:bg-white/20"
					aria-label="Notifications (wireframe, no action)"
				>
					<span class="h-1.5 w-4 border border-white/80" aria-hidden="true"></span>
				</button>
			</div>
		</header>

		<div
			class="flex h-12 items-stretch gap-1 overflow-x-auto border-b border-slate-200 px-2 sm:gap-2 sm:px-4"
			role="tablist"
			aria-label="App sections (wireframe)"
		>
			{#each tabs as tab (tab)}
				<button
					type="button"
					role="tab"
					class="shrink-0 border-b-2 px-3 py-2 text-left text-sm font-medium transition sm:px-4 sm:text-base {activeTab ===
					tab
						? 'border-navy text-navy'
						: 'border-transparent text-gray hover:text-navy'}"
					aria-selected={activeTab === tab}
					aria-controls={tabPanelId}
					id="wireframe-tab-{tab.toLowerCase()}"
					onclick={() => (activeTab = tab)}
				>
					{tab}
				</button>
			{/each}
		</div>

		<div id={tabPanelId} role="tabpanel" class="flex flex-col gap-6 p-4 sm:p-6" tabindex="-1">
			<!-- Dashboard: KPIs (staff) or intro (patient) -->
			{#if activeTab === 'Dashboard' && viewMode === 'staff'}
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<button
						type="button"
						class="rounded-2xl bg-sky p-4 text-left shadow-sm ring-1 ring-inset ring-blue/20 transition hover:bg-sky/90"
					>
						<div class="text-sm text-blue">Active Patients</div>
						<div class="mt-1 text-xl font-medium text-navy">24</div>
					</button>
					<button
						type="button"
						class="rounded-2xl bg-sky p-4 text-left shadow-sm ring-1 ring-inset ring-blue/20 transition hover:bg-sky/90"
					>
						<div class="text-sm text-blue">Average EDD</div>
						<div class="mt-1 text-xl font-medium text-navy">3.2 days</div>
					</button>
					<button
						type="button"
						class="rounded-2xl bg-sky p-4 text-left shadow-sm ring-1 ring-inset ring-blue/20 transition hover:bg-sky/90"
					>
						<div class="text-sm text-blue">Flagged Bottlenecks</div>
						<div class="mt-1 text-xl font-medium text-navy">8</div>
					</button>
				</div>
			{:else if activeTab === 'Dashboard' && viewMode === 'patient'}
				<div
					class="flex flex-col gap-2 rounded-2xl border border-blue/30 bg-sky p-4 text-navy sm:flex-row sm:items-center sm:justify-between"
				>
					<div>
						<p class="text-sm text-blue">Your stay</p>
						<p class="text-lg font-medium">Estimated discharge: April 22, 2026</p>
					</div>
					<p class="text-sm text-gray">Simplified information only — for demo wireframe</p>
				</div>
			{/if}

			{#if activeTab === 'Dashboard' || activeTab === 'Patients'}
				<div class="overflow-x-auto rounded-2xl border border-slate-200">
					{#if viewMode === 'staff'}
						<table
							class="w-full min-w-[52rem] border-collapse text-left text-sm {compactTable
								? 'text-xs'
								: ''}"
						>
							<thead>
								<tr class="border-b border-slate-200 bg-sky text-navy">
									<th class="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">Name</th>
									<th class="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">Room</th>
									<th class="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">Admission</th>
									<th class="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">EDD</th>
									<th class="min-w-[10rem] px-3 py-3 font-semibold sm:px-4">Current bottleneck</th>
									<th class="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">Progress</th>
									<th class="whitespace-nowrap px-3 py-3 font-semibold sm:px-4">Status</th>
								</tr>
							</thead>
							<tbody class="text-gray">
								{#each rows as row, i (row.name)}
									<tr
										class="cursor-pointer border-b border-slate-200 last:border-b-0 transition {selectedIndex ===
										i
											? 'bg-sky'
											: 'hover:bg-slate-50'}"
										onclick={() => selectRow(i)}
									>
										<td class="whitespace-nowrap px-3 py-3 font-medium text-navy sm:px-4">
											{row.name}
										</td>
										<td class="whitespace-nowrap px-3 py-3 sm:px-4">{row.room}</td>
										<td class="whitespace-nowrap px-3 py-3 sm:px-4">{row.admission}</td>
										<td class="whitespace-nowrap px-3 py-3 sm:px-4">{row.edd}</td>
										<td class="px-3 py-3 sm:px-4">{row.bottleneck}</td>
										<td class="px-3 py-3 sm:px-4">
											<div class="flex min-w-[6rem] items-center gap-2">
												<div
													class="h-2 min-w-[3rem] flex-1 overflow-hidden rounded-full bg-slate-200"
												>
													<div
														class="h-full rounded-full bg-blue"
														style:width="{row.progress}%"
													></div>
												</div>
												<span class="w-9 shrink-0 tabular-nums text-navy">{row.progress}%</span>
											</div>
										</td>
										<td class="px-3 py-3 sm:px-4">
											<span
												class="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap sm:text-sm {statusClass(
													row.status
												)}"
											>
												{statusLabel(row.status)}
											</span>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{:else}
						<!-- Patient view: friendlier table -->
						<table class="w-full min-w-[32rem] border-collapse text-left text-sm">
							<thead>
								<tr class="border-b border-slate-200 bg-sky text-navy">
									<th class="px-3 py-3 font-semibold sm:px-4">Patient</th>
									<th class="px-3 py-3 font-semibold sm:px-4">Target discharge</th>
									<th class="min-w-[8rem] px-3 py-3 font-semibold sm:px-4">Next step</th>
									<th class="px-3 py-3 font-semibold sm:px-4">Status</th>
								</tr>
							</thead>
							<tbody class="text-gray">
								{#each rows as row, i (row.name + '-p')}
									<tr
										class="cursor-pointer border-b border-slate-200 last:border-b-0 transition {selectedIndex ===
										i
											? 'bg-sky'
											: 'hover:bg-slate-50'}"
										onclick={() => selectRow(i)}
									>
										<td class="px-3 py-3 font-medium text-navy sm:px-4">{row.name.split(' ')[0]}</td
										>
										<td class="px-3 py-3 sm:px-4">{row.edd}</td>
										<td class="px-3 py-3 sm:px-4">{row.bottleneck}</td>
										<td class="px-3 py-3 sm:px-4">
											<span
												class="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap sm:text-sm {statusClass(
													row.status
												)}"
											>
												{statusLabel(row.status)}
											</span>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{/if}
				</div>
			{/if}

			{#if selectedIndex !== null && (activeTab === 'Dashboard' || activeTab === 'Patients')}
				<div
					class="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-sm text-navy"
					aria-live="polite"
				>
					<span class="font-medium">Selected (demo):</span>
					{rows[selectedIndex]?.name} — {rows[selectedIndex]?.bottleneck}
				</div>
			{/if}

			{#if activeTab === 'Reports'}
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<div class="flex flex-col rounded-2xl border border-slate-200 p-4">
						<p class="font-medium text-navy">Length of stay</p>
						<p class="mt-1 text-2xl text-blue">4.1 days</p>
						<p class="mt-2 text-xs text-gray">Last 30 days, all units (wireframe data)</p>
						<button
							type="button"
							class="mt-3 w-fit rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-navy transition hover:bg-slate-100"
							onclick={() => (reportOpen = reportOpen === 'los' ? null : 'los')}
							>View details</button
						>
						{#if reportOpen === 'los'}
							<p class="mt-2 text-xs text-gray">Demo: export would go here.</p>
						{/if}
					</div>
					<div class="flex flex-col rounded-2xl border border-slate-200 p-4">
						<p class="font-medium text-navy">Bottleneck mix</p>
						<p class="mt-1 text-2xl text-blue">12 open</p>
						<p class="mt-2 text-xs text-gray">Grouped by type (wireframe data)</p>
						<button
							type="button"
							class="mt-3 w-fit rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-navy transition hover:bg-slate-100"
							onclick={() => (reportOpen = reportOpen === 'bot' ? null : 'bot')}
							>View details</button
						>
						{#if reportOpen === 'bot'}
							<p class="mt-2 text-xs text-gray">Demo: report preview would go here.</p>
						{/if}
					</div>
					<div class="flex flex-col rounded-2xl border border-slate-200 p-4">
						<p class="font-medium text-navy">Readmission watch</p>
						<p class="mt-1 text-2xl text-navy">0</p>
						<p class="mt-2 text-xs text-gray">Flagged in window (wireframe data)</p>
						<button
							type="button"
							class="mt-3 w-fit rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-navy transition hover:bg-slate-100"
							onclick={() => (reportOpen = reportOpen === 'read' ? null : 'read')}
							>View details</button
						>
						{#if reportOpen === 'read'}
							<p class="mt-2 text-xs text-gray">Demo: no alerts in this sample.</p>
						{/if}
					</div>
				</div>
			{/if}

			{#if activeTab === 'Settings'}
				<div class="flex max-w-md flex-col gap-4 text-navy">
					<div
						class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 p-4"
					>
						<div>
							<p class="font-medium">Email digests</p>
							<p class="text-sm text-gray">Wireframe only — not saved</p>
						</div>
						<button
							type="button"
							role="switch"
							aria-label="Email digests"
							aria-checked={notifEmail}
							class="relative h-8 w-14 rounded-full transition {notifEmail
								? 'bg-blue'
								: 'bg-slate-300'}"
							onclick={() => (notifEmail = !notifEmail)}
						>
							<span
								class="absolute top-1 h-6 w-6 rounded-full bg-white shadow transition {notifEmail
									? 'left-7'
									: 'left-1'}"
								aria-hidden="true"
							></span>
						</button>
					</div>
					<div
						class="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 p-4"
					>
						<div>
							<p class="font-medium">Compact table</p>
							<p class="text-sm text-gray">Tighter rows for dense screens (demo only)</p>
						</div>
						<button
							type="button"
							role="switch"
							aria-label="Compact table"
							aria-checked={compactTable}
							class="relative h-8 w-14 rounded-full transition {compactTable
								? 'bg-blue'
								: 'bg-slate-300'}"
							onclick={() => (compactTable = !compactTable)}
						>
							<span
								class="absolute top-1 h-6 w-6 rounded-full bg-white shadow transition {compactTable
									? 'left-7'
									: 'left-1'}"
								aria-hidden="true"
							></span>
						</button>
					</div>
				</div>
			{/if}
		</div>

		<div
			class="flex flex-wrap justify-end gap-2 border-t border-slate-200 bg-sky/50 px-4 py-4 sm:px-6"
			role="group"
			aria-label="Preview mode"
		>
			<button
				type="button"
				class="rounded-lg px-4 py-2 text-sm font-medium text-white transition shadow-md {viewMode ===
				'staff'
					? 'bg-navy ring-2 ring-navy ring-offset-2'
					: 'bg-navy/60 hover:bg-navy'}"
				aria-pressed={viewMode === 'staff'}
				onclick={() => (viewMode = 'staff')}
			>
				Staff View
			</button>
			<button
				type="button"
				class="rounded-lg px-4 py-2 text-sm font-medium text-white transition shadow-md {viewMode ===
				'patient'
					? 'bg-blue ring-2 ring-blue ring-offset-2'
					: 'bg-blue/70 hover:bg-blue'}"
				aria-pressed={viewMode === 'patient'}
				onclick={() => (viewMode = 'patient')}
			>
				Patient Portal
			</button>
		</div>
	</div>
</div>
