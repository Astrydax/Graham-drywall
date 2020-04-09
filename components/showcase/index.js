import SectionHeader from '../SectionHeader';


// iconName is materialize icon name
// goto https://materializecss.com/icons.html for list of icons
const ShowcaseFeature = ({ iconName, title, text }) => (
  <div className="row valign-wrapper">
    <div className="col">
      <i className="material-icons small">{iconName}</i>
    </div>
    <div className="col">
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  </div>
);

const Showcase = () => (
  <section className="section" id="about!">
    <div className="container">
      <SectionHeader
        title="SHOWCASE"
        description="Graham drywall contractors is one of the oldest drywall companies in East Tennessee. We were established in 1963 and we specialize in residential, commercial construction and remodels. Our company is based in Maryville, TN and has provide services in Blount, Sevier, Monroe, Knox, Loudon and Anderson county."
      />
      <div className="row section">
        <div className="col l5 s12 right">
          <img className="center-align z-depth-2" src="/images/GdwDrywall.png" style={{width: '100%'}}/>
        </div>
        <div className="col l7">
          <div className="section">
            <h5>Some title goes here</h5>
            <div className="divider"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <ShowcaseFeature iconName="looks_one" title="Some Title" text="Some accompanying text. Keep it short and sweet." />
          <ShowcaseFeature iconName="looks_two" title="Some Title" text="Some accompanying text. Keep it short and sweet." />
          <ShowcaseFeature iconName="looks_3" title="Some Title" text="Some accompanying text. Keep it short and sweet." />
        </div>
      </div>
      <div className="row section">
        <div className="col l5 s12 left">
          <img className="center-align z-depth-2" src="/images/GdwWheelB.png" style={{ width: '100%' }}/>
        </div>
        <div className="col l7">
          <div className="section">
            <h5>Some title goes here</h5>
            <div className="divider"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <ShowcaseFeature iconName="looks_one" title="Some Title" text="Some accompanying text. Keep it short and sweet." />
          <ShowcaseFeature iconName="looks_two" title="Some Title" text="Some accompanying text. Keep it short and sweet." />
          <ShowcaseFeature iconName="looks_3" title="Some Title" text="Some accompanying text. Keep it short and sweet." />
        </div>
      </div>
    </div>
  </section>
);

export default Showcase;