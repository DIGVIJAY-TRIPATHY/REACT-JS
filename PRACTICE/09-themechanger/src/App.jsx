import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode]=useState("light")
  
  const lightTheme=()=>{
    console.log("Light theme activated");
    setThemeMode("light")
  }
  
  const darkTheme=()=>{
    console.log("Dark theme activated");
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(()=>{
    console.log("Theme changed to:", themeMode);
    const html = document.querySelector('html');
    console.log("HTML element:", html);
    console.log("Classes before:", html.classList.toString());
    
    html.classList.remove("light","dark");
    html.classList.add(themeMode);
    
    console.log("Classes after:", html.classList.toString());
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode , lightTheme, darkTheme} }>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;