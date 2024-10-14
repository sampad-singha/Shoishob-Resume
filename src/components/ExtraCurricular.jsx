import ImageBanner from "./ImageBanner.jsx";

const ExtraCurricular = (props) => {
    const records = props.data;
    return (
        <div className="extra-curricular">
            <h2>Extra Curricular Activities</h2>
            <div className="banners">
                {records.map((record)=>{
                    return <ImageBanner
                        key={record.id}
                        data={record}
                    />
                })}
            </div>
        </div>
    );
};

export default ExtraCurricular;