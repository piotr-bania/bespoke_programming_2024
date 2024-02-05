import { Text } from '@react-three/drei'

const Loader = () => {
    return (
        <Text
            font='./fonts/neuropol.otf'
            fontSize={.1}
            color='white'
            anchorX='center'
            anchorY='middle'
            textAlign='center'
        >
            Loading...
        </Text>
    )
}

export default Loader