export default class HTMLComponents {
	static sortDropdown() {
		return `
      <div class="dropdown">
	      <button class="dropdown-btn">
		      <span class="selected-option" data-option-selected="">
            Trier par :
          </span>
		      <span class="dropdown-btn-icon"><i class="fa-solid fa-chevron-up"></i>
          </span>
	      </button>
	      <ul class="dropdown-content">
		      <li><a data-option="Popularité" href="#">Popularité</a></li>
		      <li><a data-option="Date" href="#">Date</a></li>
		      <li><a data-option="Titre" href="#">Titre</a></li>
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

	static lightbox() {
		return `
      <button class="lightbox-button close-lightbox" id="close-lightbox" aria-label="Close dialog">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button class="lightbox-button prev" data-lightbox-button="prev" aria-label="Previous image">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="lightbox-button next" data-lightbox-button="next" aria-label="Next image">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <ul data-slides></ul>
    `;
	}
}
