import InfoItem from './InfoItem';

const Info = () => (
  <div className="col s12 l5">
    <div className="section white-text blue z-depth-3" style={{ padding: '20px'}}>
      <InfoItem icon={'place'}>
          310 swanee drive <br/> maryville TN, 37804
      </InfoItem>
      <InfoItem icon={'local_phone'}>+1 865 680 2295</InfoItem>
      <InfoItem icon={'email'}>mgraham153@gmail.com</InfoItem>
    </div>
  </div>
);

export default Info;