---
icon: house-tree
---

# Digital Garden

[micro.blog.md](micro.blog.md "mention")を始めとした、IndieWebに興味を持つ内に、Digital Gardenというワードを知りました。

関連ワード: Second Brain, Personal Wiki

### History

* 2024-9: \[\[Obsidian]] でmarkdown管理し、[Quartz](https://github.com/jackyzha0/quartz)でコンテンツ展開
* 2024-10: StyleとThemeやサイドバーのエコシステムをVitePressにしたかったところ、\[\[nolebase]]を発見し、移行を検討
  * その結果、次のConsがあったため、\[\[quartz]]に戻す。
    * OG-ImageやOG-Descriptionがバグがある状態でリリースされており、不要な対応が生まれてしまう
    * テキスト検索、特に全文検索\[\[quartz]]よりも劣る。検索されないページが多い
    * ビルドパフォーマンスが悪く、1ビルド6秒以上必要のため、Customize作業がDX低い。
    * あまりコミュニティが発展していない。
    * デフォルトの対応言語が`zh-CN`であり、`en-US`や`ja-JP`では表示されなかったり機能しないものが存在する。
    * ドキュメントが英語でない
    * コンテンツディレクトリがrootであるため、obsidianのvaultsとして扱うとnode\_modules等不要なファイルが展開されてしまう。
    * backlinkがない（あったら地味によかった）
    * tagsやディレクトリページがない
  * スタイルや表示については、自力カスタマイズで頑張ると決めた

### Workflow

*   小さい、まとまっていないものは `#seed` をつけ、`thoughts/`フォルダに配置する。フォルダリングされないものを入れるInbox。

    > 参考: https://jzhao.xyz/tags/Seed

### お気に入りリスト

<table><thead><tr><th>Site</th><th width="416.85546875">Note</th><th></th></tr></thead><tbody><tr><td><a href="https://nikiv.dev/">https://nikiv.dev/</a></td><td>見てきた中で最大規模のDigital Garden。その大量のコンテンツを有料販売化している。ただ圧巻。そしてアプリやツールの運用方法は非常に参考になる。<br><br>最近はreflectとcursorを使った構成としている様子。</td><td><a href="https://fumadocs.vercel.app">fumadocs</a></td></tr><tr><td><a href="https://paul.copplest.one/">paul.copplest.one</a></td><td>美しい。VuePressで構築されている。Folderのカテゴリ名やグルーピングはこちらをよく参照している。<br><a href="https://paul.copplest.one/knowledge/levels/">Mental Models</a>のページは真似したい。<br><a href="https://github.com/kiwicopple/paul.copplest.one/blob/master/docs/README.md">github</a></td><td>VuePress</td></tr><tr><td>https://koscielniak.pro/</td><td></td><td></td></tr><tr><td><a href="https://www.pelayoarbues.com/">Pelayo Arbués</a></td><td>Quartzで構築されたサイト。<a href="https://www.pelayoarbues.com/photography/">Photography</a>やサイトマップの構成を参考にしている。</td><td>Quartz</td></tr><tr><td><a href="https://anthonyamar.fr/Welcome+in+my+mind+%F0%9F%A7%A0">Welcome in my mind 🧠</a></td><td><strong>Anthony</strong>によるサイト。わかりやすく洗練されている。<br><a href="https://anthonyamar.fr/Digital+garden/Software+design+principles+applied+to+digital+gardening">ソフトウェア原則に類しているという記事</a>が知見。</td><td></td></tr><tr><td><a href="https://nolebase.ayaka.io/%E7%AC%94%E8%AE%B0/">📒 笔记 | Nólëbase</a></td><td>[[nolebase]]の作者のサイト。</td><td>nolebase</td></tr><tr><td><a href="https://www.bhavaniravi.com/">Hi 👋🏻 I'm Bhavani | Bhavani's Digital Garden</a></td><td>GitBookで作成しているDigital Garden。見やすい。<a href="https://www.bhavaniravi.com/readme/why-gitbook">Why Gitbook? | Bhavani's Digital Garden</a></td><td>GitBook</td></tr><tr><td><a href="https://notes.joschua.io/">Joschua’s Notes</a></td><td>Bearから同期するシステムや、Obsidianから同期するシステムあどを記載しており、非常に興味深い。<br><a href="https://joschua.io/">https://joschua.io/</a></td><td>Quartz</td></tr></tbody></table>

### 参考文献

| Site                                                                                       | Note                                                                   |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [Networked Thought](https://jzhao.xyz/posts/networked-thought)                             | \[\[quartz]]の作者 **Jacky** によるDigital Gardenとは何かの説明。                    |
| [A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history) | デジタルガーデンの歴史と流れを知りたい場合。                                                 |
| [Tom Critchlow > Welcome to wikifolder](https://tomcritchlow.com/wiki/)                    | フォルダーで管理する [**Tom Critchlow**](https://tomcritchlow.com/) によるデジタルガーデン。 |

### その他

| Title                    | Github                                                                           | Notes      |
| ------------------------ | -------------------------------------------------------------------------------- | ---------- |
| https://quartz.jzhao.xyz | https://github.com/jackyzha0/quartz                                              | \[\[quar]] |
| best-of-digital-gardens  | [github](https://github.com/lyz-code/best-of-digital-gardens?tab=readme-ov-file) |            |

### List of List

* [My workflow in writing and maintaining this wiki | Everything I Know](https://wiki.nikiv.dev/other/wiki-workflow)
* [Digital garden inspirations - My second-brain](https://anthonyamar.fr/Digital+garden/Digital+garden+inspirations)

### Astro Digital Garden

* https://stereobooster.com/posts/digital-garden-as-static-website/
* [stereobooster/astro-digital-garden: Astro digital garden](https://github.com/stereobooster/astro-digital-garden)
