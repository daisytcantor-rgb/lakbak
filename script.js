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
  /* --- MOBILE MENU FUNCTION --- */
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

/* --- REGION CONTENT FUNCTION (Luzon, Visayas, Mindanao) --- */
function showRegion(region) {
  var displayDiv = document.getElementById("region-display");
  
  if (region === 'luzon') {
    displayDiv.innerHTML = `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="feature-card" style="width: 48%;">
          <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" alt="Banaue">
          <div class="feature-card-content">
            <h3>1. Banaue Rice Terraces (Ifugao)</h3>
            <p><strong>Description:</strong> Amazing mountain terraces carved by ancestors with great care.</p>
            <p><strong>Famous Foods:</strong> Pinikpikan, Native Chicken Soup</p>
            <p><strong>Ratings:</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Banaue Video" allowfullscreen></iframe>
          </div>
        </div>
        <div class="feature-card" style="width: 48%;">
          <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80" alt="Baguio">
          <div class="feature-card-content">
            <h3>2. Baguio City (Benguet)</h3>
            <p><strong>Description:</strong> The Summer Capital of the Philippines known for its cool breeze.</p>
            <p><strong>Famous Foods:</strong> Strawberry Taho, Good Taste Chicken</p>
            <p><strong>Ratings:</strong> ⭐⭐⭐⭐☆ (4.5/5)</p>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Baguio Video" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `;
  } else if (region === 'visayas') {
    displayDiv.innerHTML = `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="feature-card" style="width: 48%;">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" alt="Boracay">
          <div class="feature-card-content">
            <h3>1. Boracay Island (Aklan)</h3>
            <p><strong>Description:</strong> World-famous for its bright white powdery sand beach and clear waters.</p>
            <p><strong>Famous Foods:</strong> Chori Burger, Fresh Seafood</p>
            <p><strong>Ratings:</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Boracay Video" allowfullscreen></iframe>
          </div>
        </div>
        <div class="feature-card" style="width: 48%;">
          <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80" alt="Cebu">
          <div class="feature-card-content">
            <h3>2. Cebu City (Central Visayas)</h3>
            <p><strong>Description:</strong> A rich blend of history, heritage spots, waterfalls, and island beaches.</p>
            <p><strong>Famous Foods:</strong> Cebu Lechon, Dried Mangoes</p>
            <p><strong>Ratings:</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Cebu Video" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `;
  } else if (region === 'mindanao') {
    displayDiv.innerHTML = `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="feature-card" style="width: 48%;">
          <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80" alt="Siargao">
          <div class="feature-card-content">
            <h3>1. Siargao Island (Surigao del Norte)</h3>
            <p><strong>Description:</strong> The Surfing Capital of the Philippines with stunning blue horizons.</p>
            <p><strong>Famous Foods:</strong> Sizzling Seafood, Island Pizza</p>
            <p><strong>Ratings:</strong> ⭐⭐⭐⭐⭐ (5/5)</p>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Siargao Video" allowfullscreen></iframe>
          </div>
        </div>
        <div class="feature-card" style="width: 48%;">
          <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80" alt="Camiguin">
          <div class="feature-card-content">
            <h3>2. Camiguin Island</h3>
            <p><strong>Description:</strong> A volcanic island known for sweet lanzones fruits and springs.</p>
            <p><strong>Famous Foods:</strong> Pastel Bread, Fresh Lanzones</p>
            <p><strong>Ratings:</strong> ⭐⭐⭐⭐☆ (4.5/5)</p>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Camiguin Video" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `;
  }
}

/* --- DYNAMIC COMMENTS / SUGGESTIONS FUNCTION --- */
function addComment(event) {
  event.preventDefault();

  var nameInput = document.getElementById("comment-name");
  var textInput = document.getElementById("comment-text");
  var commentList = document.getElementById("comment-list");

  if (commentList.innerHTML.includes("No comments yet")) {
    commentList.innerHTML = "";
  }

  var newBox = document.createElement("div");
  newBox.style.background = "#fff8ec";
  newBox.style.padding = "15px";
  newBox.style.marginBottom = "10px";
  newBox.style.borderLeft = "4px solid #f6a53a";
  newBox.style.border = "1px solid #ead9c1";

  newBox.innerHTML = `
    <strong style="color: #173f57; font-size: 16px;">${nameInput.value}</strong>
    <p style="margin: 5px 0 0; color: #526977; font-size: 14px;">${textInput.value}</p>
  `;

  commentList.insertBefore(newBox, commentList.firstChild);

  nameInput.value = "";
  textInput.value = "";
}

/* --- FAQ ACCORDION FUNCTION --- */
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

/* --- PAGE INITIALIZATION (Connects menu & FAQ buttons) --- */
function preparePage() {
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


window.onload = preparePage;
