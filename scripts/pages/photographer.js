import Api from "../api/api.js";
import MediaFactory from "../factories/media.js";
import PhotographerFactory from "../factories/photographer.js";
import HTMLComponents from "../templates/HTMLComponents.js";

import ContactForm from "../utils/contactForm.js";
import Likes from "../utils/likes.js";
import SortMedias from "../utils/sort.js";
import Lightbox from "../utils/lightbox.js";

class Profile {
	display(photographer, medias) {
		const headerSection = document.querySelector(".photograph-header");
		const mediaSection = document.querySelector(".medias-section");
		const mainSection = document.querySelector("main");
		const lightboxSection = document.querySelector(".lightbox");
		const contactFormSection = document.querySelector("#contact_modal");
		const formModal = document.querySelector("#contact_modal");

		// Header & insert
		const photographerTemplate = new PhotographerFactory(photographer);
		headerSection.innerHTML = photographerTemplate.photographerHeader();
		mainSection.insertAdjacentHTML(
			"beforeend",
			photographerTemplate.photographerInsert()
		);

		// Sort dropdown
		mediaSection.insertAdjacentHTML(
			"beforebegin",
			HTMLComponents.sortDropdown()
		);

		// Contact form
		contactFormSection.insertAdjacentHTML(
			"beforeend",
			HTMLComponents.contactForm(photographer.name)
		);
		const contactForm = new ContactForm(formModal);
		contactForm.init();

		// Lightbox
		lightboxSection.insertAdjacentHTML(
			"beforeend",
			HTMLComponents.lightbox()
		);

		// Medias
		medias.map(media => {
			const mediaTemplate = new MediaFactory(media);
			mediaSection.innerHTML += mediaTemplate.mediaCard();
		});

		// Likes
		Likes.getTotalLikes();
		Likes.handleLike();
	}

	async init() {
		const id = new URL(document.location).searchParams.get("id");

		const photographer = await Api.getPhotographersById(id);
		const medias = await Api.getMediasByPhotographer(id);
		this.display(photographer, medias);

		const sortMedias = new SortMedias([
			...document.querySelectorAll(".media"),
		]);
		sortMedias.init();

		const lightbox = new Lightbox();
		lightbox.init();
	}
}

const profile = new Profile();
profile.init();