const project1 = {
    name:"RPSLS",
    type:"Javascript, HTML, CSS",
    description:"A Pokemon twist on the five-option version of Rock Paper Scissors: Rock Paper Scissors Lizard Spock! Created with Joshua Kumar.",
    link:"https://pokemon-rpsls-9339792.codehs.me/index.html",
};

const project2 = {
    name:"Digital Blackjack",
    type:"Python",
    description:"A text-based version of the classic card game Blackjack.",
    link:"https://replit.com/@StephenAkrong/Python-Black-Jack?v=1#main.py",
    media:"Media/Blackjack.mp4",
};

const project3 = {
    name:"RPG System",
    type:"Roblox,Lua",
    description:"A basic RPG system including: basic movement, sword combat, a leveling and EXP system, and a monster system.",
    link:"N/A",
    media:"Media/RPG.mp4",
};

const project4 = {
    name:"Bounce Georgia Website",
    type:"Javascript, HTML, CSS",
    description:"An upgraded version of the Bounce Georgia company's website including features such as: embedded Google Maps, availability calendar, and an online order form.",
    link:"https://kdduvxcsbv-2284851412-a.codehs.me/products/inflatables.html#top",
};




const projects = [project1, project2, project3, project4];
let searchedProjects = [];

window.addEventListener("DOMContentLoaded", (event) => {
    const searchBar = document.getElementById("search");

    searchBar.addEventListener("input", e => {
        let searchedProjects = [];
        const text = e.target.value.toLowerCase()
        for(let i = 0; i < projects.length; i++) {
            document.getElementById(projects[i].name.toLowerCase()).style.display = "none";
            inName = projects[i].name.toLowerCase().search(text)
            if (inName == -1) {
                inType = projects[i].type.toLowerCase().search(text)
                if (inType != -1) {
                    searchedProjects.push(projects[i])
                }
            } else {
                searchedProjects.push(projects[i])
            }
        }
        for(let i = 0; i < searchedProjects.length; i++) {
            document.getElementById(searchedProjects[i].name.toLowerCase()).style.display = "flex";
        }
    })
})

function details(project){
    for(let i = 0; i < projects.length; i++) {
        if (project == projects[i].name){
            document.getElementById("p-name").innerHTML = "Project Name: " + projects[i].name;
            document.getElementById("p-description").innerHTML = "Description: " + projects[i].description;
            document.getElementById("p-type").innerHTML = "Language/Software(s): " + projects[i].type;
            document.getElementById("p-link").href = projects[i].link;
            document.getElementById("p-link").innerHTML = projects[i].link;
            if (projects[i].media) {
                document.getElementById("p-media").style.display = "block"
                document.getElementById("p-media").src = projects[i].media;
            } else {
                document.getElementById("p-media").style.display = "none"
            }
            
        }
    }    
}