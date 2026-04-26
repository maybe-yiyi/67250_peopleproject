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
</script>

<div
	class="w-full"
	role="img"
	aria-label="Low-fidelity wireframe of a hospital discharge coordination dashboard"
>
	<div
		class="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-md"
	>
		<!-- App header -->
		<header
			class="flex min-h-16 flex-wrap items-center justify-between gap-4 bg-navy px-4 py-3 text-white sm:px-6"
		>
			<div class="flex min-w-0 items-center gap-3">
				<div class="h-8 w-8 shrink-0 rounded-lg bg-white/15" aria-hidden="true"></div>
				<span class="truncate text-base font-medium">Placeholder Hospital</span>
			</div>
			<div class="flex items-center gap-2 sm:gap-3">
				<span
					class="hidden max-w-[12rem] truncate rounded-full bg-white/15 px-3 py-1.5 text-sm sm:inline"
				>
					Discharge Coordinator
				</span>
				<div class="h-9 w-9 shrink-0 rounded-lg bg-white/10" aria-hidden="true"></div>
			</div>
		</header>

		<!-- Secondary nav -->
		<nav
			class="flex h-12 items-stretch gap-1 overflow-x-auto border-b border-slate-200 px-4 sm:gap-6 sm:px-6"
			aria-label="Wireframe navigation (illustrative)"
		>
			{#each tabs as tab, i}
				<span
					class="inline-flex shrink-0 items-center border-b-2 px-1 text-sm font-medium sm:text-base {i ===
					0
						? 'border-navy text-navy'
						: 'border-transparent text-gray'}"
				>
					{tab}
				</span>
			{/each}
		</nav>

		<div class="flex flex-col gap-6 p-4 sm:p-6">
			<!-- KPI strip -->
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
				<div class="rounded-2xl bg-sky p-4 shadow-sm">
					<div class="text-sm text-blue">Active Patients</div>
					<div class="mt-1 text-xl font-medium text-navy">24</div>
				</div>
				<div class="rounded-2xl bg-sky p-4 shadow-sm">
					<div class="text-sm text-blue">Average EDD</div>
					<div class="mt-1 text-xl font-medium text-navy">3.2 days</div>
				</div>
				<div class="rounded-2xl bg-sky p-4 shadow-sm">
					<div class="text-sm text-blue">Flagged Bottlenecks</div>
					<div class="mt-1 text-xl font-medium text-navy">8</div>
				</div>
			</div>

			<!-- Patient table -->
			<div class="overflow-x-auto rounded-2xl border border-slate-200">
				<table class="w-full min-w-[52rem] border-collapse text-left text-sm">
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
						{#each rows as row}
							<tr class="border-b border-slate-200 last:border-b-0">
								<td class="whitespace-nowrap px-3 py-3 font-medium text-navy sm:px-4">
									{row.name}
								</td>
								<td class="whitespace-nowrap px-3 py-3 sm:px-4">{row.room}</td>
								<td class="whitespace-nowrap px-3 py-3 sm:px-4">{row.admission}</td>
								<td class="whitespace-nowrap px-3 py-3 sm:px-4">{row.edd}</td>
								<td class="px-3 py-3 sm:px-4">{row.bottleneck}</td>
								<td class="px-3 py-3 sm:px-4">
									<div class="flex min-w-[6rem] items-center gap-2">
										<div class="h-2 min-w-[3rem] flex-1 overflow-hidden rounded-full bg-slate-200">
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
			</div>
		</div>

		<!-- View mode (illustrative) -->
		<div
			class="flex flex-wrap justify-end gap-2 border-t border-slate-200 bg-sky/50 px-4 py-4 sm:px-6"
		>
			<span
				class="pointer-events-none rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white shadow-md"
			>
				Staff View
			</span>
			<span
				class="pointer-events-none rounded-lg bg-blue px-4 py-2 text-sm font-medium text-white shadow-md"
			>
				Patient Portal
			</span>
		</div>
	</div>
</div>
