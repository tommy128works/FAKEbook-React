// import PropTypes from "prop-types"; // no props received yet
import React from "react";
const NUMBER_OF_MONTHS = 12;
const MAX_NUMBER_OF_DAYS = 31;
const MAX_YEARS = 120;
const user_sign_up_post_url = "http://localhost:3000/sign-up";
const user_log_in_post_url = "http://localhost:3000/log-in";

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
  const months: React.JSX.Element[] = [];

  for (let i = 0; i < NUMBER_OF_MONTHS; i++) {
    months.push(
      <option value={i} key={i}>
        {monthNames[i]}
      </option>,
    );
  }

  const days: React.JSX.Element[] = [];
  for (let i = 0; i < MAX_NUMBER_OF_DAYS; i++) {
    days.push(
      <option value={i + 1} key={i}>
        {i + 1}
      </option>,
    );
  }

  const years: React.JSX.Element[] = [];
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
        <form id="log-in-form" action={user_log_in_post_url} method="POST">
          <input
            type="text"
            id="log_in_email"
            name="log_in_email"
            placeholder="Email"
          />
          <input
            type="password"
            id="log_in_password"
            name="log_in_password"
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
          className="button--success"
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
          <form id="sign-up-form" action={user_sign_up_post_url} method="POST">
            <div className="sign-up-form__multiple-input-row">
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First name"
                className="sign-up-form__input sign-up-form__input--gray-theme"
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last name"
                className="sign-up-form__input sign-up-form__input--gray-theme"
              />
            </div>
            <input
              type="text"
              id="sign_up_email"
              name="sign_up_email"
              placeholder="Email"
              className="sign-up-form__input sign-up-form__input--gray-theme"
            />
            <input
              type="password"
              id="sign_up_password"
              name="sign_up_password"
              placeholder="New password"
              className="sign-up-form__input sign-up-form__input--gray-theme"
            />
            <div className="sign-up-form__sub-heading">Birthday</div>
            <div className="sign-up-form__multiple-input-row">
              <select
                name="month"
                id="month"
                className="sign-up-form__input sign-up-form__input--default-theme"
              >
                {months}
              </select>
              <select
                name="day"
                id="day"
                className="sign-up-form__input sign-up-form__input--default-theme"
              >
                {days}
              </select>
              <select
                name="year"
                id="year"
                className="sign-up-form__input sign-up-form__input--default-theme"
              >
                {years}
              </select>
            </div>
            <div className="sign-up-form__sub-heading">Gender</div>
            <div className="sign-up-form__multiple-input-row">
              <div className="sign-up-form__input sign-up-form__input--default-theme radio-input">
                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="gender" value="female" />
              </div>
              <div className="sign-up-form__input sign-up-form__input--default-theme radio-input">
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="gender" value="male" />
              </div>
            </div>
            <input type="submit" value="Sign Up" className="button--success" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
