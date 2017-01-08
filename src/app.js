var Route = ReactRouter.Route
var Router = ReactRouter.Router
var browserHistory = ReactRouter.browserHistory

class RecipeList extends React.Component {
  render() {

    var links = recipe_data.map(r =>
      <a href={'/recipe/' + r.id} className="recipe-link" >
        <img src={'/img/' + r.id + '.jpeg'}>
        </img>
        <span className="text">{r.name}</span>
        <span className="background"></span>
      </a>)

    return (
      <div>
        <h1>Recipe List</h1>
        <div class="container-fluid">
          {links}
        </div>
      </div>);
  }
}

class Recipe extends React.Component {
  render() {
    var recipe = recipe_data.find(r => r.id === this.props.params.id);

    return (
      <div className="recipe-wrapper">
        <h1>{recipe.name}</h1>
        <img src={'/img/' + recipe.id + '.jpeg'}/>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map(i => <li>{i}</li>)}
        </ul>
        <h4>Method</h4>
        <ul>
          {recipe.method.map(m => <li>{m}</li>)}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={RecipeList} />
    <Route path="/recipe/:id" component={Recipe} />
  </Router>,
  document.getElementById('root')
);
