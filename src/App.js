// import logo from './logo.svg';
// import './App.css';
import ListBox from './ListBox.js';
import Bundle from './Bundle.js';
import all_valid_fonts from './FontLoader.js';
import { useState, useEffect } from 'react';


export default function App() {
  const [bundle, setBundle] = useState(Bundle());
  const [fontfaces, setFontfaces] = useState([]);
  const dictionary = bundle['data']
  const fonts = bundle['fonts']
  console.log("fonts:")
  console.log(Object.keys(fonts).length)

  useEffect(() => {
    all_valid_fonts(fonts).then(valid_fonts => {
      console.log(valid_fonts);
      setFontfaces(valid_fonts);
    })
  }, []);

  return (
    <>
      Hello World
      <ListBox dictionary={fontfaces} />
    </>
  );
}