# next-vercel


# 開発環境構築
```bash
npx create-next-app@latest
npm run dev
```

今回、データフェッチはClient Componentsではなく、Server Componentsを使う
Vercelにデプロイする


```bash
npm run lint
```

## デプロイ

```bash
npm run build
npm run start
npx vercel
```

## メモ
### ディレクトリ構造
- https://nextjs.org/docs/app/getting-started/project-structure

### App Router
app ディレクトリの配下にファイルを配置するだけで、ページが作成できる
Server Componentsを使う前提になる

Next.jsのSPAナビゲーションはソフトナビゲーションで、ブラウザは画面を再読込せずに必要な箇所のみ再レンダリングする
App Routerでは、変更されたRoute Segmentのみ再レンダリングする

Next.jsでは、<Link>コンポーネントとuseRouter Hookでナビゲーションをすることになるので、その使い分けを理解する

open http://localhost:3000/categories/flower?page=2

機能
- React Server Components
- Nested Routes & Layouts
- Streaming & Suspense

### React Server Components(RSC)
Server Componentはサーバーサイドでのみ実行されるコンポーネントのこと

- デメリット
  - ブラウザAPIが使えない
  - useEffectなどReactのフックが使用できない
- メリット
  - サーバーサイドにおけるデータ取得

AppRouter内で実装されるReactコンポーネントは、何も宣言しなければデフォルトですべてのコンポーネントがServer Componentsとして扱われる


### React Client Components(RCC)
Client Componentsはブラウザ/サーバー両方で実行されるコンポーネントのこと
ハイドレーション

ファイルの先頭に`"use client"`をつけると、そのファイルはClient Componentsとして扱われる

注意点はClient Componentからimportされるコンポーネントや関連ファイルもブラウザ向けにバンドルされる(Client Componentになる)

ここらへんの理解があやふやなので、もう少し調べる
https://zenn.dev/luvmini511/articles/ec0e874a2cc1f1

### RSCとRCCの使い分け
- Server Componentを使うべきケース
  - データフェッチ
  - バックエンドリソースを取得する
  - 機密情報を扱う
- Client Componentを使うべきケース
  - ユーザーインタラクション
  - コンポーネントに保持した状態を扱う
  - ブラウザ専用のAPIを使用する
  - ブラウザ専用のHooksを使用する
  - React Classコンポーネントを使用する

## 参考
- https://zenn.dev/akfm/books/nextjs-basic-principle
