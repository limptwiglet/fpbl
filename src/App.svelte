<script>
  import {
    Router,
    Route,
    Link
  } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import Players from './pages/Players.svelte';
  import Team from './pages/Team.svelte';
  import Matches from './pages/Matches.svelte';

  let url = '';
</script>

<style global lang="postcss">
  @import 'hiq/dist/hiq.min.css';
</style>

<div class="container">
  <Router {url}>
    <header>
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/team">Team</Link>
      <Link to="/matches">Matches</Link>
    </header>

    <main>
      <Route path="/matches/*"><Matches/></Route>
      <Route path="/players/*"><Players/></Route>
      <Route path="/team"><Team/></Route>
      <Route path="/"><Home/></Route>
      <Route path="/"><Home/></Route>
    </main>
  </Router>
</div>


