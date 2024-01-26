(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (!lightSwitch) {
    return;
  }

  function darkMode() {
    document.querySelectorAll(".bg-light").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });

    document.body.classList.add("bg-dark");
    document.body.classList.remove("bg-light");

    // Set text color to white
    document.body.classList.remove("text-dark");
    document.body.classList.add("text-light");

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      tables[i].classList.add("table-dark");
    }

    if (!lightSwitch.checked) {
      lightSwitch.checked = true;
    }
    localStorage.setItem("lightSwitch", "dark");
  }

  function lightMode() {
    document.querySelectorAll(".bg-dark").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.body.classList.add("bg-light");
    document.body.classList.remove("bg-dark");

    // Set text color to black
    document.body.classList.remove("text-light");
    document.body.classList.add("text-dark");

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("table-dark")) {
        tables[i].classList.remove("table-dark");
      }
    }

    if (lightSwitch.checked) {
      lightSwitch.checked = false;
    }
    localStorage.setItem("lightSwitch", "light");
  }

  function hideLightSVG() {
    const svg = document.getElementById("hide-light");
    svg.style.display = "none";
  }

  function showLightSVG() {
    const svg = document.getElementById("hide-light");
    svg.style.display = "block";
  }

  function hideDarkSVG() {
    const svg = document.getElementById("hide-dark");
    svg.style.display = "none";
  }

  function showDarkSVG() {
    const svg = document.getElementById("hide-dark");
    svg.style.display = "block";
  }

  function onToggleMode() {
    if (lightSwitch.checked) {
      darkMode();
      hideLightSVG();
      showDarkSVG();
    } else {
      lightMode();
      hideDarkSVG();
      showLightSVG();
    }
  }

  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  function setup() {
    var settings = localStorage.getItem("lightSwitch");
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == "dark") {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener("change", onToggleMode);
    onToggleMode();
  }

  setup();
})();
