import Link from 'next/link'
import moment from 'moment'
import { useState } from 'react'
import { MEDIA_PATH } from 'utils/files/path'
import {
  BlogCard,
  BlogCardImage,
  BlogCardContent,
  BlogCategory,
  BlogCardTitle,
  BlogCardDescription,
  BlogCardLink,
  BlogDate
} from './styles'

const BlogItem = ({ blog }) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <BlogCard>
      {!imageError && blog.image ? (
        <BlogCardImage>
          <img
            src={MEDIA_PATH + blog.image}
            alt={blog.title}
            onError={handleImageError}
          />
        </BlogCardImage>
      ) : (
        <BlogCardImage style={{ background: 'linear-gradient(135deg, #0077e2 0%, #00c6ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: '48px', fontWeight: '700' }}>
            {blog.title ? blog.title.charAt(0).toUpperCase() : 'B'}
          </span>
        </BlogCardImage>
      )}
      <BlogCardContent>
        {blog.status && (
          <BlogCategory>{blog.status}</BlogCategory>
        )}
        <BlogDate>
          {moment(blog.date || blog.createdAt).format('DD MMM YYYY')}
        </BlogDate>
        <BlogCardTitle>{blog.title}</BlogCardTitle>
        <BlogCardDescription>{blog.description}</BlogCardDescription>
        <Link href={`/blog/${blog._id}`}>
          <BlogCardLink>Leer blog</BlogCardLink>
        </Link>
      </BlogCardContent>
    </BlogCard>
  )
}

export default BlogItem
