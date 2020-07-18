<template>
  <div class="svg">
    <GithubCorner />
    <canvas id="canvas" ref="canvas" width="1000" height="600"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import GithubCorner from "@/components/GithubCorner.vue";
import { onMounted, defineComponent } from "vue";
import svvg from "@/assets/zg1.svg";

export default {
  name: "vue3 svg",
  components: {
    GithubCorner,
  },
  setup() {
    onMounted(async () => {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      const N = 1600;
      const K = (() => {
        return Int16Array.from(
          {
            length: 250,
          },
          (_, i) => ((1 + i) >> 1) * (i & 1 ? -1 : 1)
        );
      })();
      const abs = ([re, im]) => {
        return Math.hypot(re, im);
      };
      const expim = (im) => {
        return [Math.cos(im), Math.sin(im)];
      };
      const add = ([rea, ima], [reb, imb]) => {
        return [rea + reb, ima + imb];
      };
      const mul = ([rea, ima], [reb, imb]) => {
        return [rea * reb - ima * imb, rea * imb + ima * reb];
      };

      async function svg() {
        const $elem = await fetch(svvg)
          .then((response) => response.text())
          .then((text) =>
            new DOMParser().parseFromString(text, "image/svg+xml")
          )
          .then((svg) => svg.documentElement);
        return $elem;
      }

      const $svg = await svg();
      const svgPath = $svg.querySelector("path");
      const svgLength = svgPath.getTotalLength();
      const viewbox = $svg.viewBox.baseVal;

      const P = (() => {
        return Array.from(
          {
            length: N,
          },
          (_, i) => {
            const { x, y } = svgPath.getPointAtLength((i / N) * svgLength);
            return [x - viewbox.width / 2, y - viewbox.height / 2];
          }
        );
      })();

      const DFT = (() => {
        return Array.from(K, (k) => {
          let x = [0, 0];
          for (let i = 0, N = P.length; i < N; ++i) {
            x = add(x, mul(P[i], expim(((k * i) / N) * 2 * -Math.PI)));
          }
          return [x[0] / N, x[1] / N];
        });
      })();

      const arrow = (
        context,
        [x0, y0],
        [x1, y1],
        { size = 1, delta = Math.PI / 6 } = {}
      ) => {
        const dx = x1 - x0;
        const dy = y1 - y0;
        size = Math.min(size, Math.hypot(dx, dy) / 2);
        const a = Math.atan2(dy, dx);
        const a0 = a - delta;
        const a1 = a + delta;
        context.moveTo(x1 - size * Math.cos(a0), y1 - size * Math.sin(a0));
        context.lineTo(x1, y1);
        context.lineTo(x1 - size * Math.cos(a1), y1 - size * Math.sin(a1));
      };

      function goCanvas(context) {
        const height = 720;
        // const N = 1600;
        const M = 250;
        const q = 5000;
        const zoom = 1;
        const width = 600;

        // const context = Document.context2d(width, height);
        const R = [];
        context.lineCap = "round";
        context.lineJoin = "round";
        for (let t = 0; t <= 1500; ++t) {
          const scale = (zoom * 0.5 * width) / viewbox.width;
          const a = ((t * 2) / q) * Math.PI;
          context.save();
          context.clearRect(0, 0, width, height);

          // Calculate the current point.
          let p = [0, 0];
          for (let i = 0; i < M; ++i) {
            p = add(p, mul(DFT[i], expim(a * K[i])));
          }
          // Zoom.
          context.translate(width / 2, height / 2);
          context.scale(scale, scale);
          context.translate(-p[0], -p[1]);

          // Draw circles.
          context.beginPath();
          for (let i = 0, p = [0, 0]; i < M; ++i) {
            const r = abs(DFT[i]);
            context.moveTo(p[0] + r, p[1]);
            context.arc(...p, r, 0, 2 * Math.PI);
            p = add(p, mul(DFT[i], expim(a * K[i])));
          }
          context.lineWidth = 0.5 / scale;
          context.strokeStyle = "#999";
          context.stroke();

          // Draw lines.
          context.beginPath();
          context.moveTo(0, 0);
          for (let i = 0, p = [0, 0]; i < M; ++i) {
            context.lineTo(...(p = add(p, mul(DFT[i], expim(a * K[i])))));
          }
          context.lineWidth = 0.75 / scale;
          context.strokeStyle = "#333";
          context.stroke();

          // Draw arrowheads.
          context.beginPath();
          for (let i = 0, p = [0, 0]; i < M; ++i) {
            arrow(context, p, (p = add(p, mul(DFT[i], expim(a * K[i])))), {
              size: 8 / scale,
            });
          }
          context.fillStyle = "#333";
          context.fill();

          // Draw the path.
          if (R.length < q) R.push(p);
          context.beginPath();
          context.moveTo(...R[0]);
          for (let i = 1, n = R.length; i < n; ++i) {
            context.lineTo(...R[i]);
          }
          if (R.length >= q) context.closePath();
          context.lineWidth = 1.5 / scale;
          context.strokeStyle = "#f00";
          context.stroke();
          context.restore();
          // yield context.canvas;
        }
      }
      goCanvas(ctx);
    });
  },
};
</script>
<style lang="scss">
.svg {
  background-color: #fff;
}
</style>
