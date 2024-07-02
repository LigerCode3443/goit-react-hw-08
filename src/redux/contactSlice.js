import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactThunk,
} from "./contactsOps";
import { selectFilter } from "./filterSlice";
const initialState = {
  contacts: [],
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "contact",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.isError,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContactThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactThunk.fulfilled,
          deleteContactThunk.fulfilled,
          addContactThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const selectFilteredMemo = createSelector(
  [slice.selectors.selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactSlice = slice.reducer;
export const { selectContacts, selectIsLoading, selectIsError } =
  slice.selectors;
export const { setCurrentContact } = slice.actions;
