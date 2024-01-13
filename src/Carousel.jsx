const Carousel = ({ state }) => {
    if (state === 0) {
        return (
            <img src="src/image/my-1.jpg" />
        )
    }
    else if (state === 1) {
        return (
            <img src="src/image/my-2.jpg" />
        )
    }
    else if (state === 2) {
        return (
            <img src="src/image/my-3.jpg" />
        )
    }
    else if (state === 3) {
        return (
            <img src="src/image/my-4.jpg" />
        )
    }

    else if (state === 4) {
        return (
            <img src="src/image/my-5.jpg" />
        )
    }
    else if (state === 5) {
        return (
            <img src="src/image/my-6.jpg" />
        )
    }
    else if (state === 6) {
        return (
            <img src="src/image/my-7.jpg" />
        )
    }
    else {
        return (
            <img src="src/image/my-8.jpg" />
        )
    }
}
export default Carousel