import Link from 'next/link'
import { useState } from 'react'
import { MEDIA_PATH } from 'utils/files/path'
import { useBlogBySlug } from '../../hooks'
import {
  BlogDetailContainer,
  BlogDetailHeader,
  BlogDetailTitle,
  BlogDetailImage,
  BlogDetailContent,
  BlogDetailBack,
  EmptyBlogs
} from './styles'

const DetailBlogBySlug = ({ slug }) => {
  const { blog, loading } = useBlogBySlug(slug)
  const [imageError, setImageError] = useState(false)

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

  return (
    <BlogDetailContainer>
      <Link href='/blog'>
        <BlogDetailBack>Volver a blogs</BlogDetailBack>
      </Link>

      <BlogDetailHeader>
        <BlogDetailTitle>{blog.title}</BlogDetailTitle>
      </BlogDetailHeader>

      {blog.image && !imageError ? (
        <BlogDetailImage>
          <img
            src={MEDIA_PATH + blog.image}
            alt={blog.title}
            onError={() => setImageError(true)}
          />
        </BlogDetailImage>
      ) : (
        <BlogDetailImage style={{ background: 'linear-gradient(135deg, #0077e2 0%, #00c6ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: '96px', fontWeight: '700' }}>
            {blog.title ? blog.title.charAt(0).toUpperCase() : 'B'}
          </span>
        </BlogDetailImage>
      )}

      <BlogDetailContent
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </BlogDetailContainer>
  )
}

export default DetailBlogBySlug
