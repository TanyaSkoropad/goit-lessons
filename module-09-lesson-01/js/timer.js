'use strict';

const TIMER_DEADLINE = new Date(2023, 2, 1, 12, 52, 0);
const timerEl = document.querySelector('.timer__items');

const timer = {
    intervalId: null,

    start(rootSelector, deadline){
        this.intervalId = setInterval(() => {
            const now = Date.now();
            const diff = deadline-now;

            if(diff<0) {
                this.stop();
                return;
            }

            const {days, hours, minutes, seconds} = this.getTimeComponents(diff);

            rootSelector.querySelector('.js-timer__days').textContent = this.pad(days);
            rootSelector.querySelector('.js-timer__hours').textContent = this.pad(hours);
            rootSelector.querySelector('.js-timer__minutes').textContent = this.pad(minutes);
            rootSelector.querySelector('.js-timer__seconds').textContent = this.pad(seconds);

        }, 1000)
    },

    getTimeComponents(diff) {
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;
    
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    },

    pad(value) {
        return String(value).padStart(2, 0);
    },

    stop(){
        clearInterval(this.intervalId);
    }
};

timer.start(timerEl, TIMER_DEADLINE);
