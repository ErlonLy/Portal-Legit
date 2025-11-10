export default function Courses() {
  const data = [
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
    <section className="flex flex-col gap-8 mt-16">
      <div className="px-4 text-center">
        <h2 className="matrix-text text-primary text-3xl sm:text-4xl font-bold">
          Cursos de YOLO com Arduino
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Módulos completos do básico ao avançado para você dominar análise e automação.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
      {data.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-primary/40 bg-black/85 p-6 flex flex-col gap-3 
              hover:border-primary/60 hover:shadow-[0_0_20px_rgba(13,242,13,0.25)] 
              transition-all backdrop-blur-sm"
        >
          <h3 className="text-primary text-xl font-bold drop-shadow-[0_0_8px_#0df20d]">
            {item.title}
          </h3>
          <p className="text-[#e8ffe8]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
    </section>
  );
}
