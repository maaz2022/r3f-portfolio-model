import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";


function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
<>
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping={0.1}>
      <ScrollManager section={section} onSectionChange={setSection} />
      <Experience />
      <Scroll html>
          <Interface />
      </Scroll>
      </ScrollControls>
    </Canvas>
        <Menu  onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>

  
</>

  );
}

export default App;
