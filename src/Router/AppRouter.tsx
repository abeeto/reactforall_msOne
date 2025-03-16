import { useRoutes } from 'raviger'
import About from "../Components/About";
import App from '../App';

const routes = {
  '/': () => <App />,
  '/about': () => <About />,
}


export default function AppRouter() {
    let routeResult = useRoutes(routes);
    return routeResult;
}