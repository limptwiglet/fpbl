{#if player}
  <h3>Player {player.name}</h3>
{:else}
  <h3>NOT FOUND</h3>
{/if}

{player.status}

<button on:click="{startTraining}">Start training</button>

<script>
  import playersStore from '../../stores/players';

  export let id = null;

  $: player = $playersStore.players.find(p => p.id === id);

  const startTraining = () => {
    playersStore.train(player.id);
  };
</script>
