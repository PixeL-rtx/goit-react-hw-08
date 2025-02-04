import { createSelector } from "@reduxjs/toolkit";

import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (store) => store.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
