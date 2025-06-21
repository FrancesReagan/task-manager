import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './styles.css';

import App from './App.jsx'
import React from "react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const root = createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
