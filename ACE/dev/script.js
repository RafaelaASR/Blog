function imageZoom(imgId, resultId){
    var img = document.getElementById(imgId);
    var lens = document.getElementById(resultId);
    lens = document.createElement("div");
    img.parentElement.insertBefore(lens, img);
    cx = resultId.offsetWidth/lens.offsetWidth;
    cy = resultId.offsetHeight/lens.offsetHeight;

    result.style.backgroundImage = "url(" + img.src + ")";

    result.style.backgroundSize = (img.width * cx) + "px" + (img.height * cy) + "px";
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
}

function moveLens(e){
    var pos, x, y;

    e.preventDefault();

    pos= getCursorPos(e);

    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);

    if(x > img.width - lens.offsetWidth) {
        (x = img.width - lens.offsetWidth);
    }
    if(x < 0){
        x = 0;
    }
    if(y > img.height - lens.offsetHeight) {
        (y = img.height - lens.offsetHeight);
    }
    if(y < 0){
        y = 0;
    }

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
}

function getCursorPos(e){
    var a, x=0, y=0;

    e = e || window.event;

    a = img.getBoundingClientRect();

    x = e.pagX - a.left;
    y = e.pagY - a.top;

    x = x.window.pageXOffset;
    y = y.window.pageYOffset;
    return(x:x,y:y);
}