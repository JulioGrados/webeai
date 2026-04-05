import Link from 'next/link'
import moment from 'moment'
import { useState } from 'react'
import { MEDIA_PATH } from 'utils/files/path'
import { useBlogs } from '../../hooks'
import BlogItem from './item'
import {
  BlogContainer,
  BlogGrid,
  FeaturedBlog,
  FeaturedContent,
  FeaturedImage,
  BlogCategory,
  BlogCardTitle,
  BlogCardDescription,
  BlogCardLink,
  BlogDate,
  EmptyBlogs
} from './styles'

const FeaturedImageComponent = ({ blog }) => {
  const [imageError, setImageError] = useState(false)

  if (!blog.image || imageError) {
    return (
      <FeaturedImage style={{ background: 'linear-gradient(135deg, #0077e2 0%, #00c6ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontSize: '72px', fontWeight: '700' }}>
          {blog.title ? blog.title.charAt(0).toUpperCase() : 'B'}
        </span>
      </FeaturedImage>
    )
  }

  return (
    <FeaturedImage>
      <img
        src={MEDIA_PATH + blog.image}
        alt={blog.title}
        onError={() => setImageError(true)}
      />
    </FeaturedImage>
  )
}

const ListBlogs = () => {
  const { blogs, loading } = useBlogs()

  if (loading) {
    return (
      <BlogContainer>
        <EmptyBlogs>
          <p>Cargando blogs...</p>
        </EmptyBlogs>
      </BlogContainer>
    )
  }

  if (!blogs || blogs.length === 0) {
    return (
      <BlogContainer>
        <EmptyBlogs>
          <h3>No hay blogs disponibles</h3>
          <p>Pronto publicaremos nuevo contenido</p>
        </EmptyBlogs>
      </BlogContainer>
    )
  }

  const featuredBlog = blogs[0]
  const otherBlogs = blogs.slice(1)

  return (
    <BlogContainer>
      {/* Blog destacado */}
      <FeaturedBlog>
        <FeaturedContent>
          <BlogCardTitle style={{ fontSize: '28px', marginBottom: '15px' }}>
            {featuredBlog.title}
          </BlogCardTitle>
          <BlogCardDescription style={{ fontSize: '15px', margin: '0px' }}>
            {featuredBlog.description}
          </BlogCardDescription>
          <Link href={`/blog/${featuredBlog.slug || featuredBlog._id}`}>
            <BlogCardLink style={{ marginTop: '15px' }}>Leer blog</BlogCardLink>
          </Link>
        </FeaturedContent>
        <FeaturedImageComponent blog={featuredBlog} />
      </FeaturedBlog>

      {/* Grid de otros blogs */}
      {otherBlogs.length > 0 && (
        <BlogGrid>
          {otherBlogs.map(blog => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </BlogGrid>
      )}
    </BlogContainer>
  )
}

export default ListBlogs
