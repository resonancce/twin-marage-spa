import React, {
  useEffect,
  useMemo,
  memo,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import { theme } from './assets/theme';
import Main from './components/Main';
import Header from './components/Header';
import Clients from "./components/Clients";
import FormEmail from './components/FormEmail';
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

import 'aos/dist/aos.css';
import './index.scss';
import 'normalize-scss';


// const Main = lazy(() => import('./components/Main'));
// // const Header = lazy(() => import('./components/Header'));
// const Clients = lazy(() => import('./components/Clients'));
// const FormEmail = lazy(() => import('./components/FormEmail'));
// const OurServices = lazy(() => import('./components/OurServices'));
// const AboutUs = lazy(() => import('./components/AboutUs'));
// const Footer = lazy(() => import('./components/Footer'));

const App = memo(() => {
  const [isMount, setMount] = useState(false);

  const mainClass = useMemo(
    () => `root ${isMount ? "root__opacity" : ''}`,
    [isMount]
  );

  useEffect(() => {
      setMount(true)
  },[]);



  return (
      <div className={mainClass}>
        <Header />
        <Main />
        <OurServices />
        <Clients />
        <ThemeProvider theme={theme}>
          <FormEmail />
        </ThemeProvider>
        <AboutUs />
        <Footer />
      </div>

  );
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

