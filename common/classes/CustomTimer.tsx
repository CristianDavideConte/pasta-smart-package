class CustomTimer {
    private minutes: number;
    private seconds: number;
    private totalTime: number;
    private startingTime: number;
    private remaningTime: number;
    private timerId: NodeJS.Timer | undefined;
    private onUpdateCallback: Function;

    constructor (minutes: number, seconds: number, onUpdateCallback: Function) {
        this.minutes = Math.floor(minutes);
        this.seconds = Math.floor(seconds);
        this.totalTime = (this.minutes * 60 + this.seconds) * 1000;
        this.startingTime = 0;
        this.remaningTime = this.totalTime;
        this.onUpdateCallback = onUpdateCallback;
    }
    
    private startTimer = () => {
        clearTimeout(this.timerId);
        
        const count = () => {
            this.timerId = setTimeout(() => {
                this.remaningTime -= 300;
                if(this.remaningTime < 1000) {
                    this.remaningTime = 0;
                    this.pause();
                    this.onUpdateCallback(this.remaningTime);
                    return;
                }
                this.onUpdateCallback(this.remaningTime);
                setTimeout(count, 0);
            }, 300);
        }
        
        count();
    }

    isRunning() : boolean {
        return !!this.timerId;
    }

    start() {
        this.remaningTime = this.totalTime;
        this.startingTime = Date.now();
        this.startTimer();        
    }

    pause() {
        clearTimeout(this.timerId);
        this.timerId = undefined;
    }

    resume() {
        if(this.startingTime > 0) {
            this.startTimer();        
        } else {
            this.start();
        }
    }

    reset() {
        this.pause();
        this.startingTime = 0;
        this.remaningTime = this.totalTime;
    }

    getDisplayedTime() {
        const customTimerContainer = document.createElement("div");
        const customTimerMinutes = document.createElement("p");
        const customTimerSeparator = document.createElement("p");
        const customTimerSeconds = document.createElement("p");
        customTimerContainer.id = "custom-timer-container";
        customTimerMinutes.id = "custom-timer-minutes";
        customTimerSeparator.id = "custom-timer-separator";
        customTimerSeconds.id = "custom-timer-seconds";

        customTimerMinutes.innerHTML = this.convertNumberToTwoDigits(this.getRemaningMinutes());
        customTimerSeconds.innerHTML = this.convertNumberToTwoDigits(this.getRemaningSeconds());
        customTimerSeparator.innerHTML = ":";

        customTimerContainer.append(customTimerMinutes);
        customTimerContainer.append(customTimerSeparator);
        customTimerContainer.append(customTimerSeconds);
        return customTimerContainer;
    }

    convertNumberToTwoDigits(time: number) : string {
        return time > 9 ? time.toString() : "0" + time.toString();
    }

    getTotalTime() : number {
        return this.totalTime;
    }

    getRemaningTime() : number {
        return this.remaningTime;
    }
    
    getRemaningMinutes() : number {
        return Math.floor(this.remaningTime / 1000 / 60);
    }

    getRemaningSeconds() : number {
        return Math.floor((this.remaningTime / 1000) % 60);
    }

    getTotalMinutes() : number {
        return this.minutes;
    }

    getTotalSeconds() : number {
        return this.seconds;
    }

    activateDemoMode() {
        clearTimeout(this.timerId);
        this.timerId = undefined;
        this.remaningTime = 5 * 1000;
        this.startingTime = Date.now()
    }

    demo() : void {
        const demos = new Map();
        demos.set(0, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        demos.set(1, "https://www.youtube.com/watch?v=dVxBWo3_gyo&t=7s");
        demos.set(2, "https://www.youtube.com/watch?v=NUYvbT6vTPs");
        demos.set(3, "https://www.youtube.com/watch?v=G1IbRujko-A");
        demos.set(4, "https://www.youtube.com/shorts/oKFHo__DSDA");
        demos.set(5, "https://www.youtube.com/watch?v=Jz7NKpcrGRc");
        demos.set(6, "https://www.youtube.com/watch?v=Jz7NKpcrGRc");

        window.location = demos.get(Math.max(0, Math.ceil(Math.random() * Array.from(demos.keys()).length) - 1));
    }

    load(loader, divisor) {
        setTimeout(loader, divisor);
    }

    minutesInSecondss(seconds, divisor) {
        setInterval(seconds, divisor);
    }
}

export default CustomTimer;