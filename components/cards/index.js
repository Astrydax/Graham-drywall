export default class Cards extends React.Component {
  render() {
    const { Card, array, masonry } = this.props;
    return (
      <div className="container row equal-col cards">
        {array.map((data, i) => (
          <div className="col s12 m6 l4" key={i}>
            <Card {...data} masonry={masonry} />
          </div>
        ))}
      </div>
    );
  }
}
