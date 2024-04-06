export const Navbar_Variant = {
    hidden: {
        y: -50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .2,
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1]
        }
    }
}

export const Menu_Variants = {
    closed: {
        y: '-100%',
        opacity: 1,
        transition: {
            duration: .75,
            delay: .25,
            ease: [0.33, 1, 0.68, 1]
        }
    },
    fading: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: .75,
            delay: .25,
            ease: [0.33, 1, 0.68, 1]
        }
    },
    open: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: .75,
            delay: .25,
            ease: [0.33, 1, 0.68, 1]
        }
    }
}