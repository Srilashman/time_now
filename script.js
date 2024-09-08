
document.addEventListener("DOMContentLoaded", function() {
    let date;
    let time;
    [date, time] = get_datetime();
    const date_container = document.getElementById("date-container");
    const date_msg = document.createElement("div");
    date_msg.classList.add("date");
    date_msg.textContent = "Date: " + date;
    date_container.appendChild(date_msg);
    const time_container = document.getElementById("time-container");
    const time_msg = document.createElement("div");
    time_msg.classList.add("time");
    time_msg.textContent = "Time: " + time;
    time_container.appendChild(time_msg);
    const hour_hand = document.getElementById("hour-hand");
    const min_hand = document.getElementById("min-hand");
    const sec_hand = document.getElementById("sec-hand");
    function update_clock(time){
        let secRatio = Number(time.slice(10, 12))/60;
        let minRatio = (secRatio + Number(time.slice(5, 7)))/60;
        let hourRatio = (minRatio + Number(time.slice(0, 2)))/12;
        hour_hand.style.setProperty("--rotation", hourRatio * 360);
        min_hand.style.setProperty("--rotation", minRatio * 360);
        sec_hand.style.setProperty("--rotation", secRatio * 360);
    }
    function update_time(){
        [date, time] = get_datetime();
        date_msg.textContent = "Date: " + date;
        time_msg.textContent = "Time: " + time;
        update_clock(time);
    }
    function get_datetime(){
        let currentdate = new Date(); 
        let date = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear();

        let hour_0 = '';
        let min_0 = '';
        let sec_0 = '';
        if(currentdate.getHours() < 10){
            hour_0 = '0';
        }
        if(currentdate.getMinutes() < 10){
            min_0 = '0';
        }
        if(currentdate.getSeconds() < 10){
            sec_0 = '0'
        }

        let time = hour_0 + currentdate.getHours() + " : "  
                   + min_0 + currentdate.getMinutes() + " : " 
                   + sec_0 + currentdate.getSeconds();

        return [date, time];
    }
    update_time();
    setInterval(update_time, 1000);
});
