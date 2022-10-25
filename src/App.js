import React, { Suspense } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from './router';
import { UserDataContext } from './Context/UserContext';



import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { Header } from './Components/Header';
import Loading from './Components/Loading';
import Footer from './Components/Footer';

// import Cards from './Pages/Cards/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <UserDataContext>
            <Header/>
            <Router />
            <Footer />
          </UserDataContext>
        </BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
