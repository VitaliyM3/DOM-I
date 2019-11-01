const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let navigation = document.querySelectorAll('a');
// navigation.forEach(function(element) {
//   element.textContent= Object.values(siteContent.nav);
// })

let codeSnip = document.getElementById("cta-img");
codeSnip.setAttribute('src', siteContent["cta"]["img-src"])

let imgAcrossScreen = document.getElementById("middle-img");
imgAcrossScreen.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let domIsAwesome = document.querySelector("h1");
domIsAwesome.textContent=siteContent['cta']['h1'];


let nav = document.querySelectorAll('a');
nav[0].textContent=siteContent["nav"]["nav-item-1"];
nav[1].textContent=siteContent["nav"]["nav-item-2"];
nav[2].textContent=siteContent["nav"]["nav-item-3"];
nav[3].textContent=siteContent["nav"]["nav-item-4"];
nav[4].textContent=siteContent["nav"]["nav-item-5"];
nav[5].textContent=siteContent["nav"]["nav-item-6"];

nav.forEach(function(element) {
  element.style.color = "green"
});

// TASK 3
let navigation = document.querySelector("nav");
let firstOne = document.createElement("a");
firstOne.textContent= "Development";
navigation.appendChild(firstOne);

let secondOne = document.createElement("a");
secondOne.textContent= "Games";
navigation.prepend(secondOne);





let button = document.querySelector("button");
button.textContent=siteContent["cta"]['button'];


let contentTitle = document.querySelectorAll("h4");
contentTitle[0].textContent=siteContent["main-content"]["features-h4"];
contentTitle[1].textContent=siteContent["main-content"]["about-h4"];
contentTitle[2].textContent=siteContent["main-content"]["services-h4"];
contentTitle[3].textContent=siteContent["main-content"]["product-h4"];
contentTitle[4].textContent=siteContent["main-content"]["vision-h4"];
contentTitle[5].textContent=siteContent["contact"]["contact-h4"];

let content = document.querySelectorAll("p");
content[0].textContent=siteContent["main-content"]["features-content"];
content[1].textContent=siteContent["main-content"]["about-content"];
content[2].textContent=siteContent["main-content"]["services-content"];
content[3].textContent=siteContent["main-content"]["product-content"];
content[4].textContent=siteContent["main-content"]["vision-content"];
content[5].textContent=siteContent["contact"]["address"];
content[6].textContent=siteContent["contact"]["phone"];
content[7].textContent=siteContent["contact"]["email"];
content[8].textContent=siteContent["footer"]["copyright"];










