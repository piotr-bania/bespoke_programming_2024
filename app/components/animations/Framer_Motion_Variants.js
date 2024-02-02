export const canvas_variant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 3, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0,
        transition: { duration: 3, ease: 'easeInOut' }
    }
}

export const scale_variant = {
    hidden: { scale: 1 },
    visible: {
        scale: 1.1,
        transition: { duration: 1, ease: 'easeInOut' }
    }
}

export const loader_variant = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: { duration: 1 }
    },
    exit: {
        scale: 0,
        transition: { duration: 1 }
    }
}