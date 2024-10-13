import ImageBanner from "./ImageBanner.jsx";

const ExtraCurricular = () => {
    return (
        <div className="extra-curricular">
            <h2>Extra Curricular Activities</h2>
            <div className="banners">
                <ImageBanner/>
                <ImageBanner/>
            </div>
        </div>
    );
};

export default ExtraCurricular;