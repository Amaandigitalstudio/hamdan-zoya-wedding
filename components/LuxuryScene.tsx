'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function LuxuryScene(){
  const host=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(!host.current)return; const el=host.current; const scene=new THREE.Scene(); const camera=new THREE.PerspectiveCamera(45,innerWidth/innerHeight,.1,100); camera.position.z=5; const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)); renderer.setSize(innerWidth,innerHeight); el.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight('#fff7e6',.45)); const key=new THREE.PointLight('#d8ad55',2,10); key.position.set(3,4,4); scene.add(key);
    const moon=new THREE.Mesh(new THREE.SphereGeometry(.42,48,48),new THREE.MeshStandardMaterial({color:'#ffe9a6',emissive:'#d8ad55',emissiveIntensity:1.15})); moon.position.set(2.7,1.35,-2); scene.add(moon);
    const starMat=new THREE.MeshBasicMaterial({color:'#d8ad55',transparent:true,opacity:.68}); for(let i=0;i<240;i++){const s=new THREE.Mesh(new THREE.SphereGeometry(.01+(i%3)*.004,8,8),starMat); s.position.set(((i*17)%100)/10-5,((i*31)%80)/10-4,-((i*13)%30)); scene.add(s)}
    const lanterns:number[][]=[[-2.8,1.1,-1],[-1.7,-.3,-2],[2.9,-.75,-1.4]]; lanterns.forEach(([x,y,z])=>{const g=new THREE.Group(); g.position.set(x,y,z); g.add(new THREE.Mesh(new THREE.CylinderGeometry(.12,.16,.42,6),new THREE.MeshStandardMaterial({color:'#1b6a50',metalness:.55,roughness:.25}))); const l=new THREE.PointLight('#d8ad55',1.5,2); g.add(l); scene.add(g)});
    let mx=0,my=0,raf=0; const move=(e:MouseEvent)=>{mx=(e.clientX/innerWidth-.5); my=(e.clientY/innerHeight-.5)}; const resize=()=>{camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight)}; addEventListener('mousemove',move); addEventListener('resize',resize);
    const tick=()=>{raf=requestAnimationFrame(tick); const t=performance.now()/1000; moon.rotation.y=t*.12; moon.position.x=2.7+mx*.6; camera.position.x+= (mx*.25-camera.position.x)*.04; camera.position.y+= (-my*.18-camera.position.y)*.04; renderer.render(scene,camera)}; tick();
    return()=>{cancelAnimationFrame(raf); removeEventListener('mousemove',move); removeEventListener('resize',resize); renderer.dispose(); el.replaceChildren()}
  },[]); return <div ref={host} className="pointer-events-none fixed inset-0 z-0 opacity-80"/>;
}
