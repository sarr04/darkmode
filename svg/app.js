const moonPath =
  "M17 30C17 46.5685 29.5 60 29.5 60C13.2076 60 0 46.5685 0 30C0 13.4315 13.2076 0 29.5 0C31.6961 0 17 13.4315 17 30Z";

const sunPath =
  "M59 30C59 46.5685 45.7924 60 29.5 60C13.2076 60 0 46.5685 0 30C0 13.4315 13.2076 0 29.5 0C45.7924 0 59 13.4315 59 30Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })

    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 0 : 320,
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
      },
      "-=700"
    );

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
