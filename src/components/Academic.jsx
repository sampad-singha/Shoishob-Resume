import CardHorizontal from "./CardHorizontal.jsx";


const Academic = (props) => {
    const array = props.data;
    return (
        <div className="academic">
            <h2>Academic Credentials</h2>
            {array.map((data) =>{
                return <CardHorizontal key={data.id} data={data}/>
            })}
        </div>
    );
};

export default Academic;