"use client";
import { cn } from "@/utils";

export function Input({
    className,
    type,
    ...props
}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-9 w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 text-base text-zinc-50 ring-zinc-300/30 transition-[color,box-shadow] outline-none selection:bg-zinc-50 selection:text-zinc-900 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-rose-700 aria-invalid:ring-rose-700 aria-invalid:focus-visible:ring-2 md:text-sm",
                className,
            )}
            {...props}
        />
    );
}
