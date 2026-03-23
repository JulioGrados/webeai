import Link from 'next/link'
import moment from 'moment'
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
  const defaultImage = '/static/img/blog-default.jpg'

  return (
    <BlogContainer>
      {/* Blog destacado */}
      <FeaturedBlog>
        <FeaturedContent>
          {featuredBlog.status && (
            <BlogCategory>{featuredBlog.status}</BlogCategory>
          )}
          <BlogCardTitle style={{ fontSize: '28px', marginBottom: '15px' }}>
            {featuredBlog.title}
          </BlogCardTitle>
          <BlogCardDescription style={{ fontSize: '15px', marginBottom: '20px' }}>
            {featuredBlog.description}
          </BlogCardDescription>
          <BlogDate>
            {moment(featuredBlog.date || featuredBlog.createdAt).format('DD MMM YYYY')}
          </BlogDate>
          <Link href={`/blog/${featuredBlog._id}`}>
            <BlogCardLink style={{ marginTop: '15px' }}>Leer blog</BlogCardLink>
          </Link>
        </FeaturedContent>
        <FeaturedImage>
          <img
            src={featuredBlog.image || defaultImage}
            alt={featuredBlog.title}
            onError={(e) => { e.target.src = defaultImage }}
          />
        </FeaturedImage>
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
