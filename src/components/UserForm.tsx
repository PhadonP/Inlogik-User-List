import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AddOrUpdate from '../models/addOrUpdate';

interface AddUserFormProps {
    open: boolean,
    handleClose: () => void,
    addUser: (name: string, phone: string, email: string) => void
    updateUser: (name: string, phone: string, email: string) => void,
    addOrUpdate: AddOrUpdate
}

const UserForm = ({ open, handleClose, addUser, updateUser, addOrUpdate }: AddUserFormProps) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const clearInputs = () => {
        setName("");
        setPhone("");
        setEmail("");
    }

    const onCancelButtonClick = () => {
        clearInputs();
        handleClose();
    };

    const onSaveButtonClick = () => {
        if (addOrUpdate === AddOrUpdate.Add) {
            addUser(name, phone, email);
        }
        else if (addOrUpdate === AddOrUpdate.Update) {
            updateUser(name, phone, email);
        }
        clearInputs();
        handleClose();
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Contact</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        value={name}
                        onChange={handleNameChange}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        id="phone"
                        label="Phone Number"
                        value={phone}
                        onChange={handlePhoneChange}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancelButtonClick}>Cancel</Button>
                    <Button onClick={onSaveButtonClick}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UserForm;