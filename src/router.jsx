import { createBrowserRouter } from 'react-router-dom';
import {Main} from './pages/Main';
import {Posts} from './pages/Posts';
import {SignIn} from './pages/SignIn';
import { Layout } from './components/Layout';
import { SignUp } from './pages/SignUp';
import { SelectedPost } from './pages/SelectedPost';
import { PostsAll } from './pages/PostsAll';
import { PostsFavorite } from './pages/PostsFavorite';
import { PostsPopular } from './pages/PostsPopular';
import { SignUpConfirm } from './pages/SignUpConfirm';



export const router = createBrowserRouter([
 {
    element: <Layout />,
    children: [
      {
       path: '/',
       element: <Main />,
    },
    {
      path: '/posts',
      element: <Posts />,
      children: [
        {path: 'all',
          element: <PostsAll />
        },
        {
          path: 'favorite',
          element: <PostsFavorite />
        },
        {
          path: 'popular',
          element: <PostsPopular />
        },
      ]
    },
    {
      path: 'auth/signin',
      element: <SignIn />,
    },

    {
      path: 'auth/signup',
      element: <SignUp />,
    },

    {
      path: 'auth/confirm',
      element: <SignUpConfirm />,
    },

    { 
      path : 'posts/:postid',
      element: <SelectedPost />,
    }
]
}
  ]);
  