import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import "./styles.css";
import { Canvas } from "@react-three/fiber";

const root = createRoot(document.getElementById('root'));

// root.render(
//     <Experience
//         title = {"Squid Games"}
//         subtitle = {"3D Web"}
//     />
// );

root.render(
    <Canvas
        camera={
            {
                position: [2, 2, 5]
            }
        }
    >
        <Experience />
    </Canvas>
);
