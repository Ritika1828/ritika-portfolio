import { useState, useEffect } from "react";

function MyTypeWriter({ words }) {
  const [displayText, setDisplayText] = useState("");

  async function backward(index) {
    let word = words[index];
    const wordArray = word.split("");
    // wordArray.forEach(async (str) => {
    //   setDisplayText((prev) => prev + str);
    //   await new Promise((resolve, reject)=> setTimeout(()=> resolve(''),200))
    // });
    console.log("array", wordArray);
    for (let i = wordArray.length - 1; i >= 0; i--) {
      setDisplayText((prev) => prev.slice(0, i));
      await new Promise((resolve, reject) =>
        setTimeout(() => resolve(""), 200)
      );
      if (i == 0) {
        if (index == words.length - 1) start(0);
        else {
          setDisplayText("");
          start(index + 1);
        }
      }
    }
  }
  async function start(index) {
    let word = words[index];
    const wordArray = word.split("");
    // wordArray.forEach(async (str) => {
    //   setDisplayText((prev) => prev + str);
    //   await new Promise((resolve, reject)=> setTimeout(()=> resolve(''),200))
    // });
    console.log("array", wordArray);
    for (let i = 0; i < wordArray.length; i++) {
      setDisplayText((prev) => prev + wordArray[i]);
      await new Promise((resolve, reject) =>
        setTimeout(() => resolve(""), 200)
      );
      if (wordArray.length - 1 == i) {
        backward(index);
      }
    }
  }

  useEffect(() => {
    start(0);
  }, []);
  return <>{displayText}</>;
}
export default MyTypeWriter;
