import Home from '../components/Home';
import List from '../components/List';
import Shop from '../components/Shop';
import Shopping from '../components/Shopping';
import Person from '../components/Person';

const routes = [
  {
    path : "/",
    exact : true,
    component: Home
  },
  {
    path:"/list",
    exact:true,
    component: List
  },
  {
    path:"/shop",
    exact:true,
    component: Shop
  },
  {
    path:"/shopping",
    exact:true,
    component: Shopping
  },
  {
    path:"/per",
    exact:true,
    component: Person
  },
]

export default routes;