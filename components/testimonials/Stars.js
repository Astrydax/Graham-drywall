const Stars = ({ count }) => {
  const icons = new Array(count).fill('star');
  return (
    <div>
      {icons.map((icon, i) => (
        <i className="material-icons tiny yellow-text text-accent-2" key={i}>
          {icon}
        </i>
      ))}
    </div>
  );
};

export default Stars;
