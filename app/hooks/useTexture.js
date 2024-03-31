import { useState, useEffect } from 'react'
import * as THREE from 'three'

export const useTexture = (url) => {
    const [texture, setTexture] = useState()

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader()
        textureLoader.load(url, setTexture)
    }, [url])

    return texture
}