export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orb 1 — primary teal, top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-100px",
          background: "radial-gradient(circle, rgba(0, 212, 170, 0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "mesh1 18s ease-in-out infinite",
        }}
      />

      {/* Orb 2 — green, bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-150px",
          right: "-100px",
          background: "radial-gradient(circle, rgba(0, 184, 122, 0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "mesh2 22s ease-in-out infinite",
        }}
      />

      {/* Orb 3 — teal, center-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          top: "30%",
          right: "10%",
          background: "radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "mesh3 26s ease-in-out infinite",
        }}
      />

      {/* Orb 4 — deep teal, bottom-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "350px",
          height: "350px",
          bottom: "10%",
          left: "15%",
          background: "radial-gradient(circle, rgba(0, 184, 122, 0.1) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "mesh4 20s ease-in-out infinite",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(7,9,15,0.6) 100%)",
        }}
      />
    </div>
  );
}
