// PROVIDED DATA
const DATA = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


// CONSTANTS
let timerange = "weekly";
const main = document.getElementById("main");
const htmlButtons = [
  document.getElementById("btn-daily"), 
  document.getElementById("btn-weekly"), 
  document.getElementById("btn-monthly")];


// GENERATE CARDS ON FIRST RUN
main.innerHTML = DATA.map((item) => cardTemplate(item)).join(" ");


// BUTTONS EVENT LISTENERS
htmlButtons[0].addEventListener("click", () => {
  timerange = "daily"; 
  main.innerHTML = DATA.map((item) => cardTemplate(item)).join(" ") 
} );

htmlButtons[1].addEventListener("click", () => {
  timerange = "weekly";
  main.innerHTML = DATA.map((item) => cardTemplate(item)).join(" ")
} );

htmlButtons[2].addEventListener("click", () => {
  timerange = "monthly";
  main.innerHTML = DATA.map((item) => cardTemplate(item)).join(" "); 
} );


// FUNCTIONS
function lasttimerange (timerange) {
    if (timerange === "daily") return "Last day"
    if (timerange === "weekly") return "Last week"
    return "Last month"
}

function cardTemplate (item) {return (`
    <div class="card" id="card-${item.title.split(" ").join("").toLowerCase()}">
        <div class="card-bottom">
            <div>
                <p class="card-title" id="title-${item.title.split(" ").join("").toLowerCase()}">${item.title}</p>
                <p class="card-time" id="time-${item.title.split(" ").join("").toLowerCase()}">${item.timeframes[timerange].current}hrs</p>
            </div>
            <p class="card-lasttime">${lasttimerange(timerange)} - ${item.timeframes[timerange].previous}hrs</p>
            <button><img src="./images/icon-ellipsis.svg"></button>
        </div>
    </div>
`)};