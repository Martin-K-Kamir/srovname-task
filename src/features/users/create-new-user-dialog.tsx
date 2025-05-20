"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CreateNewUserForm } from "@/features/users/create-new-user-form";
import { useState } from "react";

export function CreateNewUserDialog({
    children,
    ...props
}: React.ComponentProps<typeof Dialog>) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog {...props} open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="gap-6">
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>
                        Fill in the details to create a new user.
                    </DialogDescription>
                </DialogHeader>
                <CreateNewUserForm onSubmit={() => setIsOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
