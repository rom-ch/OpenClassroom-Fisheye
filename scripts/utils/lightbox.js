export default class Lightbox {
	static init() {
		const links = Array.from(
			document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
		);

		const hrefs = links.map(link => link.getAttribute("href"));
		const titles = links.map(link =>
			link.parentElement.getAttribute("data-title")
		);
		const gallery = hrefs.map((x, i) => {
			return {
				href: x,
				title: titles[i],
			};
		});

		links.forEach(link =>
			link.addEventListener("click", e => {
				e.preventDefault();
				document.body.style.overflow = "hidden";
				new Lightbox(
					e.currentTarget.getAttribute("href"),
					e.currentTarget.parentElement.getAttribute("data-title"),
					gallery
				);
			})
		);
	}

	constructor(url, title, gallery) {
		this.element = this.buildDOM();
		this.gallery = gallery;
		this.loadContent(url, title);
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
		let i = this.gallery.findIndex(item => item.href === this.url);
		if (i === this.gallery.length - 1) {
			i = -1;
		}
		this.loadContent(this.gallery[i + 1].href, this.gallery[i + 1].title);
	}

	prev(e) {
		e.preventDefault();
		let i = this.gallery.findIndex(item => item.href === this.url);
		if (i === 0) {
			i = this.gallery.length;
		}
		this.loadContent(this.gallery[i - 1].href, this.gallery[i - 1].title);
	}

	loadContent(url, title) {
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
		content.setAttribute("aria-label", title);

		const p = document.createElement("p");
		p.classList.add("lightbox__title");
		p.innerHTML = title;
		container.appendChild(p);
	}

	buildDOM() {
		const dom = document.createElement("div");
		dom.classList.add("lightbox");
		dom.innerHTML = `
    <button type="button" class="lightbox__close" aria-label="Close Dialog">
			<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white"/>
			</svg>
		</button>
    <button type="button" class="lightbox__prev" aria-label="Previous image">
			<svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z" fill="#911C1C"/>
			</svg>
		</button>
    <button type="button" class="lightbox__next" aria-label="Next image">
			<svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z" fill="#911C1C"/>
			</svg>
		</button>
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
