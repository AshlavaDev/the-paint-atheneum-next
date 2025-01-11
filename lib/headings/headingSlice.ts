import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HeadingData {
  heading: string
  subHeading: string
}

const initialState: HeadingData = {
  heading: 'Page Heading',
  subHeading: 'Page Subheading',
}

const headingSlice = createSlice({
  name: 'heading',
  initialState,
  reducers: {
    setHeadingData(state, action: PayloadAction<HeadingData>) {
      state.heading = action.payload.heading
      state.subHeading = action.payload.subHeading
    },
  },
})

export const { setHeadingData } = headingSlice.actions
export default headingSlice.reducer
