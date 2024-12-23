import Link from "next/link";

async function getCategories() {
    const data = await fetch(
        "https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060",
        {cache: "no-store"}
    ).then(res => res.json());
    return data;
}

export default async function Page() {
    // APIを並列で取得することで、パフォーマンスを向上させることができる
    const [categories, categories2] = await Promise.all([
        getCategories(),
        getCategories(),
    ]);
    console.log(categories);
    console.log(categories2);

    return (
        <div>
        <h1>カテゴリ一覧</h1>
        <ul>
            <li>
                <Link href="/categories/flower">花</Link>
            </li>
            <li>
                <Link href="/categories/animal">動物</Link>
            </li>
            <li>
                <Link href="/categories/landscape">風景</Link>
            </li>
        </ul>
        </div>
    )
}
