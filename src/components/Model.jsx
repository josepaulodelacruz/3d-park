import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/3d/hero.glb");
	const bakedTexture = useTexture("3d/2nd_baked.jpg");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.baked.geometry}
				position={[0, -0.712, 0]}
				scale={13.042}
			>
				<meshBasicMaterial
					map={bakedTexture}
					map-flipY={false}
					side={THREE.DoubleSide}

				/>
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.water.geometry}
				material={materials.Water}
			/>
		</group>
	);
}

useGLTF.preload("/hero.glb");
