import React, { useRef, useEffect, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { CubeTextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";
import "./style.css";
import axios from "axios";

extend({ OrbitControls });
extend({ DeviceOrientationControls });
/*
window.addEventListener("devicemotion", function(event){
  if(event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma){
      let gyroPresent = true;
      //alert("this is a motherfucker test")}
});
*/
//console.log("======================", window.location)

const CameraControls = () => {
	const {
		camera,
		gl: { domElement },
	} = useThree();

	const controls = useRef();
	useFrame(() => controls.current.update());
	return (
		<orbitControls
			ref={controls}
			args={[camera, domElement]}
			autoRotate={false}
			enableZoom={false}
		/>
	);
};

const CameraControls2 = () => {
	const {
		camera,
		gl: { domElement },
	} = useThree();

	const controls2 = useRef();
	useFrame(() => controls2.current.update());
	return (
		<deviceOrientationControls
			ref={controls2}
			args={[camera]}
			autoRotate={false}
			enableZoom={false}
		/>
	);
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
	const [images, setImage] = useState({});
	useEffect(() => {
    async function fetchData() {
      const sceneName = window.location.href.split("/").pop();
			const getImages = await axios.get(
				`/api/scenes/getimages/${sceneName}`
			);
			setImage(getImages.data.scenes);
		}
		fetchData();
	}, []);

	const { scene } = useThree();
	const loader = new CubeTextureLoader();
	// The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
	const texture = loader.load([
		`${images.right}`,
		`${images.left}`,
		`${images.top}`,
		`${images.bottom}`,
		`${images.front}`,
		`${images.back}`,
	]);

	// Set the scene background property to the resulting texture.
	scene.background = texture;
	return null;
}

// Lights
function Scene() {
	return (
		<Canvas className="canvas">
			{/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			) ? (
				<CameraControls2 />
			) : (
				<CameraControls />
			)}
			<SkyBox />
		</Canvas>
	);
}

export default Scene;
