<h2>Matches</h2>

<Table
  {headers}
  rows="{teams}"
  let:header
  let:row>
  {#if header.key === 'play'}
    <button>Play</button>
  {:else}
    {row[header.key]}
  {/if}
</Table>

<script lang="ts">
  import Table from "../components/Table.svelte";

  let headers = [
    { key: 'name', value: 'Name' },
    { key: 'wins', value: 'Wins' },
    { key: 'loses', value: 'Loses' },
    { key: 'you', value: 'You' },
    { key: 'them', value: 'Them' },
    { key: 'them', value: 'Them' },
    { key: 'play', value: 'Play' },
  ];

  let teams = [
    {
      name: 'Dakka Dakka',
      wins: 1,
      loses: 2,
      you: 0,
      them: 0
    },
    {
      name: 'ECI',
      wins: 10,
      loses: 4,
      you: 0,
      them: 0
    }
  ]
</script>
