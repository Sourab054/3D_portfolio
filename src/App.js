import "./App.css";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <Canvas>
      <Environment preset="city" />
      <color args={["#282828"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={95}
            color={"#db2777"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            scale={[1.2, 1.2, 1.2]}
            position={[0, 0.77, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://sourab-portfolio.vercel.app/"></iframe>
          </Html>
          <primitive
            object={computer.scene}
            scale={[1.25, 1.25, 1.25]}
            position-y={-1.2}
          />
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[3, 0.75, 0.75]}
            rotation-y={-1.26}
            letterSpacing={0.05}
            children={"Sourab\rPatil"}
            width={2}
            textAlign="center"
          ></Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} scale={5} opacity={0.4} blur={2.5} />
    </Canvas>
  );
}

export default App;
