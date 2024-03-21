export const Page_Leave_Variant = {
    hidden: {
        height: '0%',
    },
    visible: {
        height: '100%',
        transition: {
            duration: 1,
            ease: [.22, 1, .36, 1]
        }
    }
}

export const Page_Enter_Variant = {
    hidden: {
        height: '100%',
    },
    visible: {
        height: '0%',
        transition: {
            duration: 1,
            ease: [.22, 1, .36, 1]
        }
    }
}