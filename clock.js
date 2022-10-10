setInterval(function () {
    let d = new Date();
    let hTime = d.getHours();
    let mTime = d.getMinutes();
    let sTime = d.getSeconds();

    let hRotation = 30 * hTime + mTime / 2;
    let mRotation = 6 * mTime;
    let sRotation = 6 * sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);