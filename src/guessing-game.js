class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.arr_to_search = [];
        this.middle = 0;
    }
        
    setRange(min, max) {
        this.start = min;
        this.end = max;
        for (let i = min; i <= max; i++) {
            this.arr_to_search.push(i);
        }
        this.middle = Math.round((this.start + this.end)/2);
    }
        
    guess() {
        return this.arr_to_search[this.middle];
    }
        
    lower() {
        this.end = this.middle;
        this.middle = Math.round((this.start + this.end)/2);
    }
        
    greater() {
        this.start = this.middle;
        this.middle = Math.round((this.start + this.end)/2);
    }
}

module.exports = GuessingGame;
