const projects = [
  {
    title: "Dịch vụ vệ sinh văn phòng",
    category: "Dự án",
    imageSize: "300x300",
  },
  {
    title: "Dịch vụ chăm sóc hoa viên, cây cảnh",
    category: "Dự án",
    imageSize: "300x300",
  },
  {
    title: "Vệ sinh công nghiệp",
    category: "Dự án",
    imageSize: "300x300",
  },
  {
    title: "Dự án 2",
    category: "Dự án",
    imageSize: "300x300",
  },
];

export default function Projects() {
  return (
    <section id="du-an" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-300 to-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md mb-4 shadow-lg">
            <span className="text-xs sm:text-sm font-bold drop-shadow-md">Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">
            DỰ ÁN ĐÃ THỰC HIỆN
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image - Placeholder */}
              <div className="relative w-full h-64 bg-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-xs font-semibold">{project.title}</p>
                  <p className="text-xs">{project.imageSize}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="text-xs text-yellow-400 font-semibold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Navigation Arrow (for last item) */}
              {index === projects.length - 1 && (
                <div className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 flex items-center justify-center text-white transition-colors">
                  <span>→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

