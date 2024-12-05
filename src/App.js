import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import Countdown from "./components/countdown.js"; // Ajusta la ruta según la ubicación del archivo

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-serif text-spiritualBlue bg-crystalPink min-h-screen relative">
      {/* Luz del Alma Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-tarotGold to-crystalPink">
  {/* Imagen PNG del logo */}
  <motion.img
    src="https://i.imgur.com/IDSFJYo.png" 
    alt="Luz del Alma"
    className="w-48 md:w-64 object-contain transition-transform duration-300 hover:scale-105"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  />

  {/* Título */}
  <motion.h1
    className="text-5xl font-bold text-white mt-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    Luz del Alma
  </motion.h1>

  {/* Eslogan */}
  <motion.p
    className="text-lg text-white mt-4 text-center max-w-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    Conecta con tu energía interior y descubre nuevas formas de equilibrar tu vida.
  </motion.p>

  {/* Botón animado */}
  <Link to="servicios" smooth={true} duration={500} offset={10}>
    <motion.button
      aria-label="Explorar más servicios"
      className="mt-8 px-8 py-4 bg-white text-tarotGold font-bold rounded-lg shadow-xl hover:bg-tarotGold hover:text-white transition duration-300 transform hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      ¡Explora Más!
    </motion.button>
  </Link>
</section>


      {/* Quién Soy */}
      <section
  id="quien-soy"
  className="p-8 py-20 bg-white flex flex-col md:flex-row items-center md:items-start md:gap-8 max-w-6xl mx-auto"
>
  <motion.div
    className="w-full md:w-1/2"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src="https://i.imgur.com/MOp39kI.jpeg"
      alt="Verónica Meda"
      className="rounded-lg shadow-lg w-full h-auto object-cover transition-all transform"
    />
  </motion.div>

  <motion.div
    className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-5xl font-bold mb-8 text-crystalPink">¿Quién soy?</h2>
    <p className="text-xl text-gray-700 mb-6">
      Soy <span className="font-bold text-tarotGold">Verónica Meda</span>, una
      guía espiritual comprometida con ayudar a las personas a encontrar
      equilibrio y armonía en sus vidas. A través de un enfoque personalizado y
      profundo, acompaño a mis clientes a través de diversas prácticas que nutren
      tanto el cuerpo como el alma.
    </p>
    <p className="text-xl text-gray-700 mb-6">
      Mi camino comenzó con una profunda conexión con la naturaleza y la
      energía de los cristales. Desde entonces, he dedicado mi vida a aprender
      y compartir técnicas que promuevan el bienestar integral. Con la
      integración de <span className="font-bold">masajes con aceites esenciales</span>, la 
      <span className="font-bold"> lectura de tarot</span> y la conexión con la
      <span className="font-bold">energía de los cristales</span>, busco ofrecer
      herramientas que permitan a cada persona desbloquear su energía interior
      y vivir en equilibrio.
    </p>
    <p className="text-xl text-gray-700 mb-8">
      Te invito a que te conectes conmigo para iniciar este viaje de
      transformación y autoconocimiento. A través de mis servicios, descubrirás
      cómo sanar, revitalizar y armonizar tu ser.
    </p>
  </motion.div>
</section>

     {/* Servicios */}
<section id="servicios" className="py-20 bg-crystalPink">
  <h2 className="text-4xl font-bold text-center text-black mb-10">
    Servicios
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
    {/* Servicios individuales */}
    {[
      {
        title: "Masajes Holísticos",
        description:
          "Relaja tu cuerpo y equilibra tu mente con masajes que integran técnicas tradicionales y energéticas.",
        img: "https://i.imgur.com/RlWOaZb.jpeg",
      },
      {
        title: "Reiki",
        description:
          "Canalización de energía universal para armonizar tu cuerpo, mente y espíritu.",
        img: "https://i.imgur.com/dKS2hNU.jpeg",
      },
      {
        title: "Cristales Tameana",
        description:
          "Un ritual energético con cristales de cuarzo diseñado para desbloquear tu energía y elevar tu vibración.",
        img: "https://i.imgur.com/U5ixyw4.jpeg",
      },
      {
        title: "Alineación de Chakras",
        description:
          "Restaura el equilibrio natural de tus chakras para mejorar tu bienestar físico y emocional.",
        img: "https://i.imgur.com/kLwMeVz.jpeg",
      },
      {
        title: "Limpiezas Energéticas y Cirugía Astral",
        description:
          "Limpia bloqueos energéticos profundos y experimenta una conexión renovada con tu ser.",
        img: "https://i.imgur.com/5RYN9z3.jpeg",
      },
      {
        title: "Lecturas de Tarot",
        description:
          "Descubre respuestas claras y guía espiritual a través del tarot, iluminando tu camino.",
        img: "https://i.imgur.com/0K3b8Qj.jpeg",
      },
    ].map((service, index) => (
      <motion.div
        key={index}
        className="p-8 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-tarotGold hover:text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 * index, duration: 0.5 }}
      >
        <img
          src={service.img}
          alt={service.title}
          className="mx-auto mb-4 border-4 border-tarotGold rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-110"
        />
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-lg text-gray-700">{service.description}</p>
      </motion.div>
    ))}
  </div>
