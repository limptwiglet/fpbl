<h3>Player {player.name}</h3>

<script>	
	import players from '../../stores/players';

	export let id = null;

	$: player = $players.find(p => p.id === id);
</script>
