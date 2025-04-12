const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Dark Mode";
    }
    else {
        modeText.innerText = "Light Mode";
    }
});

Array.from(document.getElementsByTagName('input')).forEach((e) => {
    e.addEventListener('keyup', () => {
        const parentCard = e.closest('.card');
        const caretIcon = parentCard.querySelector('.bi-caret-down-fill');
        if (e.value.length > 0) {
            caretIcon.style.transform = "rotate(180deg)";
        } else {
            caretIcon.style.transform = "rotate(0deg)";
        }
    });
});
document.getElementById('clickImage').addEventListener('click', function () {
    var iframeContainer = document.createElement('div');
    iframeContainer.className = 'iframe-container';

    var iframe = document.createElement('iframe');
    iframe.frameBorder = '0';
    iframe.src = 'https://momento360.com/e/u/fa1d0ffa3b0049adbb592a49dad1a22f?utm_campaign=embed&utm_source=other&heading=28.3&pitch=6.5&field-of-view=100&size=medium&display-plan=true';

    iframeContainer.appendChild(iframe);
    this.parentNode.replaceChild(iframeContainer, this);
    iframeContainer.classList.add('centered');
});

document.getElementById('clickImage2').addEventListener('click', function () {
    var iframeContainer = document.createElement('div');
    iframeContainer.className = 'iframe-container';

    var iframe = document.createElement('iframe');
    iframe.frameBorder = '0';
    iframe.src = 'https://momento360.com/e/u/e7e9ecf29049411c8081e8643caa6b58?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true';

    iframeContainer.appendChild(iframe);
    this.parentNode.replaceChild(iframeContainer, this);
    iframeContainer.classList.add('centered');
});

document.getElementById('clickImage3').addEventListener('click', function () {
    var iframeContainer = document.createElement('div');
    iframeContainer.className = 'iframe-container';

    var iframe = document.createElement('iframe');
    iframe.frameBorder = '0';
    iframe.src = 'https://momento360.com/e/u/464dbb5be2ce45d6b930b58fa627ac96?utm_campaign=embed&utm_source=other&heading=-278.44&pitch=-9.69&field-of-view=75&size=medium&display-plan=true';

    iframeContainer.appendChild(iframe);
    this.parentNode.replaceChild(iframeContainer, this);
    iframeContainer.classList.add('centered');
});

document.getElementById('clickImage4').addEventListener('click', function () {
    var iframeContainer = document.createElement('div');
    iframeContainer.className = 'iframe-container';

    var iframe = document.createElement('iframe');
    iframe.frameBorder = '0';
    iframe.src = 'https://momento360.com/e/u/1f104dc7c45148319cf2f5c6ccb13f83?utm_campaign=embed&utm_source=other&heading=-40&pitch=-0.2&field-of-view=75&size=medium&display-plan=true';

    iframeContainer.appendChild(iframe);
    this.parentNode.replaceChild(iframeContainer, this);
    iframeContainer.classList.add('centered');
});
let color = ['orangered','antiquewhite','cadetblue','coral','aqua','deepskyblue', 'yellow', 'cornflowernlue', 'pink', 'teal', 'orange', 'blueviolet','goldenrod','dodgerblue'];
let currentIndex = 0;
let intervalId;
let allowAutoChange = false; // Flag variable to control automatic color change

document.getElementById('colorLink').addEventListener("click", () => {
    clearInterval(intervalId); // Stop the interval if the button is clicked
    allowAutoChange = true; // Enable automatic color change
    changeColors();
});

function startColorChangeInterval() {
    clearInterval(intervalId); // Clear any previous interval
    if (allowAutoChange) {
        intervalId = setInterval(changeColors, 5000);
    }
}

function changeColors() {
    document.querySelector('.home').style.transition = "background 0.5s"; // Add transition property
    document.querySelector('.home').style.background = color[currentIndex];
    document.body.style.transition = "background 0.5s"; // Add transition property for body
    document.body.style.background = color[currentIndex];
    currentIndex = (currentIndex + 1) % color.length;
    console.log(color[currentIndex]);
}

startColorChangeInterval(); // Start the initial interval

document.addEventListener("mousemove", () => {
    startColorChangeInterval(); // Reset the interval on mouse movement
});
// Add this JavaScript to your existing script

// JavaScript
const sidebarLinks = document.querySelectorAll('.jump-animation');

// Function to trigger the jump animation
function jumpAnimation() {
  this.classList.add('jump'); // Add the 'jump' class to trigger the animation
  setTimeout(() => {
    this.classList.remove('jump'); // Remove the 'jump' class after the animation is done
  }, 500); // Adjust the time (in milliseconds) to match your CSS animation duration
}

// Add the click event listener to each sidebar link
sidebarLinks.forEach(link => {
  link.addEventListener('click', jumpAnimation);
});