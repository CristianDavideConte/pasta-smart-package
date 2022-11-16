class CustomTimer {
    private minutes: number;
    private seconds: number;

    constructor (minutes: number, seconds: number) {
        this.minutes = Math.floor(minutes);
        this.seconds = Math.floor(seconds);
    }

    getRemaningSeconds() : number {
        return this.minutes * 60 + this.seconds;
    }

    getMinutes() : number {
        return this.minutes;
    }

    getSeconds() : number {
        return this.seconds;
    }
}

export default CustomTimer;