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

export const Staggered_Links_Variant = {
    open: {
        transition: { staggerChildren: 0.1 }
        },
    closed: {
        transition: { staggerChildren: 0.05 }
    }
}

export const Menu_Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            ease: [0.33, 1, 0.68, 1]
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: .5,
            ease: [0.33, 1, 0.68, 1]
        }
    }    
}