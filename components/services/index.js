import React from 'react';
import ServiceCard from './ServiceCard';
import Cards from '../cards/';
import SectionHeader from '../SectionHeader'
import servicesData from '../../bin/servicesData';

class Services extends React.Component {
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
