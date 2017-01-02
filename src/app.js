var Route = ReactRouter.Route
var Router = ReactRouter.Router
var browserHistory  = ReactRouter.browserHistory 

class RecipeList extends React.Component {
  render() {
    return <h1>Recipe List</h1>;
  }
}

class Recipe extends React.Component {
  render() {
    var recipe = recipe_data.find(r => r.id === this.props.params.id);

    return <h1>{recipe.name}</h1>;
  }
}


ReactDOM.render(
  <Router history={browserHistory }>
    <Route path="/" component={RecipeList}/>
    <Route path="/recipe/:id" component={Recipe}/>
  </Router>,
  document.getElementById('root')
);
