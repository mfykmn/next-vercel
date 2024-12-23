
export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{categoryName: string}>;
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}) {
    const categoryName = (await params).categoryName;
    const page = typeof (await searchParams).page === 'string' ? (await searchParams).page : '1';

    return (
        <div>
            <h1>カテゴリ別一覧画面</h1>
            <p>カテゴリ名: {categoryName}</p>
            <p>ページ: {page}</p>
        </div>
    )
}
