const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

menuButton?.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

globalNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    globalNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");
  const subject = encodeURIComponent("Qurea Study 無料相談の問い合わせ");
  const body = encodeURIComponent(`お名前: ${name}\nメール: ${email}\n\nご相談内容:\n${message}`);

  formMessage.textContent = "メール作成画面を開きます。";
  window.location.href = `mailto:info@example.com?subject=${subject}&body=${body}`;
});
