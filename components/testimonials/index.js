import M from '../../bin/materializeLoader';
import SectionHeader from '../SectionHeader';
import Testimonial from './Testimonial';
import testimonialsData from '../../bin/testimonialsData';



class Testimonials extends React.Component {
  componentDidMount() {
    if (M) {
      var instance = M.Carousel.init(this.elem, {
        fullWidth: true,
        indicators: true,
      });
    }
  }

  render() {
    return (
      <section className="section grey darken-4" id="testimonials!">
        <div className="container">
          <SectionHeader title="TESTIMONIALS" className="white-text" />
          <div className="carousel carousel-slider center testimonials" ref={ref => this.elem = ref}>
            {testimonialsData.map((item, i) => <Testimonial {...item} key={i} href={i} />)}
          </div>
        </div>

      </section>
    );
  }
}

export default Testimonials;