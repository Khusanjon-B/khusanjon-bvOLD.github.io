const projects = [
    {
        name: "Python Math Game",
        description: "A simple math game built with Python that tests your arithmetic skills using the terminal as an interface for the game. I also created an web implementation of the game using HTML, CSS, and JavaScript on this website, which you can play in the browser.",
        link: "projects/mathGame.html",
        img: "images/mathGamePhoto.jpg"
    },
    {
        name: "Basic Gravity Simulation with a Ball",
        description: "A basic gravity simulation built with Python and Pygame. The simulation features a ball that falls under the influence of gravity, bouncing off the ground and walls. It demonstrates basic physics principles and provides a simple interactive experience.",
        link: "projects/gravityProject.html",
        img: "images/gravityProjectPhoto.png"
    },
    {
        name: "OLED Sensor Display System",
        description: "This project is a real-time environmental and volume monitoring system built using an Arduino, an SSD1306 OLED display, a DHT11 sensor, and a potentiometer. The goal was to create a compact and responsive display that continuously shows the current date, time, temperature, humidity, and volume level (via potentiometer). The idea came from my interest in combining sensors with dynamic visual feedback—and I built the system from scratch, iterating on both hardware layout and software logic.",
        link: "projects/arduinoProject.html",
        img: "images/arduinoOLEDTimeTempDisplay.jpg"
    },
    {
        name: "MNIST Handwritten Digit Recognition",
        description: "A machine learning project that uses a Convolutional Neural Network (CNN) to recognize handwritten digits from the MNIST dataset. The model is trained using PyTorch, achieving high accuracy in digit classification. Another aspect of the project is the pygame interface, which allows users to draw digits and see predictions in real-time. There is also a feature that allows the user to train the model with their own handwritten digits.",
        link: "projects/mnist.html",
        img: "images/mnist.png"
    },
    {
        name: "Personal Website",
        description: "This website is built using HTML, CSS, and JavaScript. It serves as a portfolio to showcase my projects and skills.",
        link: "index.html",
        img: "images/personalWebsite.jpg"
    }
]

const totalProjects = projects.length - 1;

const allProjects = document.getElementById("allProjects");


for (let i = 0; i < totalProjects + 1; i++) {

    const project = projects[i];
    const projectElement = document.createElement("div");

    projectElement.className = "project";

    projectElement.innerHTML = `
        <div class="projectDescription">
        <a href="${project.link}" style="all: unset;"><h3>${project.name}</h3></a>
        <p>${project.description}</p>
        </div>
        <img src="${project.img}" alt="${project.name}">
    `;

    allProjects.appendChild(projectElement);
}