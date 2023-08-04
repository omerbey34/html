import React from "react";

function App() {
  const validationControl = () => {
    var name = document.forms["ContantForm"]["name"].value;
    var email = document.forms["ContantForm"]["email"].value;
    var message = document.getElementsByClassName("message");
    var emailRegex = /^\S+@\S+\.\S+$/;

    if (email == "") {
      alert("E-posta alanı boş bırakılamaz.");
      return;
    }
    if (name == "") {
      alert("İsim alanı boş bırakılamaz.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Geçerli bir email adresi giriniz");
      return;
    }
    fetch("contact.php", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };
  return (
    <button
      onClick={validationControl}
      type="submit"
      className="btn btn-primary btn-block mb-4"
    >
      Framework Kontrol
    </button>
  );
}

export default App;
