$(document).ready(function() {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    const username = getQueryParam("username");

    if (username) {
        $("#username").text(username);
    }

    $("#logout").on("click", function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });

    $("#toCalculator").on("click", function(event) {
        event.preventDefault();
        const username = $("#username").text();
        window.location.href = `calculator.html?username=${encodeURIComponent(username)}`;
    });

    $("#datePicker").on("keydown", (event) => {
        event.preventDefault();
    })

    const today = new Date().toISOString().split('T')[0];
    $("#datePicker").val(today);

    let interval;
    let elapsedTime = 0;

    function formatTime(seconds){
        const hrs = String(Math.floor(seconds/3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${hrs} : ${mins} : ${sec}`;
    }

    async function startStopwatch(){
        if (interval) return;

        await new Promise((resolve) => {
            interval = setInterval(() => {
                elapsedTime++;
                $(".stopwatch").text(formatTime(elapsedTime));
            }, 1000);
            resolve();
        });
    }

    async function pauseStopwatch(){
        await new Promise((resolve) => {
            clearInterval(interval);
            interval = null;
            resolve();
        });
    }

    function resetStopwatch(){
        clearInterval(interval);
        interval = null;
        elapsedTime = 0;
        $(".stopwatch").text("00 : 00 : 00");
    }

    $("#startBtn").on("click", startStopwatch);
    $("#pauseBtn").on("click", pauseStopwatch);
    $("#resetBtn").on("click", resetStopwatch);

});