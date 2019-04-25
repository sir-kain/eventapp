const buttonClickHandler = event => {
  const bodyElement = document.getElementById("body");
  bodyElement.className = bodyElement.className === "light" ? "dark" : "light";
  event.preventDefault();
};
const themeSwitcherButton = document.getElementById("theme-switcher");
themeSwitcherButton.addEventListener("click", buttonClickHandler);

//

let meetupsElm = document.getElementById('meetups');
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(meetups => {
    meetups.map(meetup => {
      let meetupElm = 
      `<li>
        <div class="event">
          <ul class="metadata">
            <li>
              <h1>lorem</h1>
            </li>
            <li>
              <span class="icon-date" /> <span>lorem</span>
            </li>
            <li>
              <span class="icon-location" />
              <span>Edacy, Sacré Coeur</span>
            </li>
          </ul>
          <div>
            <p class="meetup-avatar">
              <img
                src="assets/img/meetings/image-dpjs.png"
                alt="dakar promise js"
                width="120"
                height="120"
              />
            </p>
          </div>
        </div>
      </li>`;
      meetupsElm.insertAdjacentHTML('beforeend', meetupElm);
    })
  });
