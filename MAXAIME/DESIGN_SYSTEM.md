# 禅チャット - 集中型学習チャットアプリ デザインシステム

## 目次
1. [設計理念](#設計理念)
2. [カラーシステム](#カラーシステム)
3. [タイポグラフィ](#タイポグラフィ)
4. [レイアウト・グリッド](#レイアウトグリッド)
5. [コンポーネント](#コンポーネント)
6. [インタラクション](#インタラクション)
7. [アクセシビリティ](#アクセシビリティ)
8. [実装ガイドライン](#実装ガイドライン)

---

## 設計理念

### 禅の哲学
- **簡素性（Simplicity）**: 不要な要素を排除し、本質的な機能のみに集中
- **静寂性（Tranquility）**: 心を落ち着かせる視覚的環境の提供
- **調和性（Harmony）**: 全ての要素が統一された美学を持つ
- **無駄のなさ（Minimalism）**: 情報の密度を適切に保ち、認知的負荷を軽減

### 学習科学に基づく設計原則
- **認知負荷理論**: 外在的認知負荷を最小化し、本質的学習に集中
- **フロー理論**: 没入体験を促進する環境設計
- **注意回復理論**: 自然な要素で注意力の回復を支援
- **マインドフルネス**: 現在の瞬間に意識を向ける設計

---

## カラーシステム

### モノクロ基調パレット（Monochrome Base Palette）
```css
/* 純粋白 - 最も開放的な背景色 */
--zen-white: #ffffff;

/* 禅グレー - 落ち着きと安定感のグラデーション */
--zen-gray-25: #fcfcfd;    /* 最も軽いグレー、圧迫感なし */
--zen-gray-50: #f8f9fa;    /* 主要背景色 */
--zen-gray-100: #f1f3f4;   /* セクション分離用 */
--zen-gray-200: #e8eaed;   /* 軽いボーダー */
--zen-gray-300: #dadce0;   /* 通常ボーダー */
--zen-gray-400: #bdc1c6;   /* 非アクティブ要素 */
--zen-gray-500: #9aa0a6;   /* 補助テキスト */
--zen-gray-600: #80868b;   /* セカンダリテキスト */
--zen-gray-700: #5f6368;   /* プライマリテキスト */
--zen-gray-800: #3c4043;   /* 強調テキスト */
--zen-gray-900: #202124;   /* 最大コントラスト */

/* 集中状態の微細なアクセント（極低彩度） */
--zen-focus: #f8f9fa;      /* ほとんど白に近い、微細な青みがかったグレー */
--zen-active: #e8f0fe;     /* 極めて薄い青、アクティブ状態用 */
--zen-success: #f1f8e9;    /* 極めて薄い緑、成功状態用 */
--zen-warning: #fef7e0;    /* 極めて薄い黄、警告用 */
```

### 特殊状態カラー（最小限使用）
```css
/* エラー状態のみ、視認性のため薄い赤を使用 */
--zen-error-bg: #fce8e6;   /* エラー背景 */
--zen-error-text: #c5221f; /* エラーテキスト */

/* アクセントは1色のみ、極めて控えめに */
--zen-accent: #1a73e8;     /* 必要時のみ使用する薄いブルー */
--zen-accent-bg: #f8fbff;  /* アクセント背景 */
```

### カラー使用哲学
- **主役は余白**: 色ではなく空間で情報を整理
- **コントラストの美学**: 微細な明度差で階層を表現
- **彩度の排除**: すべての色の彩度を最小限に抑制
- **一点集中**: アクセント色は画面に1箇所まで
- **呼吸する空間**: 十分な余白で圧迫感を完全に排除

### カラー使用ルール（厳格版）
- **背景色**: 基本は `--zen-white` から `--zen-gray-100`
- **テキスト色**: `--zen-gray-700` 以上の濃度のみ使用
- **アクセント色**: 1画面につき1箇所、1色まで
- **ボーダー**: `--zen-gray-200` 以下の薄いグレーのみ
- **影**: 極めて薄く、色味なしのグレーシャドウのみ

---

## タイポグラフィ

### フォントファミリー
```css
/* プライマリー - 読みやすさ重視 */
--font-primary: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;

/* セカンダリー - ヘッダー用 */
--font-heading: 'Source Serif Pro', 'Noto Serif JP', serif;

/* モノスペース - コード表示用 */
--font-mono: 'JetBrains Mono', 'Consolas', monospace;
```

### タイポグラフィスケール
```css
/* ヘッダー */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px - ベースサイズ */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */

/* 行間 */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### テキスト階層
1. **H1**: `--text-3xl`, `--font-heading`, 重要な画面タイトル
2. **H2**: `--text-2xl`, `--font-heading`, セクションヘッダー
3. **H3**: `--text-xl`, `--font-primary`, サブセクション
4. **Body**: `--text-base`, `--font-primary`, 本文テキスト
5. **Caption**: `--text-sm`, `--font-primary`, 補助情報
6. **Label**: `--text-xs`, `--font-primary`, ラベル・メタ情報

---

## レイアウト・グリッド

### 圧迫感ゼロのスペーシングシステム
```css
/* 基本グリッド - 余白を2倍に拡張 */
--grid-unit: 8px;         /* 基本単位 */
--space-1: 0.5rem;        /* 8px - 最小余白 */
--space-2: 1rem;          /* 16px - 基本余白 */
--space-3: 1.5rem;        /* 24px - 標準余白 */
--space-4: 2rem;          /* 32px - セクション間 */
--space-6: 3rem;          /* 48px - ブロック間 */
--space-8: 4rem;          /* 64px - 大きな分離 */
--space-12: 6rem;         /* 96px - メジャーセクション */
--space-16: 8rem;         /* 128px - 画面レベル分離 */
--space-20: 10rem;        /* 160px - 特大余白 */
--space-24: 12rem;        /* 192px - 呼吸空間 */

/* 集中のための特別スペーシング */
--focus-margin: 4rem;     /* 集中要素周りの余白 */
--breathing-space: 6rem;  /* 心理的呼吸空間 */
--zen-padding: 3rem;      /* 禅的な内側余白 */
```

### レスポンシブブレークポイント
```css
--breakpoint-sm: 640px;   /* モバイル */
--breakpoint-md: 768px;   /* タブレット */
--breakpoint-lg: 1024px;  /* デスクトップ */
--breakpoint-xl: 1280px;  /* 大画面 */
--breakpoint-2xl: 1536px; /* 超大画面 */
```

### 開放的なコンテナサイズ
- **モバイル**: 最大幅 100%, パディング 24px（従来の1.5倍）
- **タブレット**: 最大幅 680px, 中央揃え, 余白 48px
- **デスクトップ**: 最大幅 960px, 中央揃え, 余白 64px
- **大画面**: 最大幅 1120px, 中央揃え, 余白 96px

### 集中レイアウト原則
1. **80/20ルール**: 画面の80%は余白、20%がコンテンツ
2. **視線の休息**: 要素間に十分な空間を確保
3. **シングルカラム**: 複雑なグリッドを避け、縦一列を基本
4. **中央集約**: 重要なコンテンツは画面中央の狭い範囲に配置

---

## コンポーネント

### 1. メッセージバブル（集中特化デザイン）
```css
.message-bubble {
  /* 基本スタイル - 圧迫感を排除 */
  background: var(--zen-white);
  border-radius: 24px 24px 24px 8px;
  padding: var(--space-4) var(--space-6);  /* より大きなパディング */
  margin-bottom: var(--space-4);           /* 十分なマージン */
  max-width: 60%;                          /* 幅を狭めて読みやすく */
  
  /* 極めて柔らかい影 - 浮遊感を演出 */
  box-shadow: 0 2px 8px rgba(32, 33, 36, 0.04);
  border: 1px solid var(--zen-gray-200);
  
  /* 呼吸するような余白 */
  margin-left: var(--space-6);
  margin-right: var(--space-6);
}

.message-bubble--sent {
  background: var(--zen-gray-50);          /* 薄いグレー背景 */
  color: var(--zen-gray-800);
  border-radius: 24px 24px 8px 24px;
  margin-left: auto;
  margin-right: var(--space-6);
  
  /* 送信メッセージは少し小さく */
  max-width: 55%;
}

.message-bubble--received {
  background: var(--zen-white);
  color: var(--zen-gray-700);
  border: 1px solid var(--zen-gray-200);
}

/* 集中モード時のメッセージ */
.focus-mode .message-bubble {
  max-width: 50%;
  margin: var(--space-6) auto;  /* 中央寄せで余白を大きく */
  box-shadow: 0 1px 4px rgba(32, 33, 36, 0.02);
}
```

### 2. 入力フィールド（禅デザイン）
```css
.input-field {
  background: var(--zen-white);
  border: 1px solid var(--zen-gray-300);
  border-radius: 16px;
  padding: var(--space-4) var(--space-6);  /* ゆったりとしたパディング */
  font-size: var(--text-base);
  transition: all 0.3s ease;               /* ゆっくりとした変化 */
  
  /* 呼吸するような余白 */
  margin: var(--space-4) 0;
  
  /* 極めて薄い影 */
  box-shadow: 0 1px 3px rgba(32, 33, 36, 0.02);
}

.input-field:focus {
  outline: none;
  border-color: var(--zen-gray-400);       /* 薄いグレーボーダー */
  background: var(--zen-gray-25);          /* 微細な背景変化 */
  box-shadow: 0 2px 8px rgba(32, 33, 36, 0.04);
  
  /* フォーカス時の微細な拡張 */
  transform: scale(1.005);
}

/* プレースホルダーの調整 */
.input-field::placeholder {
  color: var(--zen-gray-500);
  font-weight: 300;                        /* より軽やかに */
}
```

### 3. ボタン（ミニマル設計）
```css
.button {
  /* プライマリーボタン - 最小限の存在感 */
  background: var(--zen-gray-100);
  color: var(--zen-gray-700);
  border: 1px solid var(--zen-gray-300);
  border-radius: 12px;
  padding: var(--space-3) var(--space-8);  /* 横幅を広く */
  font-weight: 400;                        /* 軽やかなフォントウェイト */
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* 十分な余白を確保 */
  margin: var(--space-2) var(--space-1);
  
  /* 微細な影 */
  box-shadow: 0 1px 2px rgba(32, 33, 36, 0.02);
}

.button:hover {
  background: var(--zen-gray-200);
  border-color: var(--zen-gray-400);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(32, 33, 36, 0.04);
}

.button:active {
  transform: translateY(0);
  background: var(--zen-gray-300);
}

.button--primary {
  background: var(--zen-gray-800);
  color: var(--zen-white);
  border: 1px solid var(--zen-gray-800);
}

.button--primary:hover {
  background: var(--zen-gray-700);
  border-color: var(--zen-gray-700);
}

.button--ghost {
  background: transparent;
  color: var(--zen-gray-600);
  border: none;
  box-shadow: none;
}
```

### 4. ナビゲーション（呼吸する設計）
```css
.navigation {
  background: rgba(255, 255, 255, 0.95);  /* より透明感を */
  backdrop-filter: blur(20px);             /* ブラー効果を強化 */
  border-bottom: 1px solid var(--zen-gray-200);
  padding: var(--space-6) var(--space-8);  /* 大きな余白 */
  
  /* 浮遊感のある影 */
  box-shadow: 0 1px 4px rgba(32, 33, 36, 0.02);
}

/* ナビゲーション要素間の余白 */
.navigation > * + * {
  margin-left: var(--space-8);             /* 要素間に十分な余白 */
}
```

### 5. 集中状態インジケーター（極ミニマル）
```css
.focus-indicator {
  width: 6px;
  height: 6px;
  background: var(--zen-gray-400);         /* 控えめなグレー */
  border-radius: 50%;
  animation: zen-pulse 3s infinite;        /* ゆっくりとしたパルス */
  
  /* 周囲に余白を確保 */
  margin: var(--space-2);
}

@keyframes zen-pulse {
  0%, 100% { 
    opacity: 0.6; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.1);
  }
}

/* 集中モード時は表示を最小限に */
.focus-mode .focus-indicator {
  width: 4px;
  height: 4px;
  opacity: 0.4;
}
```

### 6. カード・コンテナ（呼吸空間重視）
```css
.card {
  background: var(--zen-white);
  border: 1px solid var(--zen-gray-200);
  border-radius: 16px;
  padding: var(--space-8);                 /* 大きな内側余白 */
  margin: var(--space-6) 0;               /* 要素間に十分な余白 */
  
  /* 極めて控えめな影 */
  box-shadow: 0 2px 8px rgba(32, 33, 36, 0.03);
}

/* カード内要素の余白 */
.card > * + * {
  margin-top: var(--space-4);
}
```

---

## インタラクション

### 禅アニメーション原則
- **静寂性**: 動きは最小限に、注意を散らさない
- **持続時間**: 長め（300-500ms）でゆったりとした変化
- **イージング**: `ease-out` より `ease-in-out` で自然な動き
- **目的**: リラックス効果と状態変化の穏やかな示唆

### 集中維持アニメーション
```css
/* 極めて穏やかなフェードイン */
@keyframes zen-fade-in {
  from { 
    opacity: 0; 
    transform: translateY(8px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* 呼吸するようなスケールイン */
@keyframes zen-scale-in {
  from { 
    opacity: 0; 
    transform: scale(0.98); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* 雲のようなスライドイン */
@keyframes zen-slide-in {
  from { 
    opacity: 0;
    transform: translateX(-12px); 
  }
  to { 
    opacity: 1;
    transform: translateX(0); 
  }
}

/* 瞑想的なパルス（集中インジケーター用） */
@keyframes zen-meditative-pulse {
  0%, 100% { 
    opacity: 0.5; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.05); 
  }
}

/* フォーカス時のゆらぎエフェクト */
@keyframes zen-focus-ripple {
  0% { 
    box-shadow: 0 0 0 0 rgba(32, 33, 36, 0.1); 
  }
  100% { 
    box-shadow: 0 0 0 8px rgba(32, 33, 36, 0); 
  }
}
```

### 集中特化インタラクションパターン
1. **メッセージ送信**: 
   - アニメーション: `zen-fade-in` (400ms, ease-in-out)
   - 効果: 穏やかな出現で心地よい達成感

2. **新着メッセージ**: 
   - アニメーション: `zen-slide-in` (500ms, ease-out)
   - 効果: 自然な流れで注意を引かない

3. **フォーカス状態**: 
   - アニメーション: 境界線の変化 + `zen-focus-ripple`
   - 効果: 微細な変化で集中を維持

4. **ホバー効果**: 
   - 変化: 透明度とわずかな拡大のみ
   - 効果: 控えめなフィードバック

### アニメーション適用ルール
```css
/* 基本要素のアニメーション設定 */
.message-bubble {
  animation: zen-fade-in 400ms ease-in-out;
}

.input-field:focus {
  animation: zen-focus-ripple 2s infinite;
}

.button:hover {
  transition: all 300ms ease-in-out;
  transform: translateY(-1px) scale(1.005);
}

/* 集中モード時はアニメーションを最小限に */
.focus-mode * {
  animation-duration: 200ms !important;
  transition-duration: 200ms !important;
}

/* 瞑想モード時は特に穏やかに */
.meditation-mode * {
  animation-duration: 600ms !important;
  transition-duration: 600ms !important;
}
```

### 集中阻害防止ルール
- **点滅禁止**: いかなる要素も点滅させない
- **急激な変化禁止**: 0.5秒以下のアニメーションは使用しない  
- **色変化制限**: グレースケール内でのみ変化
- **複数アニメーション禁止**: 同時に動く要素は1つまで
- **ループアニメーション制限**: 必要最小限のインジケーターのみ

---

## アクセシビリティ

### 基本原則
- **知覚可能**: 適切なコントラスト比、代替テキスト
- **操作可能**: キーボードナビゲーション、適切なタッチターゲット
- **理解可能**: 明確なラベル、一貫したナビゲーション
- **堅牢**: セマンティックHTML、スクリーンリーダー対応

### 実装要件
```css
/* フォーカス表示 */
.focus-visible {
  outline: 2px solid var(--zen-blue-500);
  outline-offset: 2px;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  :root {
    --zen-gray-100: #ffffff;
    --zen-gray-800: #000000;
  }
}

/* 動きの軽減 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### キーボードショートカット
- `Enter`: メッセージ送信
- `Shift + Enter`: 改行
- `Escape`: フォーカス解除
- `Tab`: 次の要素へ
- `Shift + Tab`: 前の要素へ

---

## 実装ガイドライン

### CSS変数の使用
```css
:root {
  /* カラー変数を必ず使用 */
  /* スペーシング変数を必ず使用 */
  /* タイポグラフィ変数を必ず使用 */
}

/* ダークモード対応（モノクロ基調） */
@media (prefers-color-scheme: dark) {
  :root {
    /* グレースケールを反転 */
    --zen-white: #1a1a1a;
    --zen-gray-25: #1e1e1e;
    --zen-gray-50: #222222;
    --zen-gray-100: #2a2a2a;
    --zen-gray-200: #333333;
    --zen-gray-300: #404040;
    --zen-gray-400: #666666;
    --zen-gray-500: #808080;
    --zen-gray-600: #999999;
    --zen-gray-700: #cccccc;
    --zen-gray-800: #e0e0e0;
    --zen-gray-900: #f5f5f5;
    
    /* 特殊状態も薄く調整 */
    --zen-focus: #242424;
    --zen-active: #2a2a2a;
    --zen-success: #1e2a1e;
    --zen-warning: #2a2a1e;
    --zen-error-bg: #2a1e1e;
    --zen-error-text: #ff6b6b;
    
    /* アクセントも抑制 */
    --zen-accent: #6b9bff;
    --zen-accent-bg: #1e2430;
  }
  
  /* ダークモード時の影を調整 */
  .message-bubble {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .input-field {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  /* 呼吸ガイドの調整 */
  .breathing-guide {
    border-color: var(--zen-gray-600);
  }
}

/* 高コントラストモード（アクセシビリティ） */
@media (prefers-contrast: high) {
  :root {
    --zen-gray-700: #000000;
    --zen-gray-800: #000000;
    --zen-gray-900: #000000;
    --zen-white: #ffffff;
    --zen-gray-100: #ffffff;
    --zen-gray-200: #f0f0f0;
  }
  
  .message-bubble {
    border: 2px solid var(--zen-gray-800);
  }
  
  .input-field {
    border: 2px solid var(--zen-gray-800);
  }
}

/* 色覚に配慮した設定 */
@media (prefers-reduced-transparency: reduce) {
  .meditation-mode .message-bubble {
    background: var(--zen-white);
    backdrop-filter: none;
  }
  
  .navigation {
    background: var(--zen-white);
    backdrop-filter: none;
  }
}
```

### コンポーネント設計
1. **BEM記法**: Block, Element, Modifierを使用
2. **単一責任**: 1つのコンポーネントは1つの責任
3. **再利用性**: プロパティで状態を制御
4. **テスト可能**: data属性でテスト用セレクター

### パフォーマンス最適化
- **CSS-in-JS**: 実行時スタイル生成を避ける
- **クリティカルCSS**: 初期表示に必要なスタイルを優先
- **レイジーロード**: 必要に応じてコンポーネントを読み込み
- **バンドルサイズ**: 使用していないスタイルを除去

### 品質管理
```json
{
  "linters": ["stylelint", "prettier"],
  "rules": {
    "no-magic-numbers": "error",
    "use-css-variables": "error",
    "accessibility-required": "error"
  }
}
```

---

## 特別な機能

### 集中モード（Deep Focus Mode）
```css
.focus-mode {
  /* 極度に落ち着いた背景 */
  background: var(--zen-gray-50);
  color: var(--zen-gray-800);
  
  /* 不要な要素を非表示 */
  .sidebar, 
  .notifications, 
  .status-bar,
  .avatar-images {
    opacity: 0;
    pointer-events: none;
  }
  
  /* メッセージエリアを最大限中央に */
  .chat-container {
    max-width: 600px;
    margin: var(--breathing-space) auto;
    padding: var(--zen-padding);
  }
  
  /* 余計な装飾を完全に除去 */
  .message-bubble {
    border: none;
    box-shadow: 0 1px 2px rgba(32, 33, 36, 0.02);
    background: var(--zen-white);
    margin: var(--space-6) 0;
  }
  
  /* タイムスタンプなど非essential要素を隠す */
  .timestamp,
  .message-status,
  .reactions {
    display: none;
  }
  
  /* フォントサイズを読みやすく調整 */
  font-size: 1.1rem;
  line-height: 1.7;
}

/* 集中モード時の特別スペーシング */
.focus-mode .input-field {
  margin: var(--focus-margin) auto;
  max-width: 500px;
  background: var(--zen-white);
  border: 1px solid var(--zen-gray-300);
  box-shadow: 0 2px 4px rgba(32, 33, 36, 0.04);
}
```

### 瞑想モード（Meditation Mode）
```css
.meditation-mode {
  /* 極めて淡いグラデーション背景 */
  background: linear-gradient(135deg, 
    var(--zen-gray-25) 0%, 
    var(--zen-white) 50%,
    var(--zen-gray-25) 100%);
  
  /* すべての要素を薄く */
  * {
    opacity: 0.8;
  }
  
  /* 呼吸ガイドエリア */
  .breathing-guide {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border: 2px solid var(--zen-gray-300);
    border-radius: 50%;
    opacity: 0.6;
    animation: zen-breathe 8s infinite ease-in-out;
  }
  
  /* 瞑想中は入力を最小限に */
  .input-field {
    opacity: 0.5;
    transform: scale(0.95);
  }
  
  /* メッセージも控えめに */
  .message-bubble {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(218, 220, 224, 0.5);
    backdrop-filter: blur(5px);
  }
}

@keyframes zen-breathe {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1); 
    opacity: 0.4;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.15); 
    opacity: 0.7;
  }
}

/* 瞑想モード中の呼吸テキスト */
.breathing-text {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--text-sm);
  color: var(--zen-gray-500);
  font-weight: 300;
  text-align: center;
  animation: zen-breathe-text 8s infinite;
}

@keyframes zen-breathe-text {
  0%, 25% { content: "吸って..."; opacity: 0.6; }
  26%, 50% { content: "止めて..."; opacity: 0.8; }
  51%, 75% { content: "吐いて..."; opacity: 0.6; }
  76%, 100% { content: "止めて..."; opacity: 0.4; }
}
```

### 最小モード（Minimal Mode）
```css
.minimal-mode {
  /* 画面の98%が余白の超ミニマル設計 */
  background: var(--zen-white);
  
  /* すべてのUI要素を最小限に */
  .navigation,
  .sidebar,
  .footer {
    display: none;
  }
  
  /* チャットエリアを画面中央の小さな領域に */
  .chat-container {
    max-width: 400px;
    margin: 25vh auto;
    padding: 0;
  }
  
  /* メッセージは線のように細く */
  .message-bubble {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--zen-gray-200);
    border-radius: 0;
    max-width: 100%;
    margin: var(--space-1) 0;
  }
  
  /* 入力も最小限 */
  .input-field {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--zen-gray-300);
    border-radius: 0;
    padding: var(--space-2) 0;
    margin: var(--space-4) 0;
    box-shadow: none;
  }
  
  .input-field:focus {
    border-bottom: 1px solid var(--zen-gray-600);
    background: transparent;
    transform: none;
    box-shadow: none;
  }
}
```

### 進捗表示（学習集中度可視化）
```css
.learning-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--zen-gray-100);
  border: none;
  overflow: hidden;
  z-index: 1000;
}

.progress-bar {
  height: 100%;
  background: var(--zen-gray-400);
  transition: width 1s ease-in-out;
  border-radius: 0;
}

/* 集中度レベルによる視覚的フィードバック */
.progress-bar--low {
  background: var(--zen-gray-300);
}

.progress-bar--medium {
  background: var(--zen-gray-400);
}

.progress-bar--high {
  background: var(--zen-gray-600);
}

.progress-bar--deep {
  background: var(--zen-gray-700);
}

/* 集中モード時は進捗バーを非表示 */
.focus-mode .learning-progress {
  display: none;
}
```

### 集中状態切り替えコントロール
```css
.mode-switcher {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.mode-switcher:hover {
  opacity: 1;
}

.mode-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--zen-gray-400);
  background: var(--zen-white);
  cursor: pointer;
  transition: all 0.2s ease;
}

.mode-button--active {
  background: var(--zen-gray-600);
}

.mode-button:hover {
  transform: scale(1.2);
  border-color: var(--zen-gray-600);
}

/* 集中モード時はモード切り替えも隠す */
.focus-mode .mode-switcher {
  opacity: 0.1;
}

.focus-mode .mode-switcher:hover {
  opacity: 0.3;
}
```

---

## 今後の拡張

### マイクロインタラクション
- メッセージの読了確認
- タイピングインジケーター
- 音声メッセージの波形表示
- 感情表現のアニメーション

### AI支援機能
- 学習進捗の可視化
- 集中度の測定とフィードバック
- パーソナライズされた環境設定
- 適応的な色温度調整

### 多言語対応
- RTL（右から左）レイアウト対応
- フォントファミリーの言語別最適化
- 文字サイズの自動調整
- 文化的色彩感覚への配慮

---

## まとめ

この禅チャットデザインシステムは、最新の学習科学と認知心理学の知見に基づき、真の集中環境を提供します。シンプルで美しく、機能的でありながら心を落ち着かせるデザインを通じて、ユーザーの学習体験を最大化することを目指しています。

定期的な見直しとユーザーフィードバックを通じて、継続的に改善していくことが重要です。 