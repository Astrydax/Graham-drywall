import Card from '../cards/card';

const ServiceCard = ({ title, description, imgSrc }) => {
  const img = { src: imgSrc, alt: title };
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