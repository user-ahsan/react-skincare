import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './redux-state/CartState';
import App from './App';

test('renders Aura Botanics brand navigation', () => {
  render(
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  );
  const brandElements = screen.getAllByText(/Aura Botanics/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
