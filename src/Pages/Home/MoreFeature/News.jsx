import { Link } from "react-router-dom";

const News = ({ item }) => {
    const { _id, category, image, heading, details } = item;
    return (

        <div className="my-2 shadow-xl w-96 flex justify-center items-center p-2 ">
            <img className="h-16 w-16 rounded-full" src={image} alt="Article Image" />
            <div className="pl-2">
                <button className="text-center rounded-sm text-xs bg-[#dc0003] text-white p-1">{category}</button>
                
                <h2 className="font-bold text-sm">{heading.length > 25 ? (
                    <p>
                        {heading.slice(0, 25)}{" "}
                        <Link to={`/news/${_id}`} className="font-bold text-black">
                            ...
                        </Link>
                    </p>
                ) : (
                    <p>{details}</p>
                )}</h2>
                {details.length > 30 ? (
                    <p className="text-xs">
                        {details.slice(0, 30)}{" "}
                        <Link to={`/news/${_id}`} className="font-bold text-black">
                            ...
                        </Link>
                    </p>
                ) : (
                    <p>{details}</p>
                )}
            </div>
        </div>

    );
};

export default News;