Shery.imageEffect("#back", {
  style: 5,
  config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.0030395136778116 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 6.77, "range": [1, 15] }, "durationOut": { "value": 2.59, "range": [0.1, 5] }, "durationIn": { "value": 2.25, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.33, "range": [0, 10] }, "metaball": { "value": 0.15, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.02, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
});

let texts = document.querySelectorAll(".text");

texts.forEach(function (text) {
  let headings = text.querySelectorAll("h1");
  let index = 0;
  let swap = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!swap) {
      swap = true;
      gsap.to(headings[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], {
            top: "100%"
          });
          swap = false;
        },
      });

      index === headings.length - 1 ? (index = 0) : index++;

      gsap.to(headings[index], {
        top: '-=100%',
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});

