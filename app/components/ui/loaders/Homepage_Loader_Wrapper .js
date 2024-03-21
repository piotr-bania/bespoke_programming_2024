'use client'

import { useState, useEffect } from 'react'
import Homepage_Loader from './Homepage_Loader'

const Homepage_Loader_Wrapper  = ({ children }) => {
    const [loadingComplete, setLoadingComplete] = useState(false)

    return (
        <>
            {!loadingComplete ? (
                <Homepage_Loader onLoadingComplete={() => setLoadingComplete(true)} />
            ) : (
                children
            )}
        </>
    )
}

export default Homepage_Loader_Wrapper 