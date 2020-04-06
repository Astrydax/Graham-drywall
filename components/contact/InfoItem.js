const InfoItem = ({ icon, children }) => (
  <div className="row valign-wrapper" style={{ margin: '0'}}>
    <i className="material-icons small col s2" style={{textShadow: '0 4px 10px rgba(0,0,0,.4)'}}>
      {icon}
    </i>
    <p className="col s10">
      {children}
    </p>
  </div>
);

export default InfoItem;