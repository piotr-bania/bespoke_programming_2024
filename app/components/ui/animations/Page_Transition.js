export const Page_Leave_Variant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .75,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const Page_Enter_Variant = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 0,
        transition: {
            duration: .75,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}