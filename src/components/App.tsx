import './App.css';
import { Container, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import AddButton from './AddButton';
import AddressBookTable from './AddressBookTable';
import useUsers from './useUsers';
import { useState } from 'react';
import AddOrUpdate from '../models/addOrUpdate';
import UserForm from './UserForm';

const App = () => {
  const { filteredUsers, searchText, setSearchText, addUser, updateUser, removeUser } = useUsers();
  const [addOrUpdate, setAddOrUpdate] = useState(AddOrUpdate.Add);
  const [currentUserId, setCurrentUserId] = useState(0);
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);

  const openUserDialog = () => {
    setAddUserDialogOpen(true);
  }

  const closeUserDialog = () => {
    setAddUserDialogOpen(false);
  }

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-around" spacing={5}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <AddButton onClick={openUserDialog} />
        </Stack>
        <AddressBookTable users={filteredUsers} removeUser={removeUser} openUserDialog={openUserDialog} />
      </Container>
      <UserForm
        open={addUserDialogOpen}
        handleClose={closeUserDialog}
        addUser={addUser}
        updateUser={(name: string, phone: string, email: string) => updateUser(currentUserId, name, phone, email)}
        addOrUpdate={addOrUpdate}
      />
    </>
  );
}

export default App;
