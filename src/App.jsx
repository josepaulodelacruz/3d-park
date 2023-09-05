import './App.css'
import { Canvas } from '@react-three/fiber'
import {
	OrthographicCamera,
	SpotLight,
	PresentationControls,
} from '@react-three/drei'
import Model from './components/Model.jsx'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'

function App () {
	const [isMobileDevice, setIsMobileDevice] = useState(false)

	useEffect(() => {
		if(isMobile) {
			setIsMobileDevice(true)
		}  else {
			setIsMobileDevice(false)
		}
	}, [isMobileDevice])

	return (
		<>
			<Canvas>
				<color attach="background" args={['#9A5DE6']}/>

				<ambientLight/>

				<SpotLight
					position={[-20, 15, -20]}
					distance={1000}
					angle={200}
					attenuation={0}
					intensity={0.5}
				/>

				<SpotLight
					position={[0, 10, 0]}
					distance={1000}
					angle={200}
					attenuation={0}
					intensity={0.5}
				/>
				<OrthographicCamera
					rotation={[-0.82, 0.69, 0.59]}
					zoom={isMobileDevice ? 32 : 265}
					makeDefault={true}
					near={-10}
					position={[5.5, 5.5, 4.5]}
				/>
				<PresentationControls
					global
					polar={[-0, 0.2]}
					azimuth={[-1, 0.75]}
					config={{ mass: 2, tension: 400 }}
					snap={{ mass: 2, tension: 400 }}
				>
					<Model/>
				</PresentationControls>
			</Canvas>
		</>
	)
}

export default App
