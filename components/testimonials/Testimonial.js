import Stars from './Stars';

const Testimonial = ({ name, review, href }) => (
  <div className="carousel-item" href={`#${href}!`}>
    <div className="testimonials__item blue center white-text z-depth-3">
      <h2>{name}</h2>
      <Stars count={5} />
      <i className="material-icons">format_quote</i>
      <p className="white-text">{review}</p>
      <i className="material-icons">format_quote</i>
    </div>
  </div>
);

export default Testimonial;