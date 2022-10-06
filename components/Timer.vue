<template>
    <div id="stopwatch">
        <div>
            <h1>TIMER WATCH</h1>
        </div>
        <div id="timer" role="timer">{{ timer }}</div>
        <div>
            <v-btn id="start-button" :disabled=isStartDisabled color="success" ref="buttonStart" @click="onStart">start</v-btn>
            <v-btn id="stop-button" :disabled=isStopDisabled color="red" ref="stop-button" @click="onStop">stop</v-btn>
            <v-btn id="reset-button" :disabled=isResetDisabled color="blue" ref="reset-button" @click="onReset">reset</v-btn>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            INTERVAL: 1000 / 60,
            timer: '00:00:000',
            timerID: 0,
            lastInicialTime: 0,
            timeCounter: 0,
            isStartDisabled: false,
            isStopDisabled: true,
            isResetDisabled: true,
        }
    },

    methods: {
        onStart() {
            this.isStartDisabled = true
            this.isStopDisabled = false
            this.isResetDisabled = true
            
            this.lastInicialTime = Date.now()
            this.timerID = setInterval(this.timeUpdate, this.INTERVAL)
        },
        
        onStop() {
            this.isStartDisabled = false
            this.isStopDisabled = true
            this.isResetDisabled = false

            this.timeCounter += Date.now() - this.lastInicialTime
            clearInterval(this.timerID)
        },

        onReset() {
            this.isResetDisabled = true
            
            this.timer = '00:00:000'
            this.timeCounter = 0
        },

        timeUpdate() {
            const millisElapsed = Date.now() - this.lastInicialTime + this.timeCounter
            const secondsElapsed = millisElapsed / 1000
            const minutesElapsed = secondsElapsed / 60

            const millisText = this.formatNumber(millisElapsed % 1000, 3)
            const secondsText = this.formatNumber(Math.floor(secondsElapsed) % 60, 2)
            const minutesText = this.formatNumber(Math.floor(minutesElapsed), 2)

            this.timer = `${minutesText}:${secondsText}:${millisText}`
        },

        formatNumber(number, desiredLength) {
            const stringNumber = String(number)
            return stringNumber.padStart(desiredLength, '0')
        }
    },
}
</script>

<style scope>
    #stopwatch {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 10px;
        margin-top: 10em;
    }

    #timer {
        --size: 200px;
        width: var(--size);
        height: var(--size);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid white;
        font-size: 36px;
        background: #568DF0;
    }
</style>