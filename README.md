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
### React Server Components(RSC)
Server Componentsのデメリットとしては、以下の2つがあります。

- ブラウザAPIが使えない
- useEffectなどReactのフックが使用できない

ファイルの先頭に`"use client"`をつけると、そのファイルはClient Componentsとして扱われる

ここらへんの理解があやふやなので、もう少し調べる
https://zenn.dev/luvmini511/articles/ec0e874a2cc1f1

### ナビゲーション
Next.jsのSPAナビゲーションはソフトナビゲーションで、ブラウザは画面を再読込せずに必要な箇所のみ再レンダリングする
App Routerでは、変更されたRoute Segmentのみ再レンダリングする

Next.jsでは、<Link>コンポーネントとuseRouter Hookでナビゲーションをすることになるので、その使い分けを理解する

open http://localhost:3000/categories/flower?page=2

## 参考
- https://zenn.dev/akfm/books/nextjs-basic-principle
