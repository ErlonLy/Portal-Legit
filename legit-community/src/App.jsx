import MatrixRain from "./MatrixRain";
import Footer from "./components/Footer";

export default function App() {
  const courses = [
    {
      title: "Iniciante",
      desc: "Aprenda os fundamentos do YOLO e Arduino. Configuração do ambiente e primeiros passos com Roboflow.",
    },
    {
      title: "Intermediário",
      desc: "Otimize modelos PyTorch e integre com Arduino para automação. Técnicas para spoofing e segurança.",
    },
    {
      title: "Avançado",
      desc: "Trabalhe com HostShield e YOLO em ONNX/TensorRT para desempenho máximo.",
    },
    {
      title: "Expert",
      desc: "Crie soluções Rust + React e personalizações indetectáveis. Performance e estética de ponta.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-white font-display overflow-x-hidden">
      <MatrixRain />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 sm:py-36">
        <div className="absolute inset-0 bg-black/70 rounded-lg backdrop-blur-sm"></div>
        <div className="relative flex flex-col items-center gap-6 max-w-2xl">
          <h1 className="matrix-text text-primary text-5xl sm:text-7xl font-black leading-tight tracking-tight drop-shadow-[0_0_25px_#0df20d]">
            Legit Community
          </h1>
          <p className="matrix-text-subtle text-slate-300 text-base sm:text-lg">
            Mergulhe no universo da análise de jogos com nossos cursos de ponta
            e transforme sua maneira de jogar.
          </p>
          <a
            href="https://discord.gg/PaneXdSEaP"
            target="_blank"
            rel="noreferrer"
            className="mt-6 bg-[#0df20d] text-[#0D0D0D] font-bold px-6 py-3 rounded-lg tracking-wide
                       shadow-[0_0_15px_rgba(13,242,13,0.3)]
                       hover:shadow-[0_0_25px_rgba(13,242,13,0.6)]
                       transition-all duration-300"
          >
            Junte-se ao Discord
          </a>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="absolute inset-0 bg-black/60 rounded-lg backdrop-blur-sm"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
            <h2 className="matrix-text text-3xl font-bold text-primary drop-shadow-[0_0_10px_#0df20d]">
              Comunidade de Engenharia Reversa Brasileira
            </h2>
            <p className="text-slate-300 max-w-md leading-relaxed">
              Aprenda com a própria comunidade — profissionais e entusiastas que
              compartilham conhecimento real sobre engenharia reversa,
              segurança, automação e modding.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-40 rounded-xl border border-primary/40 bg-black/70 backdrop-blur-sm flex items-center justify-center text-primary text-lg font-semibold shadow-[0_0_20px_rgba(13,242,13,0.2)]">
              <span className="matrix-text-subtle">#ReverseCommunityBR</span>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="flex flex-col gap-8 mt-8 mb-16">
        <div className="px-4 text-center">
          <h2 className="matrix-text text-primary text-3xl sm:text-4xl font-bold">
            Cursos de YOLO com Arduino
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
            Módulos completos do básico ao avançado para você dominar análise e
            automação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-20 max-w-6xl mx-auto">
          {courses.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-primary/40 bg-black/85 p-8 flex flex-col justify-between gap-5 
                         hover:border-primary/60 hover:shadow-[0_0_20px_rgba(13,242,13,0.25)] 
                         transition-all backdrop-blur-sm min-h-[220px] max-w-[500px] mx-auto"
            >
              <h3 className="text-primary text-2xl font-bold drop-shadow-[0_0_5px_#0df20d]">
                {item.title}
              </h3>
              <p className="text-[#f0fff0] leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
