/* global React, ReactDOM, useCustomCursor, Navbar, Hero, Yoga, Fitness, Basquet, Instructores, Galeria, Testimonios, Membresias, Contacto */

function App() {
    useCustomCursor();
    return (
          <main className="bg-black">
                <Navbar />
                <Hero />
                <Yoga />
                <Fitness />
                <Basquet />
                <Instructores />
                <Galeria />
                <Testimonios />
                <Membresias />
                <Contacto />
          </main>main>
        );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);</main>
