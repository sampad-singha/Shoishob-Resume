
function CardHorizontal(props) {
    const degree = props.data.degree;
    const span = props.data.span;
    const image = props.data.image;
    const institute = props.data.institute;
    const grade = props.data.grade;
    const scale = props.data.scale;
    return (
        <div className="card-h">
            <div>
                <img className="" src={image} alt=""/>
            </div>
            <div className="text">
                <h4>{degree}</h4>
                <p>{span}</p>
                <p>{institute}</p>
                <p className="result">CGPA: <span>{grade}</span> out of {scale}</p>
            </div>
        </div>
    );
}

export default CardHorizontal;