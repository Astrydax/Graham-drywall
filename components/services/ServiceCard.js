import Card from '../cards/card';
import React from 'react';

class ServiceCard extends React.Component {
  componentDidMount() {
    if (typeof document !== 'undefined') {
      // grab relevent props
      const { title, imgSrc } = this.props;
      
      // init masonry
      const elem = document.querySelector('.cards');
      const masonry = new Masonry( elem, {
        itemSelector: '.col',
      });

      // make image onload
      const img = new Image();
      img.onload = function () {
        console.log(`onload ran for ${title} img`);
        masonry.layout();
      };
      img.src = imgSrc;
    }
  }

  render() {
    const { imgSrc, title, description } = this.props;
    const img = { src: imgSrc, alt: title };
    // const url = title.toLowerCase().split(' ').join('_');
    return (
      <Card
        img={img}
        title={title}
        content={description}
        key={title}
        className={'service-card'}
      />
    );
  }
}

export default ServiceCard;