import { getUsers } from "@/lib";
import { UsersList } from "@/features/users/users-list";
import { Button } from "@/components/ui/button";
import { CreateNewUserDialog } from "@/features/users/create-new-user-dialog";
import { auth } from "@/auth";
import { LoginDialog } from "@/features/auth/login-dialog";

export async function UsersPreview() {
    const [users, session] = await Promise.all([getUsers(), auth()]);

    return (
        <UsersList initialUsers={users}>
            {session?.user ? (
                <CreateNewUserDialog>
                    <Button>Add User</Button>
                </CreateNewUserDialog>
            ) : (
                <LoginDialog
                    title="Login to add a new user"
                    description="Please login to add a new user."
                >
                    <Button>Add User</Button>
                </LoginDialog>
            )}
        </UsersList>
    );
}

// import { CompactPagination } from "@/components/ui/pagination";
// import { Separator } from "@/components/ui/separator";
// import { getUsers } from "@/lib";
// import { UsersList } from "@/features/users/users-list";
// import { cn } from "@/utils";
// import { Button } from "@/components/ui/button";
// import {
//     CreateNewUserDialog,
//     CreateNewUserDialogTrigger,
// } from "@/features/users/create-new-user-dialog";

// export async function UsersPreview({
//     page = 1,
//     limit = 6,
//     className,
//     ...props
// }: Omit<React.ComponentProps<"div">, "children"> & {
//     page?: number;
//     limit?: number;
//     classNameItem?: string;
// }) {
//     const users = await getUsers(page, limit);

//     return (
//         <div className={cn("space-y-4", className)} {...props}>
//             <UsersList data={users.data} />
//             <Separator />
//             <div className="flex items-center justify-between">
//                 <CreateNewUserDialog>
//                     <CreateNewUserDialogTrigger asChild>
//                         <Button>Add User</Button>
//                     </CreateNewUserDialogTrigger>
//                 </CreateNewUserDialog>
//                 <CompactPagination
//                     totalPages={users.totalPages}
//                     className="justify-end"
//                 />
//             </div>
//         </div>
//     );
// }
