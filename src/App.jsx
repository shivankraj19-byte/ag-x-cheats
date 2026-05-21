import { useState } from "react";

export default function AGShivankPortfolio() {

  const [showOrder, setShowOrder] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [amount, setAmount] = useState(0);

  const upiId = "7370071302@ybl";

  const qrData = `upi://pay?pa=${upiId}&pn=Meena%20Devi&am=${amount}&cu=INR&tn=Payment%20to%20AG%20SHIVANK`;

  const handleSelection = (item, price) => {
    setSelectedItem(item);
    setAmount(price);
  };

  const skills = [
    "Web Developer",
    "App Developer",
    "Games Developer",
    "Free Fire Cheats Developer",
    "Discord Bots Developer",
    "Telegram Bots Developer",
    "Python Developer",
    "C# Developer",
    "Java Developer",
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.3),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_40%)]"></div>

      {/* GLOW */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-purple-500/20">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-black text-purple-400 tracking-widest">
            AG X CHEATS
          </h1>

          <div className="hidden md:flex gap-8 items-center text-gray-300">

            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>

            <a href="#services" className="hover:text-purple-400 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>

            <button
              onClick={() => setShowOrder(true)}
              className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl transition"
            >
              Place Order
            </button>

          </div>

        </div>

      </nav>

      {/* ORDER PANEL */}
      {showOrder && (

        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">

          <div className="relative w-full max-w-[420px] max-h-[90vh] overflow-y-auto bg-black border border-purple-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-purple-500/20">

            {/* CLOSE */}
            <button
              onClick={() => setShowOrder(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition"
            >
              ✕
            </button>

            <h2 className="text-3xl font-black text-purple-400 mb-6 text-center">
              Place Order
            </h2>

            {/* CATEGORY TABS */}
            <div className="overflow-x-auto flex gap-3 pb-3">

              {[
                "Website",
                "Bots",
                "Apps",
                "Games",
                "FF Panels"
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubCategory("");
                    setSelectedItem("");
                    setAmount(0);
                  }}
                  className={`px-5 py-3 rounded-2xl whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? "bg-purple-600"
                      : "bg-white/5 hover:bg-purple-500/20"
                  }`}
                >
                  {cat}
                </button>
              ))}

            </div>

            {/* WEBSITE */}
            {selectedCategory === "Website" && (
              <div className="mt-6 space-y-4">

                <button
                  onClick={() =>
                    handleSelection("Business Website", 1000)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  🌐 Business Website — ₹1000
                </button>

                <button
                  onClick={() =>
                    handleSelection("Advanced Features", 200)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  ⚡ Advanced Features — ₹200
                </button>

              </div>
            )}

            {/* BOTS */}
            {selectedCategory === "Bots" && (
              <div className="mt-6 space-y-4">

                <button
                  onClick={() =>
                    handleSelection("🔒 Security Bot", 500)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  🔒 Security Bot — ₹500
                </button>

                <button
                  onClick={() =>
                    handleSelection("🎵 Music Bot", 1000)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  🎵 Music Bot — ₹1000
                </button>

                <button
                  onClick={() =>
                    handleSelection("🎫 Ticket Bot", 1000)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  🎫 Ticket Bot — ₹1000
                </button>

                <button
                  onClick={() =>
                    handleSelection("💳 QR Payment Bot", 500)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  💳 QR Payment Bot — ₹500
                </button>

              </div>
            )}

            {/* APPS */}
            {selectedCategory === "Apps" && (
              <div className="mt-6 space-y-4">

                <button
                  onClick={() =>
                    handleSelection("📱 Basic App Development", 15000)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  📱 Basic App — ₹15K
                </button>

                <button
                  onClick={() =>
                    handleSelection("🚀 Advanced App Development", 30000)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  🚀 Advanced App — ₹30K
                </button>

              </div>
            )}

            {/* GAMES */}
            {selectedCategory === "Games" && (
              <div className="mt-6">

                <button
                  onClick={() =>
                    handleSelection("🎮 Game Development", 30000)
                  }
                  className="w-full bg-white/5 border border-purple-500/20 p-4 rounded-2xl text-left"
                >
                  🎮 Game Development — ₹30K
                </button>

              </div>
            )}

            {/* FF PANELS */}
            {selectedCategory === "FF Panels" && (
              <div className="mt-6">

                <div className="flex gap-3 mb-5">

                  <button
                    onClick={() =>
                      setSelectedSubCategory("PC")
                    }
                    className={`flex-1 p-3 rounded-2xl ${
                      selectedSubCategory === "PC"
                        ? "bg-purple-600"
                        : "bg-white/5"
                    }`}
                  >
                    💻 PC
                  </button>

                  <button
                    onClick={() =>
                      setSelectedSubCategory("Mobile")
                    }
                    className={`flex-1 p-3 rounded-2xl ${
                      selectedSubCategory === "Mobile"
                        ? "bg-purple-600"
                        : "bg-white/5"
                    }`}
                  >
                    📱 Mobile
                  </button>

                </div>

                {/* PC */}
                {selectedSubCategory === "PC" && (
                  <div className="space-y-4">

                    <button
                      onClick={() =>
                        handleSelection("INTERNAL PANEL", 2000)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      INTERNAL PANEL — ₹2K
                    </button>

                    <button
                      onClick={() =>
                        handleSelection("SILENT AIM", 3000)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      SILENT AIM — ₹3K
                    </button>

                    <button
                      onClick={() =>
                        handleSelection("EXTERNAL", 1500)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      EXTERNAL — ₹1.5K
                    </button>

                    <button
                      onClick={() =>
                        handleSelection("AIMKILL", 4000)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      AIMKILL — ₹4K
                    </button>

                  </div>
                )}

                {/* MOBILE */}
                {selectedSubCategory === "Mobile" && (
                  <div className="space-y-4">

                    <button
                      onClick={() =>
                        handleSelection("🎯 Aimbot Panel", 1000)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      🎯 Aimbot Panel — ₹1000
                    </button>

                    <button
                      onClick={() =>
                        handleSelection("🎯 Silent Aim Panel", 1500)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      🎯 Silent Aim Panel — ₹1500
                    </button>

                    <button
                      onClick={() =>
                        handleSelection("💀 Aimkill + Teleport", 2000)
                      }
                      className="w-full bg-white/5 p-4 rounded-2xl text-left"
                    >
                      💀 Aimkill + Teleport — ₹2000
                    </button>

                  </div>
                )}

              </div>
            )}

            {/* QR */}
            {amount > 0 && (

              <div className="mt-8 text-center border-t border-purple-500/20 pt-6">

                <p className="text-gray-400">
                  Selected Service
                </p>

                <h3 className="text-2xl font-black text-purple-400 mt-2">
                  {selectedItem}
                </h3>

                <p className="text-5xl font-black mt-3">
                  ₹{amount}
                </p>

                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrData)}`}
                  alt="QR"
                  className="mx-auto mt-6 rounded-3xl border border-purple-500"
                />

                <p className="text-gray-400 text-sm mt-4">
                  UPI ID: {upiId}
                </p>

                <a
                  href="https://discord.gg/xfef5Xr3TA"
                  target="_blank"
                  className="block mt-6 bg-purple-600 hover:bg-purple-700 transition p-4 rounded-2xl font-bold"
                >
                  Join Discord After Payment
                </a>

              </div>
            )}

          </div>

        </div>
      )}

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <p className="uppercase tracking-[10px] text-purple-400 text-sm mb-5">
          Welcome To My Digital World
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          AG <span className="text-purple-500">SHIVANK</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Owner Of AG X CHEATS
        </p>

        <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-8">
          Web Developer • App Developer • Games Developer • Discord & Telegram Bots Developer • Free Fire Cheats Developer
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => setShowOrder(true)}
            className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30"
          >
            Place Order
          </button>

          <a
            href="https://discord.gg/xfef5Xr3TA"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-purple-500 hover:bg-purple-500/10 transition"
          >
            Join Discord
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <h2 className="text-4xl font-black text-purple-400 mb-6">
              About Owner & Developer
            </h2>

            <p className="text-gray-300 leading-8">
              I am Shivank Raj Thakur, widely recognized as AG SHIVANK, and the founder of AG X CHEATS.
              I specialize in developing modern websites, advanced Discord & Telegram bots, applications,
              and custom digital systems with a strong focus on performance, security, and futuristic design.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              My primary programming language is Python, while I also work with C# and Java for advanced projects.
              I focus on powerful UI, clean backend systems and premium digital experiences.
            </p>

          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-10 backdrop-blur-xl">

            <h2 className="text-4xl font-black text-purple-400 mb-6">
              Contact Us
            </h2>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

              <p className="text-gray-400 text-sm">
                Discord Server
              </p>

              <a
                href="https://discord.gg/xfef5Xr3TA"
                target="_blank"
                className="text-purple-400 text-lg hover:underline"
              >
                Join Discord
              </a>

            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

              <p className="text-gray-400 text-sm">
                Instagram
              </p>

              <a
                href="https://instagram.com/_shivaaank"
                target="_blank"
                className="text-purple-400 text-lg hover:underline"
              >
                Join Instagram
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black text-purple-400">
              Skills & Expertise
            </h2>

          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[320px] bg-white/5 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition"
              >

                <div className="text-5xl mb-6">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold">
                  {skill}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  Premium level development with futuristic UI and powerful systems.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="py-10 border-t border-purple-500/20 text-center text-gray-400"
      >

        <h2 className="text-3xl font-black text-purple-400 mb-4">
          AG X CHEATS
        </h2>

        <p>
          Designed & Developed By AG SHIVANK
        </p>
      <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

              <p className="text-gray-400 text-sm">
                Discord Server
              </p>

              <a
                href="https://discord.gg/xfef5Xr3TA"
                target="_blank"
                className="text-purple-400 text-lg hover:underline"
              >
                Join AG X CHEATS
              </a>

            </div>
      </footer>

    </div>
  );
}