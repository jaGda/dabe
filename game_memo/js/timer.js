class Timer {
    constructor(timer) {
        this.timer = timer;
        this.gameTime = 0;
        this.interval = null;
    }

    start() {
        this.interval = setInterval(() => {
            this.gameTime += 0.01;
            this.timer.innerHTML = this.gameTime.toFixed(2);
        }, 10);
    }

    stop() {
        clearInterval(this.interval);
    }
}

const timer = new Timer(document.getElementById("timer"));