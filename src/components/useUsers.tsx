import { useEffect, useState } from 'react';
import User from "../models/user";

const useUsers = () => {
    // instead of using an just an empty array as the initial state - we can use a function in its place,
    // which will only be executed on the initial render
    // reference: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [users, setUsers] = useState<User[]>(() => {
        const savedUsers = localStorage.getItem("users");
        if (savedUsers) {
            return JSON.parse(savedUsers);
        }
        return [];
    });
    const [searchText, setSearchText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const filterUsers = () => {
        setFilteredUsers(users.filter(user => user.name.startsWith(searchText)));
    };

    useEffect(() => {
        filterUsers();
    }, [searchText, filterUsers]);

    useEffect(() => {
        filterUsers();
    }, [users, filterUsers]);

    const addUser = (name: string, phone: string, email: string) => {
        const newUser: User = {
            id: users.length + 1, //This won't generate a unique id but is a placeholder for now
            name,
            phone,
            email
        };

        setUsers([...users, newUser]);
    };

    const updateUser = (id: number, name: string, phone: string, email: string) => {
        const newUser: User = {
            id,
            name,
            phone,
            email
        };

        setUsers(users.map(user => user.id === id ? newUser : user));
    };

    const removeUser = (id: number) => {
        setUsers(users.filter(user => id !== user.id));
    };

    return { filteredUsers, searchText, setSearchText, addUser, updateUser, removeUser };
};

export default useUsers;