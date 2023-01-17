import "./App.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [coord, setCoord] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCoord((x) => x + 50);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <motion.form
        initial={{ x: window.innerWidth, opacity: 1, scale: 1 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
