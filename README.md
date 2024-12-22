# next-vercel


# 環境構築
```bash
npx create-next-app@latest
npm run dev
```

今回、データフェッチはClient Componentsではなく、Server Componentsを使う
Vercelにデプロイする

## デプロイ

```bash
npx vercel
```

## メモ
### React Server Components(RSC)
デメリットとしては、以下の2つがあります。

ブラウザAPIが使えない
useEffectなどReactのフックが使用できない


App Router

## 参考
- https://zenn.dev/akfm/books/nextjs-basic-principle
