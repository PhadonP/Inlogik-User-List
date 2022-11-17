import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface SearchBarProps {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
}

const SearchBar = ({ searchText, setSearchText }: SearchBarProps) => {
    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    return (
        <TextField
            margin="dense"
            id="search"
            label="Search..."
            value={searchText}
            onChange={handleSearchTextChange}
            fullWidth
            variant="standard"
        />
    )
};

export default SearchBar;