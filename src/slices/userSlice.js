import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:'',
  email:'',
  phone:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    register: (state, action) => {
        state.name = action.payload.name
        state.email = action.payload.email
        state.phone = action.payload.phone
    }

  },
})

// Action creators are generated for each case reducer function
export const { register } = userSlice.actions

export default userSlice.reducer