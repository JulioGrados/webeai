import styled from 'styled-components'

export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`

export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`

export const BlogTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 15px;
`

export const BlogSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

// Featured Blog (primer blog destacado)
export const FeaturedBlog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FeaturedImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

// Lista de blogs
export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const BlogCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`

export const BlogCardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`

export const BlogCardContent = styled.div`
  padding: 20px;
`

export const BlogCategory = styled.span`
  display: inline-block;
  background: #0077e2;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 4px;
  margin-bottom: 12px;
`

export const BlogCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const BlogCardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const BlogCardLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #0077e2;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
    text-decoration: none;
  }

  &::after {
    content: '>';
    margin-left: 8px;
    transition: margin-left 0.3s ease;
  }

  &:hover::after {
    margin-left: 12px;
  }
`

export const BlogDate = styled.span`
  font-size: 12px;
  color: #999;
  display: block;
  margin-bottom: 8px;
`

// Detalle del blog
export const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`

export const BlogDetailHeader = styled.div`
  margin-bottom: 30px;
`

export const BlogDetailCategory = styled.span`
  display: inline-block;
  background: #0077e2;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 4px;
  margin-bottom: 20px;
`

export const BlogDetailTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 15px;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 28px;
  }
`

export const BlogDetailMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`

export const BlogDetailImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`

export const BlogDetailContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #333;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: #1a1a2e;
  }

  p {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
  }

  ul, ol {
    margin-bottom: 20px;
    padding-left: 30px;
  }

  li {
    margin-bottom: 10px;
  }

  blockquote {
    border-left: 4px solid #0077e2;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: #555;
  }

  a {
    color: #0077e2;
    text-decoration: underline;
  }
`

export const BlogDetailBack = styled.a`
  display: inline-flex;
  align-items: center;
  color: #0077e2;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;

  &::before {
    content: '<';
    margin-right: 8px;
  }

  &:hover {
    color: #0056b3;
  }
`

export const EmptyBlogs = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #1a1a2e;
  }

  p {
    font-size: 14px;
  }
`
