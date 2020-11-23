<Router>
  <h2>Players</h2>

  <Route path=":id" let:params>
    <Player id="{params.id}"/>
  </Route>

  <Route>
    <nav>
      <input type="text" bind:value={searchString}/>
    </nav>
    <Table
      {headers}
      rows="{searchedRows}"
      let:row
      let:header>
      {#if header.key === 'name'}
        <Link to="{`/players/${row.id}`}">{row.name}</Link>
      {:else}
        {row[header.key]}
      {/if}
    </Table>
  </Route>
</Router>

<script>
  import {
    Router,
    Route,
    Link
  } from 'svelte-routing';

  import Player from './Players/player.svelte';
  import Table from '../components/Table.svelte';

  import playersStore from '../stores/players';

  let searchString = '';

  const headers = [
    { key: 'name', value: 'Name' },
    { key: 'position', value: 'Position' },
    { key: 'speed', value: 'Speed' },
    { key: 'stamina', value: 'Stamina' },
    { key: 'agility', value: 'Agility' },
    { key: 'health', value: 'Health' },
    { key: 'age', value: 'Age'},
    { key: 'status', value: 'Status', }
  ];

  $: searchedRows = searchRows($playersStore.players, searchString);

  const searchRows = (players, searchStr) => {
    return [...players].filter(player => player.name.includes(searchStr));
  };
</script>
