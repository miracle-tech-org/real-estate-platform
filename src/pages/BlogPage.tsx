import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import { formatDate } from '../lib/format'

export function BlogPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Insights</span>
          <h1>Market notes & buyer guides</h1>
          <p>Practical writing on rates, neighborhoods, and ownership decisions.</p>
        </div>
        <div className="grid-cards">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
              <img src={post.cover} alt="" loading="lazy" />
              <div className="muted">
                {formatDate(post.date)} · {post.author}
              </div>
              <h3>{post.title}</h3>
              <p className="muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
