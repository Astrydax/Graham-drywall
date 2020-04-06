import Head from "./Head";
import Footer from "./footer/";
import NavBar from "./nav/";
// import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const Template = ({ InnerHead, title, options, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* InnerHead extends head, use Fragment as wrapper */}
        {InnerHead && <InnerHead />}
      </Head>
      {!options.disableNav && <NavBar />}
      <div>
        {children}
      </div>
      {!options.disableFooter && <Footer />}
    </div>
  );
};

Template.defaultProps = {
  InnerHead: null,
  title: "",
  options: {
    disableNav: false,
    disableFooter: false,
  },
};

export default Template;
