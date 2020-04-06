export default class Cards extends React.Component {
  componentDidMount() {
    // initialize masonry.js class when on the client side
    if (typeof document !== 'undefined') {
      var elem = document.querySelector('.cards');
      var msnry = new Masonry( elem, {
        // options
        itemSelector: '.col',
        // columnWidth: 200
      });
    }
  }

  render() {
    const { Card, array } = this.props;
    return (
      <div className="container row equal-col cards">
        {array.map((data, i) => (
          <div className="col s12 m6 l4" key={i}>
            <Card {...data} />
          </div>
        ))}
      </div>
    );
  }
}
