let border = document.querySelectorAll(".nameEmailPassword");
let TrialCard = document.getElementById("TrialCard");
let firstName = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email2 = document.getElementById("email2");
let password2 = document.getElementById("password2");
let successfully = document.getElementById("successfully");
let None = document.getElementById("None");
TrialCard.addEventListener("click", () => {
  let isValid = true;
  border.forEach((element) => {
    let includefirstName = element.children[0];
    let includelastName = element.children[2];
    let includeEmail = element.children[4];
    let includePassword = element.children[6];

    if (includefirstName.value.length <= 1) {
      includefirstName.style.border = "2px solid rgba(255, 121, 121, 1)";
      firstName.style.display = "block";
      isValid = false;
    } else {
      includefirstName.style.border = "";
      firstName.style.display = "none";
    }

    if (includelastName.value.length <= 1) {
      includelastName.style.border = "2px solid rgba(255, 121, 121, 1)";
      lastname.style.display = "block";
      isValid = false;
    } else {
      includelastName.style.border = "";
      lastname.style.display = "none";
    }

    if (includeEmail.value.length <= 1 || !includeEmail.value.includes("@")) {
      includeEmail.style.border = "2px solid rgba(255, 121, 121, 1)";
      email2.style.display = "block";
      includeEmail.placeholder = "email@example.com";
      includeEmail.classList.add("placeholder-red");
      isValid = false;
    } else {
      includeEmail.style.border = "";
      email2.style.display = "none";
      includeEmail.classList.remove("placeholder-red");
    }

    if (includePassword.value.length === 0) {
      includePassword.style.border = "2px solid rgba(255, 121, 121, 1)";
      password2.style.display = "block";
      isValid = false;
    } else {
      includePassword.style.border = "";
      password2.style.display = "none";
    }
  });

  if (isValid) {
    None.style.display = "none";
    successfully.textContent = "Your account has been successfully created.";
    successfully.style.display = "block";
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "none";
  }
});
