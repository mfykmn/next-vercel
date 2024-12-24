import { notFound } from "next/navigation";

export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{categoryName: string}>;
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}) {
    const categoryName = (await params).categoryName;
    const page = typeof (await searchParams).page === 'string' ? (await searchParams).page : '1';
    if (parseInt(page as string) == 11) {
        notFound(); // http://localhost:3000/categories/flower?page=11 not foundが出る
    } else if (parseInt(page as string) == 12) {
        throw new Error("hoge"); // http://localhost:3000/categories/flower?page=12 not foundが出る
    }

    return (
        <div>
            <h1>カテゴリ別一覧画面</h1>
            <p>カテゴリ名: {categoryName}</p>
            <p>ページ: {page}</p>
        </div>
    )
}
