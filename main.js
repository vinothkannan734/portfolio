function showsidebar() {
  addEventListener("click", (e) => {
    e.preventDefault();
  });
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = "flex";
}
function closesidebar() {
  addEventListener("click", (e) => {
    e.preventDefault();
  });
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";
}

document.querySelectorAll("[data-scroll]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-scroll");
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
