import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const CubemapViewer = ({ cubemapImages }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!cubemapImages || cubemapImages.length !== 6) {
      console.error("Cubemap requires exactly six images.");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    // Load cubemap
    const textureLoader = new THREE.CubeTextureLoader();
    const cubemap = textureLoader.load(
      cubemapImages,
      () => {
        console.log("Cubemap loaded successfully!");
      },
      undefined,
      (err) => {
        console.error("Error loading cubemap:", err);
      }
    );

    // Ensure non-power-of-two textures are handled
    cubemap.magFilter = THREE.LinearFilter;
    cubemap.minFilter = THREE.LinearFilter;

    scene.background = cubemap;

    camera.position.z = 1;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };
    animate();

    // Cleanup on component unmount
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [cubemapImages]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

CubemapViewer.propTypes = {
  cubemapImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CubemapViewer;
