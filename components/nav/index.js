import NavBarLink from "./NavBarLink";
import Link from 'next/link';
import M from '../../bin/materializeLoader';
const { Component, Fragment } = React;

class Nav extends Component {
  componentDidMount(){
    if (M) M.Sidenav.init(this.sidenav);
  }

  render() {
    const Links = [
      <NavBarLink title="About" href="#about!" key={1} />,
      <NavBarLink title="Testimonials" href="#testimonials!" key={2} />,
      <NavBarLink title="Our Services" href="#services!" key={3} />,
      <NavBarLink title="Contact" href="#contact!" key={4} />,
    ];

    return (
      <Fragment>
        <div className="navbar-fixed">
          <nav className="z-depth-3">
            <div className="container nav-wrapper">
              <Link href="/">
                <a className="brand-logo nav-logo">
                  Graham Drywall
                  {/* <img src="./images/logo.png" alt="Dynamic Trades Logo"/> */}
                </a>
              </Link>
              <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                {Links}
              </ul>
            </div>
          </nav>
        </div>
    
        <ul className="sidenav" id="mobile-nav" ref={ref => this.sidenav = ref}>
          {Links}
        </ul>
      </Fragment>
    );
  }
}

export default Nav;
