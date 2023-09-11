export default class Lightbox {
	constructor() {
		this._lightbox = document.querySelector(".lightbox");
		this._body = document.querySelector("body");
	}

	openLightbox() {
		this._lightbox.style.display = "block";
		this._body.style.overflow = "hidden";
		window.scrollTo(0, 0);
	}

	closeLightbox() {
		this._lightbox.style.display = "none";
		this._body.style.overflow = "auto";
	}

	lightboxNav() {}

	init() {
		const mediaLink = document.querySelectorAll(".media__link");
		const closeBtn = document.querySelector(".close-lightbox");
		const lightboxUl = document.querySelector("[data-slides]");
		const lightboxNavBtn = document.querySelectorAll(
			"[data-lightbox-button]"
		);

		lightboxNavBtn.forEach(btn => {
			btn.addEventListener("click", () => {
				const offset = btn.dataset.lightboxButton === "next" ? 1 : -1;
				const slides = btn
					.closest("[data-lightbox]")
					.querySelector("[data-slides]");

				const activeSlide = slides.querySelector("[data-active]");
				let newIndex =
					[...slides.children].indexOf(activeSlide) + offset;

				if (newIndex < 0) newIndex = slides.children.length - 1;
				if (newIndex >= slides.children.length) newIndex = 0;

				slides.children[newIndex].dataset.active = true;
				delete activeSlide.dataset.active;
			});
		});

		mediaLink.forEach(link => {
			const li = document.createElement("li");
			li.className = "slide";
			li.setAttribute("aria-label", "image closeup view");
			const caption = document.createElement("p");
			caption.innerHTML = link.parentElement.dataset.title;

			if (link.firstElementChild.tagName === "IMG") {
				const img = document.createElement("img");
				img.src = link.firstElementChild.src;
				img.alt = link.parentElement.dataset.title;
				li.appendChild(img);
			} else {
				const video = document.createElement("video");
				video.setAttribute("controls", "");
				const source = document.createElement("source");
				source.src = link.firstElementChild.firstElementChild.src;
				video.appendChild(source);
				li.appendChild(video);
			}
			li.appendChild(caption);
			lightboxUl.appendChild(li);

			link.addEventListener("click", () => {
				li.setAttribute("data-active", "");
				this.openLightbox();
			});
		});

		closeBtn.addEventListener("click", () => {
			delete document.querySelector("[data-active]").dataset.active;
			this.closeLightbox();
		});

		document.addEventListener("keydown", e => {
			if (e.key === "Escape") {
				delete document.querySelector("[data-active]").dataset.active;
				this.closeLightbox();
			}
		});
	}
}
