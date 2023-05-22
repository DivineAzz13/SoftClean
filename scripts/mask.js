$(".input-tel").mask("+7 000-000-00-00");
document
	.querySelector(".input-tel")
	.addEventListener("focus", (e) => (e.target.value = "+7"));
