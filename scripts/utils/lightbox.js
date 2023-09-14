export default class Lightbox {
	static init() {
		const links = Array.from(
			document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
		);

		const gallery = links.map(link => link.getAttribute("href"));

		links.forEach(link =>
			link.addEventListener("click", e => {
				e.preventDefault();
				document.body.style.overflow = "hidden";
				new Lightbox(e.currentTarget.getAttribute("href"), gallery);
			})
		);
	}

	constructor(url, gallery) {
		this.element = this.buildDOM();
		this.gallery = gallery;
		this.loadContent(url);
		this.onKeyUp = this.onKeyUp.bind(this);
		document.body.appendChild(this.element);
		document.addEventListener("keyup", this.onKeyUp);
	}

	onKeyUp(e) {
		if (e.key === "Escape") this.close(e);
		if (e.key === "ArrowRight") this.next(e);
		if (e.key === "ArrowLeft") this.prev(e);
	}

	close(e) {
		e.preventDefault();
		this.element.classList.add("fadeout");
		window.setTimeout(() => {
			this.element.remove();
			window.removeEventListener("keyup", this.onKeyUp);
		}, 500);
    document.body.style.overflow = "auto";
	}

	next(e) {
		e.preventDefault();
		let i = this.gallery.findIndex(i => i === this.url);
		if (i === this.gallery.length - 1) {
			i = -1;
		}
		this.loadContent(this.gallery[i + 1]);
	}

	prev(e) {
		e.preventDefault();
		let i = this.gallery.findIndex(i => i === this.url);
		if (i === 0) {
			i = this.gallery.length;
		}
		this.loadContent(this.gallery[i - 1]);
	}

	loadContent(url) {
		this.url = null;
		const container = this.element.querySelector(".lightbox__container");
		container.innerHTML = "";
		let content;
		if (url.includes(".jpg")) {
			content = new Image();
		} else if (url.includes(".mp4")) {
			content = document.createElement("video");
			content.controls = true;
		}
		container.appendChild(content);
		this.url = url;
		content.src = url;
	}

	buildDOM() {
		const dom = document.createElement("div");
		dom.classList.add("lightbox");
		dom.innerHTML = `
    <button type="button" class="lightbox__close">Close</button>
    <button type="button" class="lightbox__next">Close</button>
    <button type="button" class="lightbox__prev">Close</button>
    <div class="lightbox__container"></div>
    `;
		dom.querySelector(".lightbox__close").addEventListener(
			"click",
			this.close.bind(this)
		);
		dom.querySelector(".lightbox__next").addEventListener(
			"click",
			this.next.bind(this)
		);
		dom.querySelector(".lightbox__prev").addEventListener(
			"click",
			this.prev.bind(this)
		);

		return dom;
	}
}
