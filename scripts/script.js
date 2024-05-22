let windowInnerWidth = window.innerWidth;
let mainProductsContainer = document.getElementById("main-products-container");
let mainSliderContainer = document.getElementById("main-slider-container");

// Функция для заполнения контейнера с карточками продуктов
function fillProducsContainer(data) {
	let productsHTML = "";
	data.forEach((product) => {
		productsHTML += `
			<div class="product-card">
				<div class="product-label ${product.bgClass}">${product.labelText}</div>
				<div class="product-card-inner">
					<img
						src="${product.img}"
						alt="product image"
					/>
					<div class="product-author ${product.txtClass}">${product.authorText}</div>
					<h2 class="product-name">${product.productName}</h2>
					<div class="product-text">${product.productText}</div>
					<button class="main-button ${product.bgClass}">Call to action</button>
				</div>
			</div>
		`;
	});

	return productsHTML;
}

// Функция для заполнения слайдера с карточками продуктов
function fillProducsSlider(data) {
	let productsHTML = "";
	data.forEach((product) => {
		productsHTML += `
			<div class="product-card slide">
				<div class="product-label ${product.bgClass}">${product.labelText}</div>
				<div class="product-card-inner">
					<img
						src="${product.img}"
						alt="product image"
					/>
					<div class="product-author ${product.txtClass}">${product.authorText}</div>
					<h2 class="product-name">${product.productName}</h2>
					<div class="product-text">${product.productText}</div>
					<button class="main-button ${product.bgClass}">Call to action</button>
				</div>
			</div>
		`;
	});

	return productsHTML;
}

// Заполнение в зависимости от ширины экрана
if (windowInnerWidth >= 1200) {
	mainProductsContainer.innerHTML = fillProducsContainer(w1200Product);
	mainSliderContainer.innerHTML = fillProducsSlider(w1200Slider);
} else if (windowInnerWidth >= 768 && windowInnerWidth < 1200) {
	mainProductsContainer.innerHTML = fillProducsContainer(w1199Product);
	mainSliderContainer.innerHTML = fillProducsSlider(w1199Product);
} else if (windowInnerWidth >= 576 && windowInnerWidth < 768) {
	mainProductsContainer.innerHTML = fillProducsContainer(w767Product);
	mainSliderContainer.innerHTML = fillProducsSlider(w767Product);
} else if (windowInnerWidth < 576) {
	mainProductsContainer.innerHTML = fillProducsContainer(w575Product);
	mainSliderContainer.innerHTML = fillProducsSlider(w575Product);
}

// Листание карточек внутри слайдера
const prevBtn = document.querySelector(".arrow-button.prev");
const nextBtn = document.querySelector(".arrow-button.next");
let slideIndex = 0;

function showSlides() {
	const slides = document.querySelectorAll(".slide");

	slides.forEach((slide) => {
		slide.style.display = "none";
	});

	if (window.innerWidth >= 1200) {
		if (slideIndex >= slides.length - 2) {
			slideIndex = 0;
		}
		if (slideIndex < 0) {
			slideIndex = slides.length - 3;
		}

		slides[slideIndex].style.display = "block";
		slides[slideIndex + 1].style.display = "block";
		slides[slideIndex + 2].style.display = "block";
	} else if (window.innerWidth >= 576 && window.innerWidth < 1200) {
		if (slideIndex >= slides.length - 1) {
			slideIndex = 0;
		}
		if (slideIndex < 0) {
			slideIndex = slides.length - 2;
		}

		slides[slideIndex].style.display = "block";
		slides[slideIndex + 1].style.display = "block";
	} else if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	slides[slideIndex].style.display = "block";
}

showSlides();

prevBtn.addEventListener("click", () => {
	slideIndex -= 1;
	showSlides();
});

nextBtn.addEventListener("click", () => {
	slideIndex += 1;
	showSlides();
});
