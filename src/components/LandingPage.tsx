import PropTypes from "prop-types"; // no props received yet
const NUMBER_OF_MONTHS = 12;
const MAX_NUMBER_OF_DAYS = 31;
const MAX_YEARS = 120;

import "../styles/LandingPage.scss";

const LandingPage = () => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const months = [];

  for (let i = 0; i < NUMBER_OF_MONTHS; i++) {
    months.push(
      <option value={i + 1} key={i}>
        {monthNames[i]}
      </option>,
    );
  }

  const days = [];
  for (let i = 0; i < MAX_NUMBER_OF_DAYS; i++) {
    days.push(
      <option value={i + 1} key={i}>
        {i + 1}
      </option>,
    );
  }

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i > currentYear - MAX_YEARS; i--) {
    years.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal != null) {
      modal.style.display = "block";
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal != null) {
      modal.style.display = "none";
    }
  };

  return (
    <div id="landing-page">
      <div id="landing-page__left-section">
        <h1>FAKEbook</h1>
        <h2>Connect with friends and the world around you on FAKEbook</h2>
      </div>

      <div id="landing-page__right-section">
        <form id="login-form">
          <input
            type="text"
            id="login_email"
            name="login_email"
            placeholder="Email"
          />
          <input
            type="password"
            id="login_password"
            name="login_password"
            placeholder="Password"
          />
          <input type="submit" value="Log In" className="log-in-button" />
        </form>

        {/* In the future, this should redirect to the appropriate form page.
      There will also be an emailing feature to complete the forgot password feature.
      For now, it will redirect to a page "feature has not been implemented yet" using
      a React Link from Router module */}
        <a>Forgot password?</a>

        <div className="form-divider"></div>

        <button
          type="button"
          id="sign-up__button"
          onClick={() => openModal("sign-up__modal")}
        >
          Create new account
        </button>
      </div>

      <div id="sign-up__modal">
        <div id="sign-up__modal-content">
          <span
            id="sign-up__modal-content__close-button"
            onClick={() => closeModal("sign-up__modal")}
          >
            &times;
          </span>
          <div id="sign-up__modal-content__header">
            <h1>Sign Up</h1>
            <h2>It&apos;s quick and easy.</h2>
          </div>
          <form id="sign-up-form">
            <div className="sign-up-form__multiple-input-row">
              <input
                type="text"
                id="first_name"
                placeholder="First name"
                className="sign-up-form__input--gray-theme"
              />
              <input
                type="text"
                id="last_name"
                placeholder="Last name"
                className="sign-up-form__input--gray-theme"
              />
            </div>
            <input
              type="text"
              id="sign-up_email"
              name="sign-up_email"
              placeholder="Email"
              className="sign-up-form__input--gray-theme"
            />
            <input
              type="password"
              id="sign-up_password"
              name="sign-up_password"
              placeholder="New password"
              className="sign-up-form__input--gray-theme"
            />
            <div className="sign-up-form__sub-heading">Birthday</div>
            <div className="sign-up-form__multiple-input-row">
              <select name="month" id="month">
                {months}
              </select>
              <select name="day" id="day">
                {days}
              </select>
              <select name="year" id="year">
                {years}
              </select>
            </div>
            <div className="sign-up-form__sub-heading">Gender</div>
            <div className="sign-up-form__multiple-input-row">
              <div className="radio-input">
                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="gender" value="female" />
              </div>
              <div className="radio-input">
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="gender" value="male" />
              </div>
            </div>
            <input type="submit" value="Sign Up" className="sign-up-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
