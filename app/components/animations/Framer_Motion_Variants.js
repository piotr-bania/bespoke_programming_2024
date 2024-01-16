export const loader_variant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
    scale: [0.8, 1.1, 0.9, 1, 0.95, 1.05, 1],
    opacity: 1,
    transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        repeat: 3,
        repeatType: "loop"
        }
    }
}

export const canvas_variant = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.2, duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }
    }
}

export const logo_variant = {
    hidden: { scale: 0.8, y: 30, opacity: 0 },
    visible: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: { delay: 0.3, duration: 1.2, ease: [0.6, 0.05, 0.01, 0.99] }
    }
}

export const h1_variant = {
    hidden: { y: -30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
    }
}

const base_header_variant = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }
    }
})
export const h2_variant = base_header_variant(0.6)
export const h3_variant = base_header_variant(0.8)
export const h4_variant = base_header_variant(1.0)

export const paragraph_variant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" }
    }
}

export const cta_variant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { delay: 1.4, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }
    }
}