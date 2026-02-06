import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.jpg";
import { ThemeContext } from "../context/ThemeProvider";
import NavBar from "../components/NavBar";
import { useLanguage } from "../context/LanguageProvider";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { t } = useLanguage();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${dark
        ? "bg-[#0a0f0a] text-white"
        : "bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800"
        }`}
    >
      {/* Nav Bar */}
      <NavBar />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1
            className={`text-5xl md:text-6xl font-extrabold leading-tight ${dark ? "text-white" : "text-green-900"
              }`}
          >
            {t('heroTitle')}
            <span className="text-green-700"> {t('heroSubtitle')}</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('heroDescription')}
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition"
            >
              {t('getStarted')}
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition"
            >
              {t('login')}
            </Link>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          // src="https://stockcake.com/i/farmers-tending-crops_1260909_582733"
          src={Hero}
          className="w-150 h-100 mt-10 md:mt-0 animate-float rounded-2xl"
        />
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 md:px-20 py-14">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-700">
          🌱 {t('keyFeatures')}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: t('cropFeature'),
              text: t('cropFeatureDesc'),
              link: "/crop-recommendation"
            },
            {
              title: t('fertilizerFeature'),
              text: t('fertilizerFeatureDesc'),
              link: "/fertilizer"
            },
            {
              title: t('diseaseFeature'),
              text: t('diseaseFeatureDesc'),
              link: "/disease-detection"
            },
            {
              title: t('weatherFeature'),
              text: t('weatherFeatureDesc'),
              link: "/weather"
            },
            {
              title: t('chatbotFeature'),
              text: t('chatbotFeatureDesc'),
              link: "/chatbot"
            },
            {
              title: t('analyticsFeature'),
              text: t('analyticsFeatureDesc'),
              link: "/dashboard"
            },
          ].map((f, i) => (
            <Link to={f.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`p-6 rounded-xl shadow-lg backdrop-blur-lg transition-all duration-500 cursor-pointer hover:scale-105
                ${dark
                    ? "bg-white/5 border border-white/10 hover:bg-white/10"
                    : "bg-white/90 border border-green-200 hover:border-green-400 hover:shadow-xl"
                  }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`mt-20 py-10 text-center ${dark ? "bg-white/5 border-t border-white/10" : "bg-green-50"
          }`}
      >
        <h3 className="text-xl font-semibold text-green-700">
          🌿 {t('appName')} — {t('tagline')}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {t('footerTagline')}
        </p>

        <div className="mt-4 flex justify-center gap-6 text-green-700 dark:text-green-300">
          <a href="#">{t('privacyPolicy')}</a>
          <a href="#">{t('termsOfService')}</a>
          <a href="#">{t('contact')}</a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {t('appName')}. {t('allRightsReserved')}
        </p>
      </footer>
    </div>
  );
};

export default Home;
