<template>
  <div>
    <svg>
      <clipPath id="c1" clipPathUnits="objectBoundingBox">
        <polygon points="0.50000,0.00000 0.57794,0.13500 0.42206,0.13500 0.50000,0.00000" />
      </clipPath>
      <clipPath id="c2" clipPathUnits="objectBoundingBox">
        <polygon points="0.59526,0.16500 0.66454,0.28500 0.33546,0.28500 0.40474,0.16500" />
      </clipPath>
      <clipPath id="c3" clipPathUnits="objectBoundingBox">
        <polygon points="0.68187,0.31500 0.75115,0.43500 0.24885,0.43500 0.31813,0.31500" />
      </clipPath>
      <clipPath id="c4" clipPathUnits="objectBoundingBox">
        <polygon points="0.76847,0.46500 0.83775,0.58500 0.16225,0.58500 0.23153,0.46500" />
      </clipPath>
      <clipPath id="c5" clipPathUnits="objectBoundingBox">
        <polygon points="0.85507,0.61500 0.93301,0.75000 0.06699,0.75000 0.14493,0.61500" />
      </clipPath>
    </svg>
    <div class="a3d">
      <div class="s3d">
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
      </div>
      <div class="s3d">
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
      </div>
      <div class="s3d">
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
      </div>
      <div class="s3d">
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
      </div>
      <div class="s3d">
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
        <div class="s2d"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    get() {
      this.$siAxios({
        methods: "get",
        url: "http://www.restcloud.cn:8080/restcloud/rest/market/apps?jd"
      }).then(res => {
        // console.log(res);
        this.list = res.data;
      });
    },
    getList(id) {
      this.$siAxios({
        methods: "get",
        url:
          "http://www.restcloud.cn:8080/restcloud/rest/market/apps/categorys?appId=" +
          id
      }).then(res => {
        // console.log(res);
        this.list = res.data;
      });
    },
    erwei() {
      // var a = {
      //   captcha_str: "24243234"
      // };
      // this.$siAxios({
      //   methods: "post",
      //   url: "/api/restapi/eus/v3/captchas",
      //   data: {
      //     captcha_str: "18255163281"
      //   }
      // }).then(res => {
      //   console.log(res);
      // });

      axios
        .post("/api/restapi/eus/v3/captchas", {
          captcha_str: "24243234"
        })
        .then(res => {
          console.log("res");
        });
    },
    enter(id) {
      this.getList(id);
    }
  },
  created() {
    this.get();
    this.erwei();
  },
  mounted() {
    let a = window.sessionStorage.getItem("name");
  }
};
</script>

<style scoped>
p {
  margin: 10px;
  width: 90px;
}
.a {
  width: 300px;
  height: 200px;
  border: 1px solid black;
}
body {
  overflow: hidden;
  margin: 0;
  height: 100vh;
  -webkit-perspective: 40em;
  perspective: 40em;
  -webkit-perspective-origin: 50% calc(50% - 4.59619em);
  perspective-origin: 50% calc(50% - 4.59619em);
  background: #000;
}

