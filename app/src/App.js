import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from './libs/theme';
import Loading from './components/Loading';

const HomePage = lazy(() => import("./pages/Homepage"));
const RecipePage = lazy(() => import("./pages/Recipe"));
const CategoryPage = lazy(() => import("./pages/Category"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<Loading />}>
            <section className="content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/recipe/:id" component={RecipePage} />
                <Route path="/tags/:id" component={CategoryPage} />
                <Route path="*" component={NotFound} />
              </Switch>
            </section>
          </Suspense>
        </Router>
    </ThemeProvider>
  );
}

export default App;
