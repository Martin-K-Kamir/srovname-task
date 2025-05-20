"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/utils";

export function Dialog({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogPortal({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

export function DialogClose({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export function DialogOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot="dialog-overlay"
            className={cn(
                "fixed inset-0 z-50 grid max-h-svh place-items-center overflow-y-auto bg-black/70 py-6 backdrop-blur-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 lg:py-8",
                className,
            )}
            {...props}
        />
    );
}

export function DialogContent({
    className,
    classNameOverlay,
    children,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
    classNameOverlay?: string;
}) {
    return (
        <DialogPortal data-slot="dialog-portal">
            <DialogOverlay className={classNameOverlay}>
                <DialogPrimitive.Content
                    className={cn(
                        "relative z-50 grid w-[calc(100%-2rem)] max-w-lg gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg ring-zinc-700 duration-200 outline-none focus-visible:ring-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 lg:p-6",
                        className,
                    )}
                    data-slot="dialog-content"
                    {...props}
                >
                    {children}
                </DialogPrimitive.Content>
            </DialogOverlay>
        </DialogPortal>
    );
}

export function DialogHeader({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-header"
            className={cn("flex flex-col gap-2 text-left", className)}
            {...props}
        />
    );
}

export function DialogFooter({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn(
                "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                className,
            )}
            {...props}
        />
    );
}

export function DialogTitle({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn("leading-none font-semibold text-zinc-50", className)}
            {...props}
        />
    );
}

export function DialogDescription({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn("text-sm text-zinc-300", className)}
            {...props}
        />
    );
}
