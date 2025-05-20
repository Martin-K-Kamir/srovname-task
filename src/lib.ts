export type ApiUser = {
    id: number;
    name: string;
    email: string;
};

// export type ApiUserResponse = {
//     totalPages: number;
//     data: ApiUser[];
// };

// function wait(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function getUsers(): Promise<ApiUser[]> {
    // `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`,
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();

    // const data = await res.json();

    // const totalCount = res.headers.get("x-total-count");

    // return {
    //     totalPages: Math.ceil(Number(totalCount) / limit),
    //     data,
    // };
}
