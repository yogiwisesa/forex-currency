import Home from './Home';
import NotFound from './NotFound';
import Layout from '../components/Layout';

export default [{
  component: Layout,
  routes: [{
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "*",
    component: NotFound
  }
]
}]