div,
:before,
:after {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.a3d {
  margin-top: 0.84342em;
  animation: ani 10s linear infinite;
}

@keyframes ani {
  80% {
    transform: rotateY(1turn);
    animation-timing-function: ease-out;
  }
  100% {
    transform: rotateY(1turn) translate(calc(-50vw - 26em));
  }
}

.s3d:nth-child(1) {
  -webkit-transform: translateY(calc(-50vh - 9.19239em));
  transform: translateY(calc(-50vh - 9.19239em));
  -webkit-animation: fall-1 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
  animation: fall-1 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
}
.s3d:nth-child(1) .s2d:nth-child(-n + 4) {
  -webkit-clip-path: url(#c1);
  clip-path: url(#c1);
}
.s3d:nth-child(1) .s2d:nth-child(-n + 4):after {
  background-image: -webkit-linear-gradient(
    left,
    #f0a,
    #800055,
    #800055,
    #800055,
    #f0a
  );
  background-image: linear-gradient(
    90deg,
    #f0a,
    #800055,
    #800055,
    #800055,
    #f0a
  );
  animation: fill-1 10s ease-in infinite, shade 10s linear infinite;
}
.s3d:nth-child(1) .s2d:nth-child(5) {
  margin: 0em;
  width: 0em;
  height: 0em;
  -webkit-transform: translateY(-5.43961em) rotateX(90deg);
  transform: translateY(-5.43961em) rotateX(90deg);
}
.s3d:nth-child(1) .s2d:nth-child(5):before {
  background: #ff80d5;
  -webkit-animation: fill-1 10s infinite;
  animation: fill-1 10s infinite;
}
.s3d:nth-child(1) .s2d:nth-child(5):after {
  -webkit-animation: shadow-1 10s infinite;
  animation: shadow-1 10s infinite;
}
@keyframes fall-1 {
  40%,
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fill-1 {
  0%,
  72% {
    opacity: 0.001;
  }
  80%,
  100% {
    opacity: 0.999;
  }
}
@keyframes shadow-1 {
  0%,
  36% {
    opacity: 0.001;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  44%,
  100% {
    opacity: 0.5;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
}
.s3d:nth-child(2) {
  -webkit-transform: translateY(calc(-50vh - 9.19239em));
  transform: translateY(calc(-50vh - 9.19239em));
  -webkit-animation: fall-2 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
  animation: fall-2 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
}
.s3d:nth-child(2) .s2d:nth-child(-n + 4) {
  -webkit-clip-path: url(#c2);
  clip-path: url(#c2);
}
.s3d:nth-child(2) .s2d:nth-child(-n + 4):after {
  background-image: -webkit-linear-gradient(
    left,
    #fa0,
    #805500,
    #805500,
    #805500,
    #fa0
  );
  background-image: linear-gradient(
    90deg,
    #fa0,
    #805500,
    #805500,
    #805500,
    #fa0
  );
  -webkit-animation: fill-2 10s ease-in infinite, shade 10s linear infinite;
  animation: fill-2 10s ease-in infinite, shade 10s linear infinite;
}
.s3d:nth-child(2) .s2d:nth-child(5) {
  margin: -1.43em;
  width: 2.86em;
  height: 2.86em;
  -webkit-transform: translateY(-3.41729em) rotateX(90deg);
  transform: translateY(-3.41729em) rotateX(90deg);
}
.s3d:nth-child(2) .s2d:nth-child(5):before {
  background: #ffd580;
  -webkit-animation: fill-2 10s infinite;
  animation: fill-2 10s infinite;
}
.s3d:nth-child(2) .s2d:nth-child(5):after {
  -webkit-animation: shadow-2 10s infinite;
  animation: shadow-2 10s infinite;
}
@keyframes fall-2 {
  32%,
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fill-2 {
  0%,
  64% {
    opacity: 0.001;
  }
  72%,
  100% {
    opacity: 0.999;
  }
}
@keyframes shadow-2 {
  0%,
  28% {
    opacity: 0.001;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  36%,
  100% {
    opacity: 0.5;
    transform: scale(0.98);
  }
}
.s3d:nth-child(3) {
  transform: translateY(calc(-50vh - 9.19239em));
  animation: fall-3 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
}
.s3d:nth-child(3) .s2d:nth-child(-n + 4) {
  clip-path: url(#c3);
}
.s3d:nth-child(3) .s2d:nth-child(-n + 4):after {
  background-image: -webkit-linear-gradient(
    left,
    #af0,
    #558000,
    #558000,
    #558000,
    #af0
  );
  background-image: linear-gradient(
    90deg,
    #af0,
    #558000,
    #558000,
    #558000,
    #af0
  );
  animation: fill-3 10s ease-in infinite, shade 10s linear infinite;
}
.s3d:nth-child(3) .s2d:nth-child(5) {
  margin: -2.73em;
  width: 5.46em;
  height: 5.46em;
  transform: translateY(-1.57881em) rotateX(90deg);
}
.s3d:nth-child(3) .s2d:nth-child(5):before {
  background: #d5ff80;
  animation: fill-3 10s infinite;
}
.s3d:nth-child(3) .s2d:nth-child(5):after {
  animation: shadow-3 10s infinite;
}
@keyframes fall-3 {
  24%,
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fill-3 {
  0%,
  56% {
    opacity: 0.001;
  }
  64%,
  100% {
    opacity: 0.999;
  }
}
@keyframes shadow-3 {
  0%,
  20% {
    opacity: 0.001;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  28%,
  100% {
    opacity: 0.5;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
}
.s3d:nth-child(4) {
  -webkit-transform: translateY(calc(-50vh - 9.19239em));
  transform: translateY(calc(-50vh - 9.19239em));
  -webkit-animation: fall-4 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
  animation: fall-4 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
}
.s3d:nth-child(4) .s2d:nth-child(-n + 4) {
  -webkit-clip-path: url(#c4);
  clip-path: url(#c4);
}
.s3d:nth-child(4) .s2d:nth-child(-n + 4):after {
  background-image: -webkit-linear-gradient(
    left,
    #0af,
    #005580,
    #005580,
    #005580,
    #0af
  );
  background-image: linear-gradient(
    90deg,
    #0af,
    #005580,
    #005580,
    #005580,
    #0af
  );
  -webkit-animation: fill-4 10s ease-in infinite, shade 10s linear infinite;
  animation: fill-4 10s ease-in infinite, shade 10s linear infinite;
}
.s3d:nth-child(4) .s2d:nth-child(5) {
  margin: -4.03em;
  width: 8.06em;
  height: 8.06em;
  -webkit-transform: translateY(0.25967em) rotateX(90deg);
  transform: translateY(0.25967em) rotateX(90deg);
}
.s3d:nth-child(4) .s2d:nth-child(5):before {
  background: #80d5ff;
  -webkit-animation: fill-4 10s infinite;
  animation: fill-4 10s infinite;
}
.s3d:nth-child(4) .s2d:nth-child(5):after {
  -webkit-animation: shadow-4 10s infinite;
  animation: shadow-4 10s infinite;
}
@keyframes fall-4 {
  16%,
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fill-4 {
  0%,
  48% {
    opacity: 0.001;
  }
  56%,
  100% {
    opacity: 0.999;
  }
}
@keyframes shadow-4 {
  0%,
  12% {
    opacity: 0.001;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  20%,
  100% {
    opacity: 0.5;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
}
.s3d:nth-child(5) {
  -webkit-transform: translateY(calc(-50vh - 9.19239em));
  transform: translateY(calc(-50vh - 9.19239em));
  -webkit-animation: fall-5 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
  animation: fall-5 10s cubic-bezier(0.68, 0, 0.265, 1.125) infinite;
}
.s3d:nth-child(5) .s2d:nth-child(-n + 4) {
  -webkit-clip-path: url(#c5);
  clip-path: url(#c5);
}
.s3d:nth-child(5) .s2d:nth-child(-n + 4):after {
  background-image: -webkit-linear-gradient(
    left,
    #a0f,
    #550080,
    #550080,
    #550080,
    #a0f
  );
  background-image: linear-gradient(
    90deg,
    #a0f,
    #550080,
    #550080,
    #550080,
    #a0f
  );
  -webkit-animation: fill-5 10s ease-in infinite, shade 10s linear infinite;
  animation: fill-5 10s ease-in infinite, shade 10s linear infinite;
}
.s3d:nth-child(5) .s2d:nth-child(5) {
  margin: -5.33em;
  width: 10.66em;
  height: 10.66em;
  -webkit-transform: translateY(2.09815em) rotateX(90deg);
  transform: translateY(2.09815em) rotateX(90deg);
}
.s3d:nth-child(5) .s2d:nth-child(5):before {
  background: #d580ff;
  -webkit-animation: fill-5 10s infinite;
  animation: fill-5 10s infinite;
}
.s3d:nth-child(5) .s2d:nth-child(5):after {
  -webkit-animation: shadow-5 10s infinite;
  animation: shadow-5 10s infinite;
}
@keyframes fall-5 {
  8%,
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fill-5 {
  0%,
  40% {
    opacity: 0.001;
  }
  48%,
  100% {
    opacity: 0.999;
  }
}

@keyframes shadow-5 {
  0%,
  4% {
    opacity: 0.001;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  12%,
  100% {
    opacity: 0.5;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
}
.s2d {
  overflow: hidden;
}
.s2d:before,
.s2d:after {
  content: "";
}
.s2d:nth-child(-n + 4) {
  margin: -7.50555em;
  width: 15.01111em;
  height: 15.01111em;
  transform-origin: 50% 11.25833em;
}
.s2d:nth-child(-n + 4):before,
.s2d:nth-child(-n + 4):after {
  top: 0;
  left: 0;
  width: 500%;
  height: 100%;
  background-image: -webkit-linear-gradient(
    left,
    gainsboro,
    #9c9c9c,
    #9c9c9c,
    #9c9c9c,
    gainsboro
  );
  background-image: linear-gradient(
    90deg,
    gainsboro,
    #9c9c9c,
    #9c9c9c,
    #9c9c9c,
    gainsboro
  );
  background-size: 80% 100%;
}
.s2d:nth-child(5) {
  background: white;
}
.s2d:nth-child(5):before,
.s2d:nth-child(5):after {
  margin: inherit;
  width: inherit;
  height: inherit;
}
.s2d:nth-child(5):after {
  background: currentColor;
  filter: blur(10px);
}
.s2d:nth-child(1) {
  transform: rotateY(0deg) translateZ(6.5em) rotateX(35.26439deg);
}
.s2d:nth-child(1):before,
.s2d:nth-child(1):after {
  background-position: 0em;
  -webkit-animation: shade 10s linear infinite;
  animation: shade 10s linear infinite;
}
.s2d:nth-child(2) {
  transform: rotateY(90deg) translateZ(6.5em) rotateX(35.26439deg);
}
.s2d:nth-child(2):before,
.s2d:nth-child(2):after {
  background-position: -15.01111em;
  -webkit-animation: shade 10s linear infinite;
  animation: shade 10s linear infinite;
}
.s2d:nth-child(3) {
  transform: rotateY(180deg) translateZ(6.5em) rotateX(35.26439deg);
}
.s2d:nth-child(3):before,
.s2d:nth-child(3):after {
  background-position: -30.02221em;
  animation: shade 10s linear infinite;
}
.s2d:nth-child(4) {
  transform: rotateY(270deg) translateZ(6.5em) rotateX(35.26439deg);
}
.s2d:nth-child(4):before,
.s2d:nth-child(4):after {
  background-position: -45.03332em;
  animation: shade 10s linear infinite;
}

@keyframes shade {
  80%,
  100% {
    transform: translate(-60.04443em);
  }
}
a {
  position: absolute;
  top: 1em;
  left: 1em;
  color: lime;
  font: 1em trebuchet ms, verdana, sans-serif;
}
</style>