import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '../data/blog'
import { formatDate } from '../lib/format'

export function BlogDetailPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug ?? '')

  if (!post) {
    return (
      <section className="section">
        <div className="container empty">Article not found.</div>
      </section>
    )
  }

  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: 820 }}>
        <Link to="/blog" className="muted">
          ← All insights
        </Link>
        <div className="page-hero">
          <span className="eyebrow">{post.tags.join(' · ')}</span>
          <h1>{post.title}</h1>
          <p>
            {post.author} · {formatDate(post.date)}
          </p>
        </div>
        <img
          src={post.cover}
          alt=""
          style={{ width: '100%', borderRadius: 'var(--radius)', marginBottom: '2rem' }}
        />
        <div className="prose">
          {post.content.split('\n\n').map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
