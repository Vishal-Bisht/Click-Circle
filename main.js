document.addEventListener('click', (event)=>{
    const circle = document.createElement('div');
    circle.className = 'circle';

    const message = ['Hi', 'Hello', 'Welcome', 'Yoo', 'Whatsup','Thanks']

    circle.textContent = message[Math.floor(Math.random()*message.length)];

    const X = event.clientX;
    const Y = event.clientY;

    circle.style.left = `${X-25}px`;
    circle.style.top = `${Y-25}px`;

    const color = [
        '#FECA57', '#54A0FF', '#5F27CD', '#C44569', '#F8B500', '#34495E', '#16A085', '#27AE60', '#2980B9','#C7CEEA', '#FFDAB9', '#87CEEB', '#DDA0DD'
    ]
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
})