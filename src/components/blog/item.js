import Link from 'next/link'
import moment from 'moment'
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
  const defaultImage = '/static/img/blog-default.jpg'

  return (
    <BlogCard>
      <BlogCardImage>
        <img
          src={blog.image || defaultImage}
          alt={blog.title}
          onError={(e) => { e.target.src = defaultImage }}
        />
      </BlogCardImage>
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
