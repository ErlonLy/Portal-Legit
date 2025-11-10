import { useEffect } from "react";

export default function MatrixRain() {
  useEffect(() => {
    const container = document.getElementById("matrix-rain");
    if (!container) return;
    container.innerHTML = "";

    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ";
    const count = Math.floor(window.innerWidth / 40); // menos colunas (fundo mais leve)

    for (let i = 0; i < count; i++) {
      const stream = document.createElement("div");
      stream.style.position = "absolute";
      stream.style.left = `${Math.random() * 100}vw`;
      stream.style.top = `${-Math.random() * 100}vh`;
      stream.style.fontSize = `${12 + Math.random() * 3}px`;
      stream.style.animation = `matrix-rain ${10 + Math.random() * 10}s linear infinite`;
      stream.style.animationDelay = `-${Math.random() * 20}s`;

      const len = 10 + Math.floor(Math.random() * 25);
      for (let j = 0; j < len; j++) {
        const c = document.createElement("div");
        c.className = "matrix-char";
        c.textContent = chars[Math.floor(Math.random() * chars.length)];
        c.style.marginTop = `${j * 18}px`;
        c.style.opacity = 1 - j / len;
        if (j === len - 1) {
          c.style.color = "#a8fca8";
          c.style.textShadow = "0 0 6px #0df20d, 0 0 10px #0df20d";
        }
        stream.appendChild(c);
      }
      container.appendChild(stream);
    }

    const interval = setInterval(() => {
      const allChars = container.querySelectorAll(".matrix-char");
      allChars.forEach((char) => {
        if (Math.random() > 0.97) {
          char.textContent =
            chars[Math.floor(Math.random() * chars.length)];
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="matrix-rain"
      className="matrix-rain-container fixed top-0 left-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
}
