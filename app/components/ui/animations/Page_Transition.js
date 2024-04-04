export const Page_Leave_Variant = {
    hidden: {
        height: '0%',
        opacity: 1,
    },
    visible: {
        height: '100%',
        opacity: 1,
        transition: {
            duration: 1,
            ease: [.22, 1, .36, 1]
        }
    }
}

export const Page_Enter_Variant = {
    hidden: {
        height: '100%',
        opacity: 1,
    },
    visible: {
        height: '0%',
        opacity: 1,
        transition: {
            duration: 1,
            ease: [.22, 1, .36, 1]
        }
    }
}