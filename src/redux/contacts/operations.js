import { createAsyncThunk } from "@reduxjs/toolkit";

import { goitApi } from "../../config/goitApi";

export const fetchContactThunk = createAsyncThunk(
  "fetchContact",
  async (_, thunkAPI) => {
    // const { auth } = thunkAPI.getState();
    // if (!auth.token) {
    //   return thunkAPI.rejectWithValue("not found");
    // }

    try {
      // setAuthHeader(auth.token);
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  "addContact",
  async (contact, thunkAPI) => {
    // const { auth } = thunkAPI.getState();
    // if (!auth.token) {
    //   return thunkAPI.rejectWithValue("not found");
    // }
    try {
      // setAuthHeader(auth.token);
      const { data } = await goitApi.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    // const { auth } = thunkAPI.getState();
    // if (!auth.token) {
    //   return thunkAPI.rejectWithValue("not found");
    // }
    try {
      // setAuthHeader(auth.token);
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
