document.documentElement.classList.add("js-ready");

const currentYear = new Date().getFullYear();
document.documentElement.style.setProperty("--current-year", `"${currentYear}"`);
