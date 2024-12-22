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
デメリットとしては、以下の2つがあります。

ブラウザAPIが使えない
useEffectなどReactのフックが使用できない




### ナビゲーション
Next.jsのSPAナビゲーションはソフトナビゲーションで、ブラウザは画面を再読込せずに必要な箇所のみ再レンダリングする
App Routerでは、変更されたRoute Segmentのみ再レンダリングする

Next.jsでは、<Link>コンポーネントとuseRouter Hookでナビゲーションをすることになるので、その使い分けを理解する

## 参考
- https://zenn.dev/akfm/books/nextjs-basic-principle
