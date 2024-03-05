export const Heading_1_Variant = {
    hidden: {
        y: -50,
        opacity: 0,
        scale: 0.9
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
        }
    }
}

export const Heading_2_Variant = {
    hidden: {
        y: -40,
        opacity: 0,
        scale: 0.95
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15
        }
    }
}

export const Heading_3_Variant = {
    hidden: {
        y: -30,
        opacity: 0,
        scale: 0.95
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
        }
    }
}

export const Heading_4_Variant = {
    hidden: {
        y: -20,
        opacity: 0,
        scale: 0.95
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.25
        }
    }
}

export const Paragraph_Variant = {
    hidden: {
        y: 10,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.4,
            ease: [0.33, 1, 0.68, 1]
        }
    }
}

export const Button_Variant = {
    hidden: {
        scale: 0.5,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    rest: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    },
    press: {
        scale: 0.95,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    }
}