import { LoaderCircleIcon } from "lucide-react";
import { Suspense } from "react";
import { logout } from "@/actions";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LoginDialog } from "@/features/auth/login-dialog";
import { UsersPreview } from "@/features/users/users-preview";

export default async function Page() {
    const session = await auth();

    return (
        <main className="mx-auto w-full max-w-4xl space-y-4 px-8 py-12">
            <div className="flex items-center justify-between gap-4">
                <h1 className="text-lg font-semibold">
                    Hello, {session?.user ? session.user.name : "User"}!
                </h1>

                {session?.user ? (
                    <Button variant="ghost" onClick={logout}>
                        Log out
                    </Button>
                ) : (
                    <LoginDialog>
                        <Button variant="ghost">Login</Button>
                    </LoginDialog>
                )}
            </div>
            <Separator />
            <Suspense
                fallback={
                    <div className="grid min-h-[12.6875rem] place-content-center">
                        <LoaderCircleIcon className="size-8 origin-center animate-spin text-zinc-50" />
                    </div>
                }
            >
                <UsersPreview />
            </Suspense>
        </main>
    );
}

// import { Separator } from "@/components/ui/separator";
// import { UsersPreview } from "@/features/users/users-preview";
// import { LoaderCircleIcon } from "lucide-react";
// import { Suspense } from "react";

// export default async function Page(props: {
//     searchParams?: Promise<{
//         query?: string;
//         page?: string;
//     }>;
// }) {
//     const searchParams = await props.searchParams;
//     const currentPage = Number(searchParams?.page) || 1;

//     return (
//         <div className="">
//             <main className="mx-auto max-w-4xl space-y-4 px-8 py-12">
//                 <h1 className="text-lg font-semibold">Hello, User!</h1>
//                 <Separator />
//                 <Suspense
//                     key={currentPage}
//                     fallback={
//                         <div className="grid min-h-[12.6875rem] place-content-center">
//                             <LoaderCircleIcon className="size-8 origin-center animate-spin text-zinc-50" />
//                         </div>
//                     }
//                 >
//                     <UsersPreview page={currentPage} />
//                 </Suspense>
//             </main>
//         </div>
//     );
// }
