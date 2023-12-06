import PropTypes from "prop-types";

import "../styles/LandingPage.scss";

const LandingPage = () => {
  return <div id="landing-page" >
    <div id="landing-page__left-section" >
      <h1>FAKEbook</h1>
      <h2>Connect with friends and the world around you on FAKEbook</h2>
    </div>
    <form id="landing-page__right-section" >
      <input type="text" id="email" name="email" placeholder="Email" />
      <input type="text" id="password" name="password" placeholder="Password" />
      <input type="submit" value="Log In" className="log-in-button" />
      
      {/* In the future, this should redirect to the appropriate form page.
      There will also be an emailing feature to complete the forgot password feature.
      For now, it will redirect to a page "feature has not been implemented yet" using
      a React Link from Router module */}
      <a>Forgot password?</a>

      <div className="form-divider"></div>

      {/* Displays form module to create an account*/}
      <button className="create-new-account-button" >Create new account</button>
    </form>
  </div>;
};

export default LandingPage;
