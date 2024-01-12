export const canvas_variant = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.2, duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }
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

const baseHeaderVariant = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] }
    }
})
export const h2_variant = baseHeaderVariant(0.6)
export const h3_variant = baseHeaderVariant(0.8)
export const h4_variant = baseHeaderVariant(1.0)

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