export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const titleAnim = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75, ease: "easeOut"
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: .75,
            ease: "easeOut",
            staggerChildren: 0.5
        }
    },
}

export const photoAnim ={
    hidden: {
        scale: 1.1,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
}

export const picAnim ={
    hidden: {
        x: "-10%",
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
}

export const lineAnim = {
    hidden: {
        width: '0%'
    },
    show: {
        width: '100%',
        transition: {duration: 1}
    }
}

export const textAnim = {
    hidden:{
        x: "-30px",
        opacity: 0,
    },
    show:{
        x: 0,
        opacity: 1,
        transition:{
            duration: .5,
            staggerChildren: 0.3,
        }
    },
}

export const spanAnim = {
    hidden: {
        y: "100%",
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            ease: [.74,2,.63,.05],
            duration: .5
        }
    }
}

export const slider = {
    hidden: {
        x: '-130%',
        skew: '45deg'
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: "easeOut",
            duration: 1,
            delayChildren: 0.25
        }
    }
}

export const sliderContainer = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.15, ease: 'easeOut'}
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.1,
        transition: {
            duration: 0.5
        }
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .5
        }
    }
}