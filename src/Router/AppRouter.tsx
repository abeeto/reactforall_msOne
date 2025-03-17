import { useRoutes } from 'raviger'
import About from "../Pages/About";
import Home from '../Pages/Home';
import AppContainer from '../Components/AppContainer';
import Form from '../Pages/Form';
const routes = {
  '/': () => <Home />,
  '/about': () => <About />,
  '/form/:id': ({id}: {id: string}) => <Form formId={id}/>
}

export default function AppRouter() {
    let routeResult = useRoutes(routes);
    return <AppContainer>{routeResult}</AppContainer>;
}