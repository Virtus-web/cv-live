function Skill ({ title, level }) {

    return (
        <div className="skill">
            <p className="skill__label">{title}</p>
            <p className="skill__label">{level}</p>
            {/* <div className="skill__rating">
                <div className={`circle ${rating > 0 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 1 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 2 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 3 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 4 && "circle--plain"}`}></div>
            </div> */}
        </div>
    )
}

export default Skill
