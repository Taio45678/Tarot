import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Particles from 'react-tsparticles';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
    <div className="font-serif text-spiritualBlue bg-crystalPink min-h-screen relative">
      {/* Fondo de partículas */}
      <Particles
        options={{
          background: {
            color: {
              value: "transparent", // Color de fondo (puedes elegir otro color)
            },
          },
          particles: {
            number: {
              value: 50, // Número de partículas (ajústalo a tu gusto)
            },
            shape: {
              type: "circle", // Forma de las partículas (puedes cambiar a "star" o algo similar)
            },
            size: {
              value: 3, // Tamaño de las partículas
            },
            opacity: {
              value: 1, // Opacidad de las partículas
            },
            color: {
              value: "red", // Color dorado para las partículas (puedes cambiarlo a cualquier color)
            },
            move: {
              speed: 1, // Velocidad de las partículas
              direction: "none", // Dirección del movimiento
              random: true, // Movimiento aleatorio
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-tarotGold to-crystalPink relative overflow-hidden z-10">
        
        <motion.h1
          className="text-6xl font-bold text-white z-20 leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Luz del alma
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-white z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          ¡Descubre formas de equilibrar tu vida!
        </motion.p>

        {/* Botón animado */}
        <Link
  to="servicios"
  smooth={true}
  duration={500}
  offset={10} // Ajuste de desplazamiento para no quedar bajo el encabezado fijo, si es necesario
>
  <motion.button
    className="mt-8 px-8 py-4 bg-white text-tarotGold font-bold rounded-lg shadow-xl hover:bg-tarotGold hover:text-white transition duration-300 transform hover:scale-110"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    ¡Explora Mas!
  </motion.button>
</Link>

      </section>

      {/* Quién Soy */}
      <section id="quien-soy" className="p-8 py-20 bg-white flex flex-col md:flex-row items-center md:items-start md:gap-8 max-w-6xl mx-auto">
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
         <h2 className="text-4xl font-bold mb-8">¿Quién soy?</h2>
<p className="text-lg text-gray-700 mb-6">
  Soy <span className="font-bold text-tarotGold">Verónica Meda</span>, una guía espiritual comprometida con ayudar a las personas a encontrar equilibrio y armonía en sus vidas.
</p>
<p className="text-lg text-gray-700">
  A través de <span className="font-bold">masajes con aceites esenciales</span>, lecturas de <span className="font-bold">tarot</span>, y prácticas con <span className="font-bold">cristales de cuarzo</span>, ofrezco herramientas para desbloquear tu energía interior y transformar tu bienestar. Mi misión es activar la energía en cada persona, permitiendo que conecten con su esencia más profunda y encuentren su propósito.
</p>

        </motion.div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-crystalPink">
        <h2 className="text-4xl font-bold text-center text-black mb-10">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {/* Masajes con Aceites Esenciales */}
          <motion.div
            className="p-8 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-tarotGold hover:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src="https://i.imgur.com/gI8NX96.jpeg" // Cambiar por imagen real
              alt="Masajes con Aceites"
              className="mx-auto mb-4 border-4 border-tarotGold rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mb-4">Masajes con Aceites Esenciales</h3>
            <p className="text-lg text-gray-700">
              Relájate y revitaliza tu cuerpo con técnicas de masajes y aceites naturales diseñados para equilibrar tu energía.
            </p>
          </motion.div>

          {/* Lecturas de Tarot */}
          <motion.div
            className="p-8 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-tarotGold hover:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <img
              src="https://i.imgur.com/0K3b8Qj.jpeg" // Cambiar por imagen real
              alt="Lecturas de Tarot"
              className="mx-auto mb-4 border-4 border-tarotGold rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mb-4">Lecturas de Tarot</h3>
            <p className="text-lg text-gray-700">
              Conecta con tu ser interior a través de lecturas de tarot, que te ayudarán a encontrar respuestas y claridad en tu camino.
            </p>
          </motion.div>

          {/* Activación de Energía con Cristales */}
          <motion.div
            className="p-8 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-tarotGold hover:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <img
              src="https://i.imgur.com/kLwMeVz.jpeg" // Cambiar por imagen real
              alt="Cristales de Cuarzo"
              className="mx-auto mb-4 border-4 border-tarotGold rounded-lg p-2 transition duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mb-4">Reiki</h3>
            <p className="text-lg text-gray-700">
              Utiliza el poder de los cristales de cuarzo para activar y equilibrar tu energía, facilitando el flujo de energía positiva en tu vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contáctame */}
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

  {/* Tarjeta de Contáctame */}
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg">
    <p className="text-lg text-gray-800 mb-8">
      Si tienes preguntas o deseas más información sobre mis servicios, no dudes en ponerte en contacto a través de las siguientes redes sociales.
    </p>

    {/* Enlaces de Redes Sociales */}
    <div className="mt-8 flex justify-center gap-8">
      <motion.a
        href="https://www.instagram.com/verom.eda/"
        target="_blank"
        className="text-crystalPink text-4xl transition duration-300 transform hover:scale-125"
        whileHover={{ scale: 1.2 }}
      >
        <i className="fab fa-instagram"></i>
      </motion.a>

      <motion.a
        href="https://www.facebook.com/veronica.meda.12"
        target="_blank"
        className="text-crystalPink text-4xl transition duration-300 transform hover:scale-125"
        whileHover={{ scale: 1.2 }}
      >
        <i className="fab fa-facebook"></i>
      </motion.a>

      <motion.a
        href="https://wa.me/123456789"
        target="_blank"
        className="text-crystalPink text-4xl transition duration-300 transform hover:scale-125"
        whileHover={{ scale: 1.2 }}
      >
        <i className="fab fa-whatsapp"></i>
      </motion.a>
    </div>
    
  </div>
</section>

    </div>
  );
}

export default App;
