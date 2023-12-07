function About() {
    return <h1>About Page - {props.match.params.name}</h1>;
  }

  <Route path="/about/:name" component={About} />