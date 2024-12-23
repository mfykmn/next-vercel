import { cookies } from "next/headers";

export default function Page() {
    const cookiesStore = cookies();
    console.log(cookiesStore);
    return (
        <div>
            <h1>会社情報</h1>
        </div>
    )
}
