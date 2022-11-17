import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import User from "../models/user";

interface AddressBookProps {
    users: User[],
    removeUser: (id: number) => void
    openUserDialog: () => void
}

const AddressBookTable = ({ users, removeUser, openUserDialog }: AddressBookProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell component="th" scope="row" onClick={openUserDialog}>
                                {user.name}
                            </TableCell>
                            <TableCell align="right" onClick={openUserDialog}>{user.phone}</TableCell>
                            <TableCell align="right" onClick={openUserDialog}>{user.email}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" onClick={() => removeUser(user.id)}>Remove</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
};

export default AddressBookTable;