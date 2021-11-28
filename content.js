document.addEventListener("keydown", (e) => {
  if (e.key === "s" && e.metaKey) {
    e.preventDefault();
    const input = document.getElementById("twotabsearchtextbox");
    input.focus();
  }
});
