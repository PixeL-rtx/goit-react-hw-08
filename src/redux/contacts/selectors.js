import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

// export const selectStatusFilter = (state) => state.contacts.filters.status;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, nameFilter) =>
//     contacts?.filter((contact) =>
//       contact.name.toLowerCase().includes(nameFilter?.toLowerCase())
//     )
// );

// export const selectFilteredContacts = (state) => {
//   console.log("Filtered contacts:", state.contacts.filteredContacts);
//   return Array.isArray(state.contacts.filteredContacts)
//     ? state.contacts.filteredContacts
//     : [];
// };
