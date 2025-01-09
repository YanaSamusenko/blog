import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestPostsList } from '../services/posts'

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const data = await requestPostsList();
        return data 
    })

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        like: (state, action) => {
            const postId = action.payload;
            const postIndex = state.posts.findIndex(post => post.id === postId);
            state.posts[postIndex].rating = state.posts[postIndex].rating + 1;
            
          },
          
          dislike: (state, action) => {
            const postId = action.payload;
            const postIndex = state.posts.findIndex(post => post.id === postId);
            state.posts[postIndex].rating = state.posts[postIndex].rating - 1;
            
          },

        favorite: (state, action) => {
            const postId = action.payload;
            const postIndex = state.posts.findIndex(post => post.id === postId);
            state.posts[postIndex].favorite = !state.posts[postIndex].favorite;
            
        }
    }, 
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message;
          })
      }
                });


export const {
    like,
    dislike,
    favorite
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
