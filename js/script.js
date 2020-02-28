var link = document.querySelector(".write-link");
var popup = document.querySelector(".letter");
var close = popup.querySelector(".close");
var user = popup.querySelector("[name=user]");
var mail = popup.querySelector("[name=mail]");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    user.value = storage;
    mail.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");

});


form.addEventListener("submit", function (evt) {
  if (!user.value || !mail.value) {
    evt.preventDefault();
    

  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
     
    }
  }
});

