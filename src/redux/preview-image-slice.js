import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShownModal: false,
    data: {},
};

export const previewImageSlice = createSlice({
    name: 'previewImage',
    initialState,
    reducers: {
        showPreviewModal: (state) => {
            state.isShownModal = true;
        },
        hidePreviewModal: (state) => {
            state.isShownModal = false;
        },
        setPreviewData: (state, action) => {
            state.data = action.payload;
        },
        resetPreviewData: (state) => {
            state.data = {}
        },
    },
});

export const { showPreviewModal, hidePreviewModal, setPreviewData, resetPreviewData } = previewImageSlice.actions;

export const previewImageReducer = previewImageSlice.reducer