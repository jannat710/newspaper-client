import { Helmet } from "react-helmet-async";


const AllPublisher = () => {
    return (
        <div>
            <Helmet>
                <title>NewsFlash | All Publisher</title>
            </Helmet>
            <h1 className="font-semibold text-3xl divider divider-end">
                <span className="border-l-4 border-[#dc0003] pl-2">All</span>
                <span className="text-[#dc0003]">Publisher</span>
            </h1>

        </div>
    );
};

export default AllPublisher;