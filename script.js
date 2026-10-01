/*
  Philippines Travelogue
  This small script uses basic JavaScript so students can follow each step.
*/

function showMobileMenu() {
  var menu = document.getElementById("main-nav");
  var button = document.getElementById("menu-button");

  if (menu.className.indexOf("open") === -1) {
    menu.className = "main-nav open";
    button.innerHTML = "Close menu";
  } else {
    menu.className = "main-nav";
    button.innerHTML = "Menu";
  }
}

function setActiveLink() {
  var links = document.getElementById("main-nav").getElementsByTagName("a");
  var pageName = window.location.pathname.split("/").pop();

  if (pageName === "") {
    pageName = "index.html";
  }

  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === pageName) {
      links[i].className = "active";
    }
  }
}

function toggleFaq(question) {
  var answer = question.nextElementSibling;

  if (answer.className.indexOf("open") === -1) {
    answer.className = "faq-answer open";
    question.className = "faq-question open";
  } else {
    answer.className = "faq-answer";
    question.className = "faq-question";
  }
}

function showGalleryMessage(title) {
  var message = document.getElementById("gallery-message");
  message.innerHTML = "You selected our " + title + " photo.";
  message.style.display = "block";
}

function thankVisitor(event) {
  event.preventDefault();
  var name = document.getElementById("visitor-name").value;
  var message = document.getElementById("form-message");

  if (name === "") {
    alert("Please type your name before sending the message.");
    return;
  }

  message.innerHTML = "Thank you, " + name + ". Your message has been received for our class travel journal.";
  message.style.display = "block";
  document.getElementById("contact-form").reset();
}

function preparePage() {
  setActiveLink();

  var menuButton = document.getElementById("menu-button");
  if (menuButton) {
    menuButton.onclick = showMobileMenu;
  }

  var questions = document.getElementsByClassName("faq-question");
  for (var i = 0; i < questions.length; i++) {
    questions[i].onclick = function () {
      toggleFaq(this);
    };
  }

  var galleryItems = document.getElementsByClassName("gallery-item");
  for (var j = 0; j < galleryItems.length; j++) {
    galleryItems[j].onclick = function () {
      showGalleryMessage(this.getAttribute("data-title"));
    };
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.onsubmit = thankVisitor;
  }
}

window.onload = preparePage;