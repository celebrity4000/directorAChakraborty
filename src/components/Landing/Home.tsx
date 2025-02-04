// import { useEffect } from "react";
// import background from "../../assets/Images/img1.png";

// function Home() {
//   useEffect(() => {
//     window.scrollTo(0, window.innerHeight * 0.1);
//   }, []);

//   return (
//     <div
//       className="flex flex-col w-full min-h-screen md:min-h-[120vh] bg-cover bg-no-repeat items-end justify-end bg-center"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="flex flex-col mb-2 md:mb-[0.2%] w-[90%] md:w-[35%] rounded-l-3xl items-start px-6 py-4  md:px-28 md:py-8 text-center bg-Charleston_Green">
//         <p className="text-3xl md:text-5xl font-bold text-white font-Montserrat">
//           Anirban
//         </p>
//         <p className="text-3xl md:text-5xl font-bold text-white font-Montserrat">
//           Chakraborty
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect, useRef } from "react";
import background from "../../assets/Images/img1.png";
import { motion, AnimatePresence, useInView } from "framer-motion";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 }); // Trigger when 50% is visible

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      setShowAnimation(true);

      // Hide after 5 seconds
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isInView]); // Runs every time the section is in view

  return (
    <div
      ref={sectionRef} // Reference to track visibility
      className="flex flex-col w-full min-h-screen md:min-h-[120vh] bg-cover bg-no-repeat items-end justify-end bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0, x: 200 }} // Start off-screen (right)
            animate={{ opacity: 1, x: 0 }} // Slide in
            exit={{ opacity: 0, x: 200 }} // Slide out after 5s
            transition={{ duration: 1 }}
            className="flex flex-col mb-2 md:mb-[0.2%] w-[90%] md:w-[35%] rounded-l-3xl items-start px-6 py-4 md:px-28 md:py-8 text-center bg-Charleston_Green"
          >
            <p className="text-3xl md:text-5xl font-bold text-white font-Montserrat">
              Anirban
            </p>
            <p className="text-3xl md:text-5xl font-bold text-white font-Montserrat">
              Chakraborty
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
