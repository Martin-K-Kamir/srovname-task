"use client";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
} from "lucide-react";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";

export function Pagination({
    className,
    ...props
}: React.ComponentProps<"nav">) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            data-slot="pagination"
            className={cn("flex w-full justify-center", className)}
            {...props}
        />
    );
}

export function PaginationContent({
    className,
    ...props
}: React.ComponentProps<"ul">) {
    return (
        <ul
            data-slot="pagination-content"
            className={cn("flex flex-row items-center gap-1", className)}
            {...props}
        />
    );
}

export function PaginationItem({ ...props }: React.ComponentProps<"li">) {
    return <li data-slot="pagination-item" {...props} />;
}

type PaginationButtonProps = {
    href: string;
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Link>, "href"> &
    React.ComponentProps<"a">;

export function PaginationButton({
    className,
    isActive,
    href,
    ...props
}: PaginationButtonProps) {
    return (
        <Button
            asChild
            className={cn(
                buttonVariants({
                    variant: "outline",
                    size: "icon",
                }),
                "size-8",
                className,
            )}
            disabled={isActive}
        >
            <Link
                aria-current={isActive ? "page" : undefined}
                data-slot="pagination-button"
                data-active={isActive}
                aria-disabled={isActive}
                tabIndex={isActive ? -1 : 0}
                href={href}
                {...props}
            />
        </Button>
    );
}

export function PaginationPrevious({
    className,
    ...props
}: PaginationButtonProps) {
    return (
        <PaginationButton
            aria-label="Go to previous page"
            className={className}
            {...props}
        >
            <ChevronLeftIcon />
        </PaginationButton>
    );
}

export function PaginationNext({ className, ...props }: PaginationButtonProps) {
    return (
        <PaginationButton
            aria-label="Go to next page"
            className={className}
            {...props}
        >
            <ChevronRightIcon />
        </PaginationButton>
    );
}

export function PaginationFirst({
    className,
    ...props
}: PaginationButtonProps) {
    return (
        <PaginationButton
            aria-label="Go to first page"
            className={className}
            {...props}
        >
            <ChevronsLeftIcon />
        </PaginationButton>
    );
}

export function PaginationLast({ className, ...props }: PaginationButtonProps) {
    return (
        <PaginationButton
            aria-label="Go to last page"
            className={className}
            {...props}
        >
            <ChevronsRightIcon />
        </PaginationButton>
    );
}

export function CompactPagination({
    totalPages,
    ...props
}: React.ComponentProps<typeof Pagination> & {
    totalPages: number;
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const currentPage = Number(searchParams.get("page") ?? "1");
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === 2;

    function createPageUrl(page: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        return `${pathname}?${params.toString()}`;
    }

    return (
        <Pagination {...props}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationFirst
                        href={createPageUrl(1)}
                        isActive={isFirstPage}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationPrevious
                        href={createPageUrl(currentPage - 1)}
                        isActive={isFirstPage}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        href={createPageUrl(currentPage + 1)}
                        isActive={isLastPage}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLast
                        href={createPageUrl(totalPages)}
                        isActive={isLastPage}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
