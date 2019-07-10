const colors = ["red", "yellow", "blue", "grey", "pink", "green", "lightgreen", "orange", "brown", "cyan", "gold", "lime", "magenta", "olive", "plum", "salmon", "tomato"];

const setColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];

    return color;
};

export default setColor;