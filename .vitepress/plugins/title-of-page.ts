import type MarkdownIt from 'markdown-it'

export function SetTitleFromFileName(md: MarkdownIt) {
  const defaultRender = md.renderer.render

  md.renderer.render = (tokens, options, env) => {
    if (!env.frontmatter || !env.frontmatter.title) {
      // ファイルパスはenv.filePathから取得
      const filePath = env.filePath || ''
      // ファイル名を抽出（パスとファイル拡張子を除去）
      const fileName = filePath
        .split('/')
        .pop()
        ?.replace(/\.md$/, '')

      // 新しいタイトルトークンを作成
      const titleTokens = md.parse(`# ${fileName}\n\n`, {})
      tokens.unshift(...titleTokens)
    }

    return defaultRender(tokens, options, env)
  }
}
