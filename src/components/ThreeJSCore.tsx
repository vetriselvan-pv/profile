import React, { useEffect, useRef } from "react";

export default function ThreeJSCore(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.THREE) return;
    
    // @ts-ignore
    const THREE = window.THREE;

    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00f0ff, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create a central 'Robotic Core' sphere made of technical rings
    const coreGroup = new THREE.Group();

    const ringMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00f0ff, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.4 
    });

    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.TorusGeometry(3 + i * 0.5, 0.02, 16, 100);
      const ring = new THREE.Mesh(geometry, ringMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      coreGroup.add(ring);
    }

    const innerCoreGeom = new THREE.SphereGeometry(1.5, 32, 32);
    const innerCoreMat = new THREE.MeshPhongMaterial({ 
      color: 0x00f0ff, 
      emissive: 0x00f0ff, 
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });
    const innerCore = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    coreGroup.add(innerCore);

    scene.add(coreGroup);
    camera.position.z = 12;

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      coreGroup.rotation.y += 0.005;
      coreGroup.rotation.x += 0.002;
      
      // Pulse effect
      const s = 1 + Math.sin(Date.now() * 0.002) * 0.05;
      innerCore.scale.set(s, s, s);
      
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>;
}
