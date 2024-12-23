import Link from "next/link";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">トップ</Link>
                </li>
                <li>
                    <Link href="/categories">カテゴリ一覧</Link>
                </li>
                <li>
                    <Link href="/company-info">会社情報</Link>
                </li>
                <li>
                    <Link href="/photos/1">写真詳細</Link>
                </li>
            </ul>
        </nav>
    )
}
