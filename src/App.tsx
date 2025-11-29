import { Route, Switch } from 'wouter';
import LandingPage from './components/LandingPage';
import Funcionalidades from './components/Funcionalidades';
import SobreNosotros from './components/SobreNosotros';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/funcionalidades" component={Funcionalidades} />
      <Route path="/sobre-nosotros" component={SobreNosotros} />
      <Route>404 - Pagina no encontrada</Route>
    </Switch>
  );
}
