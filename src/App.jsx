import { RouterProvider} from 'react-router-dom';
import { router } from './router.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


// Styles
import './styles/app.scss';


export function App() {

  return (
    <Provider store={store}>
        <RouterProvider router={router} >
        </RouterProvider>
    </Provider>
  );
}
