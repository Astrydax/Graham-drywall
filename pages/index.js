import Hero from "../components/hero/";
import Showcase from '../components/showcase';
import Services from '../components/services/';
import Contact from '../components/contact/';
import Testimonials from '../components/testimonials/';
import Template from '../components/Template';

export default class Index extends React.Component {
  render() {
    return (
      <Template
        title="Site Title"
      >
        <Hero />
        {/* <About /> */}
        <Showcase />
        <Testimonials />
        <Services />
        <Contact />
      </Template>
    );
  }
}