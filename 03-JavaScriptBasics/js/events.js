let clicked = 0;
const onClick = () => {
    clicked += 1;
    const info = `You clicked the button ${clicked} times.`,
        element = document.getElementById('event');
    element.innerHTML = '';
    console.log(info);
    element.innerHTML = info;
};

document.getElementById('button').onclick = onClick;