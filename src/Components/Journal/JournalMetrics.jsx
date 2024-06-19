import { useState } from "react";
import { animated, useSpring } from "react-spring"; // Import animated and useSpring from react-spring
import "./JournalMetrics.css";

 
const JournalMetrics = ({ className }) => {
  const [show, setShow] = useState(false);

  const animationProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "scale(1)" : "scale(0.9)"
  });

  const data = [
    { label: "Impact Factor", value: "5.123" },
    { label: "h-index", value: "70" },
    { label: "i10-index", value: "150" },
    { label: "Citations", value: "1200" },
    { label: "Articles", value: "50" },
    { label: "Editors", value: "20" },
  ];

  return (
    <div className={` ${className}`}>
      {!show && (
        <button
          onClick={() => setShow(true)}
          className={`px-4 py-2 text-white bg-green-500 rounded shadow hover:bg-blue-800 transition duration-300   ${
            show ? "" : "button-scale "
          }`}
        >
          Journal Metrics
        </button>
      )}
      {show && (
        <animated.div
          style={animationProps}
          className="relative mt-4 p-6 bg-blue-800 rounded shadow-lg lg:w-80 w-60 "
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-green-300 hover:text--700"
          >
            &#x2715;
          </button>
          {data.map((item, index) => (
            <p key={index} className="mb-2 text-green-300">
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </animated.div>
      )}
    </div>
  );
};

export default JournalMetrics;
