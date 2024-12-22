// "use client";
// import { useRouter } from "next/router";

type Props = {
    params: {categoryName: string};
    searchParams: {[key: string]: string | string[] | undefined};
}

export default function Page({params, searchParams}: Props) {
    const page = typeof searchParams.page === 'string' ? searchParams.page : '1';
    //const router = useRouter();

    return (
        <div>
            <h1>カテゴリ別一覧画面</h1>
            <p>カテゴリ名: {params.categoryName}</p>
            <p>ページ: {page}</p>
            {/* <button onClick={
                () => {
                    router.push('/categories');
                }
            }>
                カテゴリ一覧へ戻る
            </button> */}
        </div>
    )
}
