import { configureStore } from '@reduxjs/toolkit';
import { langReducer } from './lang-slice';
import {  previewImageReducer } from './preview-image-slice';
import { postsReducer } from './posts-slice';
import { authReducer } from './auth-slice';

export const store = configureStore({
    reducer: {
    lang: langReducer,
    previewImage: previewImageReducer ,
    posts: postsReducer,
    auth: authReducer,
    },
});


