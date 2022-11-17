import { Button } from "@mui/material";

interface AddButtonProps {
    onClick: () => void
}

const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <Button variant="contained" onClick={onClick}>Add</Button>
    )
};

export default AddButton;