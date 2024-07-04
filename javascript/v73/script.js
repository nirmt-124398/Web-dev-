function createcard(title, image, duration, channel, views, months) {
    let viewstr;
    if (views < 1000) {
        viewstr = views;
    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    }
    else {
        viewstr = views / 100000 + "K";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${image}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channel} . ${viewstr} views . ${months} months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
}

createcard("Introduction to Backend | Sigma Web Dev video #2", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "31:06" , "CodeWithHarry",78000000, 2);
