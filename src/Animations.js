export const FadeIn =  {
    hidden: {
        opacity: 0,
        scale: 1.2
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75
        }
    },
    exit: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: .75
        }
    } 
}

export const PopUp = {
    hidden: {
        scale: .5,
        opacity: 0,
        transition: {
            duration: .5
        }
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    exit: {
        scale: .5,
        opactiy: 0,
        transition: {
            duration: .5
        }
    }
};