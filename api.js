function updateTime() {
    const now = new Date();

    // 10/18/2024 21:08:56
    const format1 = now.toLocaleDateString('en-US') + ' ' + now.toLocaleTimeString('en-US', { hour12: false });

    // Fri 18/10/2024 21.09
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const format2 = days[now.getDay()] + ' ' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + now.getHours() + '.' + now.getMinutes().toString().padStart(2, '0');

    // 2024-10-18 9:09 Fri
    const format3 = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0') + '-' + now.getDate().toString().padStart(2, '0') + ' ' + (now.getHours() % 12 || 12) + ':' + now.getMinutes().toString().padStart(2, '0') + ' ' + days[now.getDay()];

    // October 18th, 2024 09.09.59 PM


    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const format4 = months[now.getMonth()] + ' ' + now.getDate() + 'th, ' + now.getFullYear() + ' ' + (now.getHours() % 12 || 12).toString().padStart(2, '0') + '.' + now.getMinutes().toString().padStart(2, '0') + '.' + now.getSeconds().toString().padStart(2, '0') + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');

    // 18 October 2024 at 9:10 PM
    const format5 = now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear() + ' at ' + (now.getHours() % 12 || 12) + ':' + now.getMinutes().toString().padStart(2, '0') + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');

    document.getElementById('time1').textContent = format1;
    document.getElementById('time2').textContent = format2;
    document.getElementById('time3').textContent = format3;
    document.getElementById('time4').textContent = format4;
    document.getElementById('time5').textContent = format5;
}

setInterval(updateTime, 1000);

updateTime();