import Card from '../cards/card';

const ServiceCard = ({ title, description, imgSrc }) => {
  const img = { src: 'http://placehold.jp/1920x1080.png', alt: title };
  const url = title.toLowerCase().split(' ').join('_');

  return (
    <Card
      img={img}
      title={title}
      content={description}
      key={title}
    />
  );
};

export default ServiceCard;