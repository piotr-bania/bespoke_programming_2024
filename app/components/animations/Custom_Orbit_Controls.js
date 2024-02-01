import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const Custom_Orbit_Controls = ({ target }) => {

    return (
        <OrbitControls
            target={target}
            minAzimuthAngle={-Math.PI / 20}
            maxAzimuthAngle={Math.PI / 20}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minDistance={40}
            maxDistance={40}
            enablePan={false}
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.05}
        />
    )
}

export default Custom_Orbit_Controls