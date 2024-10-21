import Newsfeed from "../Components/Newsfeed";

const HomePage = () => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 border-2 border-red-600">
                <Newsfeed></Newsfeed>
            </div>
            <div className="col-span-4 border-2 border-blue-600">

            </div>
        </div>
    );
};

export default HomePage;