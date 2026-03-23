import Link from 'next/link'
import moment from 'moment'
import { useBlog } from '../../hooks'
import {
  BlogDetailContainer,
  BlogDetailHeader,
  BlogDetailCategory,
  BlogDetailTitle,
  BlogDetailMeta,
  BlogDetailImage,
  BlogDetailContent,
  BlogDetailBack,
  EmptyBlogs
} from './styles'

const DetailBlog = ({ blogId }) => {
  const { blog, loading } = useBlog(blogId)

  if (loading) {
    return (
      <BlogDetailContainer>
        <EmptyBlogs>
          <p>Cargando blog...</p>
        </EmptyBlogs>
      </BlogDetailContainer>
    )
  }

  if (!blog) {
    return (
      <BlogDetailContainer>
        <EmptyBlogs>
          <h3>Blog no encontrado</h3>
          <p>El blog que buscas no existe o fue eliminado</p>
          <Link href='/blog'>
            <BlogDetailBack style={{ marginTop: '20px' }}>Volver a blogs</BlogDetailBack>
          </Link>
        </EmptyBlogs>
      </BlogDetailContainer>
    )
  }

  const defaultImage = '/static/img/blog-default.jpg'

  return (
    <BlogDetailContainer>
      <Link href='/blog'>
        <BlogDetailBack>Volver a blogs</BlogDetailBack>
      </Link>

      <BlogDetailHeader>
        {blog.status && (
          <BlogDetailCategory>{blog.status}</BlogDetailCategory>
        )}
        <BlogDetailTitle>{blog.title}</BlogDetailTitle>
        <BlogDetailMeta>
          <span>{moment(blog.date || blog.createdAt).format('DD MMMM YYYY')}</span>
          {blog.author && blog.author.names && (
            <span>Por {blog.author.names}</span>
          )}
        </BlogDetailMeta>
      </BlogDetailHeader>

      {blog.image && (
        <BlogDetailImage>
          <img
            src={blog.image}
            alt={blog.title}
            onError={(e) => { e.target.src = defaultImage }}
          />
        </BlogDetailImage>
      )}

      <BlogDetailContent
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </BlogDetailContainer>
  )
}

export default DetailBlog
