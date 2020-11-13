
<Router>
	<h2>Players</h2>

	<Route path=":id" let:params>
		<Player id="{params.id}"/>
	</Route>

	<Route>
		<DataTable
			zebra
			sortable
			headers={headers}
			rows={searchedRows}>

			<Toolbar>
				<ToolbarContent>
					<ToolbarSearch bind:value={searchString} />
				</ToolbarContent>
			</Toolbar>

			<span slot="cell" let:row let:cell>
				{#if cell.key === 'name'}
					<Link to="{row.id}">{row.name}</Link>
				{:else}{cell.value}{/if}
			</span>

		</DataTable>
	</Route>
</Router>

<script>
	import { 
		Router, 
		Route, 
		Link 
	} from 'svelte-routing';
	import { 
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch
	} from 'carbon-components-svelte';

	import Player from './Players/[id].svelte';

	import players from '../stores/players';

	let searchString = '';

	const headers = [
		{ key: 'name', value: 'Name' },
		{ key: 'position', value: 'Position' },
		{ key: 'speed', value: 'Speed' },
		{ key: 'stamina', value: 'Stamina' },
		{ key: 'agility', value: 'Agility' },
		{ key: 'health', value: 'Health' },
		{ key: 'age', value: 'Age'}
	];

	let rows = [];

	players.subscribe(players => rows = players);

	$: searchedRows = searchRows(searchString);

	const searchRows = (name) => {
		return rows.filter((row) => {
			return row.name.includes(name);
		});
	};
</script>
