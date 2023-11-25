import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
	info: unknown[];
}

const initialState: initialStateTypes = {
	info: [],
};

export const dataSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export default dataSlice.reducer;
