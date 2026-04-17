# myblog

Astro + React + Tailwind CSS ベースの個人ブログです。

## 実行コマンド

| Command | 用途 |
| :-- | :-- |
| `pnpm install` | 依存関係のインストール |
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド作成 |
| `pnpm preview` | ビルド結果の確認 |
| `pnpm astro check` | 型・Astro 診断チェック |

## 全ファイルと用途

### ルート

| ファイル | 用途 |
| :-- | :-- |
| `.vscode/settings.json` | VS Code のワークスペース設定（CSS 警告調整など） |
| `astro.config.mjs` | Astro 本体設定（サイト URL、統合、sitemap/robots） |
| `biome.json` | Biome のフォーマット/リンタ設定 |
| `components.json` | shadcn/ui 系コンポーネント管理設定 |
| `package.json` | プロジェクト定義、依存関係、スクリプト |
| `pnpm-lock.yaml` | 依存関係のロックファイル |
| `pnpm-workspace.yaml` | pnpm ワークスペース設定 |
| `README.md` | このプロジェクトの説明書 |
| `tsconfig.json` | TypeScript コンパイラ設定 |

### public

| ファイル | 用途 |
| :-- | :-- |
| `public/favicon.svg` | サイトのファビコン |
| `public/fonts/IchigoJam-1.4.woff` | IchigoJam フォントファイル |
| `public/images/page-title/title-bg.png` | ページタイトル背景画像（保存先） |
| `public/ogp.png` | OGP 画像 |
| `public/title-bg.png` | タイトル背景として実際に参照している画像 |

### src/components/Base

| ファイル | 用途 |
| :-- | :-- |
| `src/components/Base/Footer.astro` | フッター表示 |
| `src/components/Base/Header.astro` | ヘッダーナビゲーション（Home/Blog/Author） |
| `src/components/Base/HeaderMotionWrapper.tsx` | スクロール連動のヘッダー表示アニメーション |

### src/components/Blog

| ファイル | 用途 |
| :-- | :-- |
| `src/components/Blog/AuthorInfo.astro` | 記事ページ著者情報 |
| `src/components/Blog/BlogCard.astro` | 記事一覧カード 1 件分 |
| `src/components/Blog/BlogCardWrapper.astro` | 記事カードのレイアウトラッパー |
| `src/components/Blog/Breadcrumb.astro` | パンくずナビ |
| `src/components/Blog/ShareButtons.astro` | SNS シェアボタン群 |
| `src/components/Blog/TableOfContents.tsx` | 目次表示とスクロール追従 |
| `src/components/Blog/TagSearchBar.astro` | タグ検索バーの Astro 側ラッパー |
| `src/components/Blog/TagSearchBar.tsx` | タグ検索 UI（ダイアログ・絞り込み） |

### src/components/SEO

| ファイル | 用途 |
| :-- | :-- |
| `src/components/SEO/JsonLd.astro` | JSON-LD 構造化データ出力 |

### src/components/Top

| ファイル | 用途 |
| :-- | :-- |
| `src/components/Top/AuthorCard.tsx` | トップページの著者カード |
| `src/components/Top/BlogSelector.tsx` | トップページの導線 UI |
| `src/components/Top/MainVisual.astro` | トップページのメインビジュアル・タイトル |

### src/components/ui

| ファイル | 用途 |
| :-- | :-- |
| `src/components/ui/bounce-text.tsx` | 文字ごとのバウンス見出しアニメーション |
| `src/components/ui/button.tsx` | 汎用ボタン UI |
| `src/components/ui/click-shatter-block.tsx` | クリック時演出付きブロック UI |
| `src/components/ui/dialog.tsx` | ダイアログ UI コンポーネント |
| `src/components/ui/dropdown-menu.tsx` | ドロップダウンメニュー UI |
| `src/components/ui/facebook.tsx` | Facebook アイコン/リンク UI |
| `src/components/ui/ichigojam.tsx` | IchigoJam 表示向けタイポグラフィユーティリティ |
| `src/components/ui/mode-toggle.tsx` | テーマ切替 UI（現状は未使用） |
| `src/components/ui/twitter.tsx` | X(Twitter) アイコン/リンク UI |
| `src/components/ui/typewriter.tsx` | タイプライター風テキストアニメーション |

### src/content

| ファイル | 用途 |
| :-- | :-- |
| `src/content/config.ts` | コンテンツコレクション定義 |
| `src/content/blog/first-post.mdx` | サンプル記事コンテンツ |
| `src/content/blog/images/first-post.png` | サンプル記事の画像 |

### src/layouts

| ファイル | 用途 |
| :-- | :-- |
| `src/layouts/BaseLayout.astro` | 全ページ共通レイアウト（SEO・ヘッダー・フッター） |
| `src/layouts/BlogLayout.astro` | 記事詳細ページ用レイアウト |
| `src/layouts/GridLayout.astro` | 横幅・余白調整の共通ラッパー |
| `src/layouts/TopLayout.astro` | トップページ専用レイアウト |

### src/lib

| ファイル | 用途 |
| :-- | :-- |
| `src/lib/constants.ts` | 定数定義 |
| `src/lib/utils.ts` | 共通ユーティリティ（`cn` など） |

### src/pages

| ファイル | 用途 |
| :-- | :-- |
| `src/pages/index.astro` | トップページ |
| `src/pages/license.astro` | ライセンス情報ページ |
| `src/pages/blog/index.astro` | ブログ一覧ページ |
| `src/pages/blog/[tag].astro` | タグ別一覧ページ |
| `src/pages/blog/[...slug].astro` | 記事詳細ページ（動的ルーティング） |

### src/styles / 型定義

| ファイル | 用途 |
| :-- | :-- |
| `src/styles/global.css` | 全体スタイル、テーマ変数、共通装飾 |
| `src/env.d.ts` | Astro クライアント型参照 |

