# next-vercel
Next.js + Vercelの勉強用

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

#### AppRouterのSegment構成ファイルの命名規則
この命名に則っているファイルがあるとAppRouterが勝手に読み込んでくれる
https://nextjs.org/docs/app/getting-started/project-structure#routing-files

#### Suspense と Error Boundary
React Suspenseは、子が読み込みを完了するまでフォールバックUIを表示する機能
Error Boundaryは、子コンポーネントでエラーがすろーされた場合にフォールバックUIを表示する機能

### React Server Components(RSC)
Server Componentはサーバーサイドでのみ実行されるコンポーネントのこと

- デメリット
  - ブラウザAPIが使えない
  - useEffectなどReactのフックが使用できない
- メリット
  - サーバーサイドにおけるデータ取得

AppRouter内で実装されるReactコンポーネントは、何も宣言しなければデフォルトですべてのコンポーネントがServer Componentsとして扱われる

#### 動的データ取得と静的データ取得
- 動的データ取得
  - 閲覧履歴
  - 商品在庫数
- 静的データ取得
  - 商品概要
  - ブログ記事
  - ニュース記事

Next.jsではfetchが拡張されていて、何も指定しなければデフォルトで静的データ取得として扱われキャッシュされる
動的取得するには fetch("http://...", {cache: "no-store"}) とする

npm run devではキャッシュの動作は正常な挙動をしないので、動作確認したい場合はbuildしてからnpm run startで実行する必要がある

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

### Route
Routeごとにレンダリング手法を選択できる
- 静的レンダリングRoute
  - すべてのリクエストで同一のレンダリング結果を返す
  - SSG/ISR
  - CDNでキャッシュされる
- 動的レンダリングRoute
  - リクエストごとに異なるレンダリング結果を返す
  - SSR

Next.jsでは、デフォルトでは静的レンダリングRouteとして扱われる
以下の要因が含まれると自動的に動的レンダリングRouteとして扱われる
- 動的データ取得の使用
  - fetch("http://...", {cache: "no-store"})
  - つまり静的データ取得はビルド時のデータで静的ファイルが生成されてデリバリされる？次回デリバリが走らないとデータは更新されない？
- 動的関数の使用
  - HTTPリクエストの内容を参照する関数のこと
  - Cookieやヘッダーの参照
    - Server Componentでcookies()を使用する
    - Server Componentでheaders()を使用する
  - URL検索パラメータの参照
    - Server ComponentでPropsのsearchParamsを使用する
    - Client ComponentでuseSearchParams()を使用する
- Dynamic Segmentの使用
  - /categories[categoryName]のようなパスの一部を動的にする

build時にどれが静的レンダリングRouteか動的レンダリングRouteかを確認できる
```bash
Route (app)                              Size     First Load JS
┌ ○ /                                    5.62 kB         111 kB
├ ○ /_not-found                          979 B           106 kB
├ ƒ /categories                          172 B           109 kB
├ ƒ /categories/[categoryName]           139 B           105 kB
├ ○ /company-info                        139 B           105 kB
└ ƒ /photos/[photoId]                    322 B           106 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```
## 参考
- https://zenn.dev/akfm/books/nextjs-basic-principle
