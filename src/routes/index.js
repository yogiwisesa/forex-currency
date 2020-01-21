import App from './App/App';
import SecondApp from './SecondApp/App';
import NotFound from './NotFound';
import Layout from '../components/Layout';

export default [{
  component: Layout,
  routes: [{
    path: "/",
    exact: true,
    component: App,
  },
  {
    path: "/second-page",
    exact: true,
    component: SecondApp,
  },
  {
    path: "*",
    component: NotFound
  }
]
}]