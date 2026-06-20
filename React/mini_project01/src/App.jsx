import Header from "./component/Header"
import "./App.css"
import About from "./component/About";
import Skills from "./component/Skills";
import ProjectList from "./component/ProjectList";
import Footer from "./component/Footer";
function App() {

    let name = "Manish Nagpure";
    let information = `A Frontend Developer is responsible for creating the user-facing 
                part of a website or web application. They use HTML to structure
                content, CSS to style it, and JavaScript to make it interactive. 
                Frontend developers also work with frameworks like React, Angular,
                or Vue.js to build modern and dynamic interfaces. Their goal is to
                ensure websites are responsive, visually appealing, fast, and compatible 
                cross different devices and browsers.`;

    const skills = ["Html", "CSS", "JavaScript", "React"];
    const projectsData = [
        {
            name: "Calculator",
            techUsed: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Weather App",
            techUsed: ["HTML", "CSS", "JavaScript", "API"]
        },
        {
            name: "To-Do List",
            techUsed: ["React", "CSS", "Local Storage"]
        },
        {
            name: "Recipe Finder",
            techUsed: ["React", "Tailwind CSS", "API"]
        },
        {
            name: "E-Commerce Website",
            techUsed: ["React", "Redux", "Tailwind CSS", "Firebase"]
        }
    ];


    return (
        <>
            <Header name={name} />
            <About info={information} />
            <Skills data={skills} />
            <ProjectList projects={projectsData} />
            <Footer />
        </>
    )
}

export default App