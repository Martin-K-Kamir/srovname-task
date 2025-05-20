"use client";
import { create } from "zustand";
import type { UserItem } from "@/types";

type UsersState = {
    users: UserItem[];
    addUser: (user: UserItem) => void;
};

export const useUsersStore = create<UsersState>()(set => ({
    users: [],
    addUser: user => set(state => ({ users: [...state.users, user] })),
}));
