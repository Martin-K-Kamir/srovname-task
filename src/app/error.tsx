"use client";
import { Button } from "@/components/ui/button";

type ErrorProps = {
    reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
    return (
        <div className="grid flex-1 place-content-center space-y-4 text-center">
            <h1 className="text-xl font-bold">Opps! Something went wrong.</h1>
            <Button className="mx-auto w-fit" onClick={() => reset()}>
                Try again
            </Button>
        </div>
    );
}
