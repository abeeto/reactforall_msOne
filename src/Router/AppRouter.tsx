import { useRoutes } from 'raviger'
import About from "../Pages/About";
import App from '../App';
import AppContainer from '../Components/AppContainer';

const routes = {
  '/': () => <App />,
  '/about': () => <About />,
}


export default function AppRouter() {
    let routeResult = useRoutes(routes);
    return <AppContainer>{routeResult}</AppContainer>;
}