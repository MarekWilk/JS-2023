document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    function createBall() {
        return {
            radius: 12,
            x: Math.random() * (canvas.width - 50) + 25,
            y: Math.random() * (canvas.height - 50) + 25,
            speedX: (Math.random() - 0.5) * 8,
            speedY: (Math.random() - 0.5) * 8,
            draw: function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#888'; 
                ctx.fill();
            },
            update: function() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
                    this.speedX = -this.speedX;
                }
                if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
                    this.speedY = -this.speedY;
                }
            }
        };
    }

    let balls = Array.from({length: 20}, createBall);

    function drawLineIfClose(ball1, ball2, threshold) {
        const dx = ball1.x - ball2.x;
        const dy = ball1.y - ball2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < threshold) {
            ctx.beginPath();
            ctx.moveTo(ball1.x, ball1.y);
            ctx.lineTo(ball2.x, ball2.y);
            ctx.strokeStyle = '#000'; 
            ctx.stroke();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balls.forEach(ball => {
            ball.draw();
            ball.update();
            balls.forEach(otherBall => {
                if (ball !== otherBall) {
                    drawLineIfClose(ball, otherBall, 100);
                }
            });
        });
        requestAnimationFrame(animate);
    }

    document.getElementById('startButton').addEventListener('click', animate);
    document.getElementById('resetButton').addEventListener('click', () => {
        balls = Array.from({length: 20}, createBall);
        animate();
    });
});