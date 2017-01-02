var Route = ReactRouter.Route
var Router = ReactRouter.Router
var browserHistory  = ReactRouter.browserHistory 

class RecipeList extends React.Component {
  render() {
    
    var links = recipe_data.map(r =>
    <a href={'/recipe/'+ r.id} className="col-xs-4" >{r.name}</a>)

    return (
      <div>
        <h1>Recipe List</h1>
        <div class="container-fluid row">
          {links}
        </div>
      </div>);
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
