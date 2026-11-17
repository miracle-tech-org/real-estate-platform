import { useState } from 'react'

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img src={images[active]} alt={`${title} photo ${active + 1}`} />
      </div>
      <div className="gallery-thumbs">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={i === active ? 'active' : undefined}
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
