<script>
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import {
    Router,
    Route,
    Link
  } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import Players from './pages/Players.svelte';
  import Team from './pages/Team.svelte';

  let url = '';
</script>

<style lang="scss" global>
  @import "carbon-components-svelte/css/g90";
</style>

<Router {url}>
  <Header company="FPBL">
    <div slot="skip-to-content">
      <SkipToContent />
    </div>

    <HeaderNav>
      <HeaderNavItem href="/" text="Home"/>
      <HeaderNavItem href="/players" text="Players" />
      <HeaderNavItem href="/team" text="Team" />
    </HeaderNav>
  </Header>

  <Content>
    <Grid>
      <Link to="players/asdfasdfasdf">Player</Link>
      <Row>
        <Column>
          <Route path="/players/*"><Players/></Route>
          <Route path="/team"><Team/></Route>
          <Route path="/"><Home/></Route>
        </Column>
      </Row>
    </Grid>
  </Content>
</Router>


