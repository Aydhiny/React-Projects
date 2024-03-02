document.addEventListener('mousemove', (event) => {
    const ball = document.getElementById('ball');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const ballX = ball.getBoundingClientRect().left + ball.offsetWidth / 2;
    const ballY = ball.getBoundingClientRect().top + ball.offsetHeight / 2;
    
    const deltaX = mouseX - ballX;
    const deltaY = mouseY - ballY;
    
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 100; // Adjust this value for the maximum distance the ball can move
    
    const translateX = Math.cos(angle) * Math.min(distance, maxDistance);
    const translateY = Math.sin(angle) * Math.min(distance, maxDistance);
    
    ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
});