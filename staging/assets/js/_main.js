function glbInit() {
  autoLang();
  pgInit();
}

function autoLang() {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.size === 0) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", "en");
    window.history.replaceState(window.history.state, "", url);
    searchParams.set("lang", "en");
  }

  const requestedLang = searchParams.get("lang"),
    lang = requestedLang ? requestedLang : "en",
    langSel = document.querySelectorAll(`[data-lang="${CSS.escape(lang)}"]`);

  langSel.forEach((element) => {
    element.style.display = "block";
  });
}