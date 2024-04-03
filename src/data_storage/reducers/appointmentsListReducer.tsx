import { createSlice } from '@reduxjs/toolkit';

export const appointmentsList = createSlice({
    name: 'appointmentsList',
    initialState: {
        dummyAppointments: [
            { coachName: 'James Alen', id: "1", image: 'https://randomuser.me/api/portraits/men/77.jpg', date: '05/04/2024', time: '11:00:00', location: 'Ojota', duration: '2', extraInfo: '' },
        ]
    },
    reducers: {
        addAppointment: (state, action) => {
            state.dummyAppointments.push({
                coachName: action.payload.coachName,
                id: action.payload.id,
                image: action.payload.image,
                date: action.payload.date,
                duration: action.payload.duration,
                location: action.payload.location,
                time: action.payload.time,
                extraInfo: action.payload.extraInfo
            })
        },
        removeAppointment: (state, action) => {
            state.dummyAppointments = state.dummyAppointments.filter((item) => item?.id != action.payload)
        },
    },
});

export const { addAppointment, removeAppointment } = appointmentsList.actions;

export default appointmentsList.reducer;