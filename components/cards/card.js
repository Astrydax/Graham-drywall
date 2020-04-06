import Link from 'next/link';

const Card = ({ title, content, img, link, className = '' }) => (
  <div className={`card ${className}`}>
    {img && (
      <div className="card-image">
        <img src={img.src} alt={img.alt} />
      </div>
    )}
    <div className="card-content">
      <span className="card-title">{title}</span>
      {content && <p>{content}</p>}
    </div>
    {link && (
      <div className="card-action">
        <Link href={link.href}>
          <a>
            <i class="material-icons right">chevron_right</i>
            {link.text}
          </a>
        </Link>
      </div>
    )}
  </div>
);

export default Card;