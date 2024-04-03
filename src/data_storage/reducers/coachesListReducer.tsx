import { createSlice } from '@reduxjs/toolkit';

export const coachesList = createSlice({
    name: 'coachesList',
    initialState: {
        dummyCoaches: [
            { name: 'Miracle Eugene', id: "1", image: 'https://randomuser.me/api/portraits/men/77.jpg' },
            { name: 'Stephen Hawking', id: "2", image: 'https://randomuser.me/api/portraits/men/78.jpg' },
            { name: 'Obi ukwe', id: "3", image: 'https://randomuser.me/api/portraits/men/79.jpg' },
            { name: 'Bryan James', id: "4", image: 'https://randomuser.me/api/portraits/men/70.jpg' },
            { name: 'Paul Cubasi', id: "5", image: 'https://randomuser.me/api/portraits/men/71.jpg' },
            { name: 'Fred Biker', id: "6", image: 'https://randomuser.me/api/portraits/men/72.jpg' },
            { name: 'Roser Dani', id: "7", image: 'https://randomuser.me/api/portraits/men/73.jpg' },
            { name: 'Vester Bunre', id: "8", image: 'https://randomuser.me/api/portraits/men/74.jpg' },
            { name: 'James Alen', id: "9", image: 'https://randomuser.me/api/portraits/men/75.jpg' }
        ]
    },
    reducers: {
        removeCoach: (state) => {

        },
    },
});

export const { removeCoach } = coachesList.actions;

export default coachesList.reducer;