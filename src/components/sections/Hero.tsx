import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const threeContainerRef = useRef(null);
  const animationRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D Effect with Three.js
  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Set renderer size and add to DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeContainerRef.current.appendChild(renderer.domElement);

    // Create torus geometry (ring shape)
    const torusGeometry = new THREE.TorusGeometry(5, 0.5, 16, 100);

    // Create glowing material using your brand colors
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x756af2,
      transparent: true,
      opacity: 0.8,
    });

    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    // Add particle system for depth effect
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Create particles in a spherical distribution
    for (let i = 0; i < particleCount; i++) {
      // Random spherical coordinates
      const radius = 15 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color particles based on position (gradient from purple to turquoise)
      const colorFactor = Math.random();

      // Convert hex colors to RGB
      // Purple: #756AF2
      const r1 = 0x75 / 255;
      const g1 = 0x6a / 255;
      const b1 = 0xf2 / 255;

      // Turquoise: #94F3F6
      const r2 = 0x94 / 255;
      const g2 = 0xf3 / 255;
      const b2 = 0xf6 / 255;

      // Interpolate between the two colors
      colors[i * 3] = r1 + (r2 - r1) * colorFactor;
      colors[i * 3 + 1] = g1 + (g2 - g1) * colorFactor;
      colors[i * 3 + 2] = b1 + (b2 - b1) * colorFactor;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3),
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Position camera
    camera.position.z = 10;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x94f3f6, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      torus.rotation.x += 0.005;
      torus.rotation.y += 0.0075;
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (
        threeContainerRef.current &&
        threeContainerRef.current.contains(renderer.domElement)
      ) {
        threeContainerRef.current.removeChild(renderer.domElement);
      }

      window.removeEventListener("resize", handleResize);

      scene.remove(torus);
      scene.remove(particles);
      torusGeometry.dispose();
      torusMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative">
      {/* 3D Effect Container */}
      <div
        ref={threeContainerRef}
        className="absolute inset-0 z-0"
        style={{ opacity: Math.max(0.5, 1 - scrollY / 500) }}
      />

      {/* Main Hero Section */}
      <div className="min-h-[100vh] relative overflow-hidden">
        {/* Custom background gradient using brand colors */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at center, #14112a 0%, #14112a 70%, #756AF2 120%)`,
            opacity: 0.9,
          }}
        />

        {/* Animated glow effects */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#756AF2] blur-[100px] opacity-20 animate-pulse z-0" />
        <div
          className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-[#94f3f6] blur-[120px] opacity-15 animate-pulse z-0"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 py-16 relative z-20 flex flex-col items-center justify-center min-h-[100vh]">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Logo or brandmark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#756AF2] to-[#94f3f6] mx-auto flex items-center justify-center">
                  <span className="text-[#14112a] font-bold text-2xl">WP</span>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#756AF2] to-[#94f3f6] opacity-30 blur-md -z-10" />
              </div>
            </motion.div>

            {/* Main Heading with Animation */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              <span className="block mb-2">DIGITALE VISIONEN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#756AF2] to-[#94f3f6]">
                MIT WHITEPEAK
              </span>
            </motion.h1>

            {/* Slogan with Animation */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#ece8fc] text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light"
            >
              Wo Kreativität auf Strategie trifft und digitale Erlebnisse neue
              Höhen erreichen
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => (window.location.href = "/consultation")}
                className="bg-gradient-to-r from-[#756AF2] to-[#94f3f6] hover:opacity-90 text-[#14112a] font-medium rounded-full px-10 py-7 text-lg transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <span>Kostenlose Beratung</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.span>
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={() => smoothScroll("services")}
                className="border-[#ece8fc] text-[#ece8fc] hover:bg-[#ece8fc]/10 rounded-full px-8 py-7 text-lg transition-all duration-300"
              >
                Unsere Leistungen
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-20 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => smoothScroll("services")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center text-[#ece8fc]"
          >
            <span className="text-sm font-medium mb-1">Entdecken Sie mehr</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section Preview */}
      <div
        className="bg-[#14112a] py-16 relative overflow-hidden"
        id="services"
      >
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-25" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#ece8fc] mb-4">
              Unsere Expertise
            </h2>
            <p className="text-[#ece8fc]/80 max-w-2xl mx-auto">
              Wir kombinieren kreatives Design mit strategischer Planung, um
              Ihre Marke auf die nächste Stufe zu bringen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Branding",
                description:
                  "Wir entwickeln einzigartige Markenidentitäten, die Ihre Vision zum Leben erwecken.",
                icon: "✦",
              },
              {
                title: "Web Design",
                description:
                  "Moderne, responsive Websites mit beeindruckender UX/UI für optimale Conversion.",
                icon: "◈",
              },
              {
                title: "Digital Marketing",
                description:
                  "Datengetriebene Strategien für maximale Sichtbarkeit und Kundenbindung.",
                icon: "◇",
              },
              {
                title: "Entwicklung",
                description:
                  "Maßgeschneiderte digitale Lösungen mit modernsten Technologien.",
                icon: "○",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#14112a]/50 backdrop-blur-sm border border-[#756AF2]/20 rounded-xl p-6 group hover:bg-gradient-to-b hover:from-[#756AF2]/10 hover:to-transparent transition-all duration-300"
              >
                <div className="text-[#94f3f6] text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#ece8fc] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#ece8fc]/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
