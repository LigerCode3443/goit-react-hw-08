import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactThunk } from "../redux/contactsOps";
import {
  ContactForm,
  ContactList,
  Container,
  Loader,
  SearchBox,
} from "components";
import {
  selectContacts,
  selectFilteredMemo,
  selectIsError,
  selectIsLoading,
} from "../redux/contactSlice";

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilteredMemo);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {contacts.length > 0 && !isError && (
        <ContactList contacts={filterContacts} />
      )}
      {!contacts.length && !isLoading && !isError && (
        <span className="title">No contact </span>
      )}
      {contacts.length === 0 && contacts.length !== 0 && (
        <span className="title">Contact is not defiant</span>
      )}

      {isError && <span className="title">Error: {isError}</span>}
    </Container>
  );
};
