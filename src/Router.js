import { Route, Switch } from "react-router-dom";

import Home from "./components/home.jsx";
import Article from "./components/article.jsx";
import WriteArticle from "./components/WriteArticle.jsx";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/article/:articleId" component={Article} />
      <Route exact path="/write" component={WriteArticle} />
    </Switch>
  );
}
