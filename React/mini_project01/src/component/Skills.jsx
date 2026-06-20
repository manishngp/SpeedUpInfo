

const Skills = ({ data }) => {
    // console.log(data);
    return (
        <>
            <h2>These are my skills</h2>
            <ul>
                {
                    data.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))
                }
            </ul>


        </>
    )
}

export default Skills