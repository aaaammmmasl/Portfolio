import { useEffect, useState } from "react";
import TextType from "../AnimatedComponents.jsx/TextType";

const Intro = ({ onFinish }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true); // نبدأ الخروج
    }, 3500); // عدّل حسب مدة الكتابة

    const removeTimer = setTimeout(() => {
      onFinish(); // نحذف Intro من App
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center bg-black text-white text-3xl font-bold
        transition-all duration-1000 ease-in-out
        ${exit ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100"}
      `}
    >
      <TextType
        text={["Welcome To My Portfolio"]}
        typingSpeed={75}
        pauseDuration={1000}
        showCursor
        cursorCharacter="█"
      />
    </div>
  );
};

export default Intro;