</section>
{/* Retiro Espiritual */}
<section id="retiro" className="py-20 bg-gradient-to-b from-crystalPink to-white">
  <h2 className="text-4xl font-bold text-center text-black mb-10">
    Retiro Espiritual: Luz del Alma
  </h2>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
    {/* Imagen del retiro */}
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://i.imgur.com/dq9mlzo.jpeg" // Reemplaza con tu URL de imagen
        alt="Retiro Espiritual Luz del Alma"
        className="rounded-lg shadow-lg object-cover w-full h-auto transform hover:scale-105 transition duration-300"
      />
    </motion.div>

    {/* Tarjeta del retiro */}
    <motion.div
      className="w-full md:w-1/2 text-center md:text-left rounded-xl border-4 border-tarotGold bg-gradient-to-b from-white to-crystalPink shadow-lg p-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-3xl font-bold text-tarotGold mb-6">
        Renueva tu Energía y Reconecta con tu Interior
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Sumérgete en una experiencia transformadora en un entorno lleno de paz y armonía.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        🌿 <strong>Incluye:</strong> Meditación guiada, Alojamiento, Comidas completas, Talleres de música,
        Taller del movimiento, Puertas del cielo con merienda y anochecer viendo el cielo y mas.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        📍 <strong>Ubicación:</strong> Capilla del monte, Córdoba, Argentina<br />
        📅 <strong>Fecha:</strong> 28-30 de Marzo, 2025
      </p>

      {/* Contador */}
      <div className="text-center my-6">
        <p className="text-lg text-Black font-bold mb-4">
          ¡Reserva antes del <span className="text-Violet">15 de Marzo</span> para obtener un descuento!
        </p>
        <Countdown targetDate="2025-03-15T23:59:59" />
      </div>

      {/* Botón de reserva */}
      <motion.a
        href="https://wa.me/543854133379?text=Hola,%20quiero%20saber%20más%20sobre%20el%20retiro%20espiritual%20Luz%20del%20Alma."
        target="_blank"
        className="px-6 py-3 bg-crystalPink text-white font-bold rounded-lg shadow-lg hover:bg-tarotGold hover:shadow-xl transition duration-300 transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Reservar mi lugar
      </motion.a>
    </motion.div>
  </div>
</section>


      {/* Contáctame asdasdasd*/}

      <section id="contacto" className="py-20 bg-crystalPink text-center">
        <motion.h2
          className="text-4xl font-bold text-black mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          ¡Contáctame!
        </motion.h2>
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg">
          <p className="text-lg text-gray-800 mb-8">
            Si tienes preguntas o deseas más información sobre mis servicios,
            no dudes en contactarme.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            {[
              {
                href: "https://www.instagram.com/lluzdelalmaa/",
                icon: "fab fa-instagram",
              },
              {
                href: "https://www.facebook.com/profile.php?id=100053547937565" ,
                icon: "fab fa-facebook",
              },
              {
                href: "https://wa.me/543854133379?text=¡Buenas!%20Me%20interesó%20tu%20página.%20Quisiera%20informarme%20más%20sobre%20tus%20servicios%20y%20costos.%20¿Podrías%20darme%20más%20detalles?",
                icon: "fab fa-whatsapp",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                className="text-crystalPink text-4xl transition duration-300 transform hover:scale-125"
                whileHover={{ scale: 1.2 }}
              >
     
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
