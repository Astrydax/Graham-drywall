import React from 'react';
import ServiceCard from './ServiceCard';
import Cards from '../cards/';
import SectionHeader from '../SectionHeader'
import servicesData from '../../bin/servicesData';
import runOnImageLoad from '../../bin/runOnImageLoad';


class Services extends React.Component {
  componentDidMount() {
    // initialize masonry.js class when on the client side
    if (typeof document !== 'undefined') {
      runOnImageLoad('.service-card img', () => {
        var elem = document.querySelector('.cards');
        var msnry = new Masonry( elem, {
          // options
          itemSelector: '.col',
          // columnWidth: 200
        });
      })
    }
  }


  render() {    
    return (
      <section className="section" id="services!">
        <SectionHeader
          title="OUR SERVICES"
          description="We offer a wide range of services, explore what we can do"
        />
        <Cards
          array={servicesData}
          Card={ServiceCard}
        />
      </section>
    ); 
  }
}

export default Services;
