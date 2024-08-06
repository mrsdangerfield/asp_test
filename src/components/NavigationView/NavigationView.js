import logoImgHolder from '../../assets/images/asp__logo-main.JPG';

const NavigationView = () => {

  return (
    <nav className="asp__main-nav-bar">
        <div class="asp__main-logo-cont">
          <img className="asp__main-logo-img" src={logoImgHolder} alt="" />
          <h1 className="asp__site-title">B2B Marketing Expo 2024 E-Zone</h1>
          <hr></hr>
        </div>
        <ul className="asp__navitemlist">
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor active">Dashboard</a>
          </li>
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor">Company Profile</a>
          </li>
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor">Marketing Tools</a>
          </li>
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor">Speaking Session</a>
          </li>
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor">Event planning tools & supplier details</a>
          </li>
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor">Health and safety declaration</a>
          </li>
          <li className="asp__navitemlistitem">
            <a href="http://www.bbc.co.uk" className="asp__nav-anchor">Add your product categories</a>
          </li>
        </ul>

        <div className="asp__download-ind">
            <img className="" src=""></img>
            <p>Shell scheme exhibitor</p>
            <p>Stands: SHELL001</p>
        </div>

        <button className="asp__btn--primary">View profile on website</button>

        <hr></hr>
        <a href="http://www.bbc.co.uk" className="">B2B Marketing Expo 2024 E-Zone</a>
      </nav>
  );
};

export default NavigationView;