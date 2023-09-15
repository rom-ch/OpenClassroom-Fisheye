export default class HTMLComponents {
	static sortDropdown() {
		return `
      <div class="dropdown">
	      <button class="dropdown-btn" role="button" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="sortBy">
		      <span class="selected-option" data-option-selected="">
            Trier par :
          </span>
		      <span class="dropdown-btn-icon"><i class="fa-solid fa-chevron-up"></i>
          </span>
	      </button>
	      <ul class="dropdown-content" aria-labelledby="sortBy" aria-activedescendant="popularity" aria-selected="true" role="listbox">
		      <li><a data-option="Popularité" href="#" aria-label="popularity" role="option">Popularité</a></li>
		      <li><a data-option="Date" href="#" aria-label="date" role="option">Date</a></li>
		      <li><a data-option="Titre" href="#" aria-label="title" role="option">Titre</a></li>
	      </ul>
      </div>
    `;
	}

	static contactForm(name) {
		return `
      <div class="modal">
      <header>
        <h2>
          <span>Contactez-moi</span>
          <span>${name}</span>
        </h2>
        <a href="#" class="close__modal">
          <img src="assets/icons/close.svg" aria-label="Close modal" />
        </a>
      </header>

      <form id="form">
        <div>
          <label for="fname">Prénom</label>
          <input type="text" id="fname" />
        </div>
        <div>
          <label for="lname">Nom</label>
          <input type="text" id="lname" />
        </div>
        <div>
          <label for="fname">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="message">Votre message</label>
          <textarea
            name=""
            id="message"
            cols="100"
            rows="10"
          ></textarea>
        </div>

        <button type="submit" class="contact__button">
          Envoyer
        </button>
      </form>
    </div>
    `;
	}
}
