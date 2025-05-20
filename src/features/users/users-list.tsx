"use client";
import {
    ListPagination,
    ListPaginationButtons,
    ListPaginationContent,
    ListPaginationCounter,
} from "@/components/ui/list-pagination";
import { Separator } from "@/components/ui/separator";
import { useUsersStore } from "@/features/users/hooks";
import type { UserItem } from "@/types";
import { cn } from "@/utils";

export type UsersListProps = {
    initialUsers: UserItem[];
    classNameItem?: string;
    limit?: number;
} & React.ComponentProps<"ul">;

export function UsersList({
    initialUsers,
    limit = 6,
    className,
    classNameItem,
    children,
    ...props
}: UsersListProps) {
    const newUsers = useUsersStore(state => state.users);
    const users = [...newUsers, ...initialUsers];

    if (users.length === 0) {
        return <p className="text-sm text-zinc-400">No users.</p>;
    }

    return (
        <ListPagination
            className="space-y-4"
            length={users.length}
            limit={limit}
        >
            <ListPaginationContent
                {...props}
                className={cn("grid gap-4 lg:grid-cols-2", className)}
                items={users}
                renderItem={user => (
                    <li
                        key={user.id}
                        className={cn("space-y-0.5", classNameItem)}
                    >
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-zinc-400">{user.email}</p>
                    </li>
                )}
            />

            <Separator />

            <div className="flex flex-wrap items-center justify-between gap-4">
                {children}

                <div className="flex items-center gap-4">
                    <ListPaginationCounter />
                    <ListPaginationButtons />
                </div>
            </div>
        </ListPagination>
    );
}
