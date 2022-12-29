import React from "react";

function ActionButton() {
  return (
    <div class="bottom" data-aos="slide-up">
      (
      <a href="http://127.0.0.1:5173/signup">
        <input type="submit" value="Create New Account" class="signup" />
      </a>
      <a href="http://127.0.0.1:5173/login">
        <input type="submit" value="Login" class="login" />
      </a>
    </div>
  );
}
export default ActionButton;
