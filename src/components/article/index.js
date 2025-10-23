import { Article, ArticleTitle, ArticleText } from './styles'

const ArticleContent = ({ title, text, children, setHomeRecruit }) => {
  return (
    <Article setHomeRecruit={setHomeRecruit}>
      <ArticleTitle>{title}</ArticleTitle>
      {text && <ArticleText>{text}</ArticleText>}
      {children}
    </Article>
  )
}

export default ArticleContent
