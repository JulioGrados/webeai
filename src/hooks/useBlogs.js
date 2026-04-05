import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBlogs, getBlog } from '../redux/blog'

export const useBlogs = () => {
  const { list, current, loading, loaded } = useSelector(
    state => state.blog
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(
        getBlogs({
          query: { status: 'Publicado' },
          sort: '-createdAt'
        })
      )
    }
  }, [])

  const blogs = list

  return {
    blogs,
    current,
    loading,
    loaded
  }
}

export const useBlog = (blogId) => {
  const { current, loading, loaded } = useSelector(
    state => state.blog
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (blogId && loading === false) {
      dispatch(
        getBlog({
          query: { _id: blogId, status: 'Publicado' }
        })
      )
    }
  }, [blogId])

  return {
    blog: current,
    loading,
    loaded
  }
}

export const useBlogBySlug = (slug) => {
  const { current, loading, loaded } = useSelector(
    state => state.blog
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (slug && loading === false) {
      // Buscar por slug o por _id para mantener compatibilidad con blogs antiguos
      const isObjectId = /^[0-9a-fA-F]{24}$/.test(slug)
      const query = isObjectId
        ? { _id: slug, status: 'Publicado' }
        : { slug: slug, status: 'Publicado' }

      dispatch(
        getBlog({
          query
        })
      )
    }
  }, [slug])

  return {
    blog: current,
    loading,
    loaded
  }
}
