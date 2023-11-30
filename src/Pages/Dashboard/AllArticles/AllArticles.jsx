import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AllArticlesItem from "./AllArticlesItem";


const AllArticles = () => {
    const axiosSecure = useAxiosSecure();
    const { data: articles = [],} = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articles');
            return res.data;
        }
    })
    return (

            <div>
            <Helmet>
                <title>NewsFlash | All Articles</title>
            </Helmet>
            <SectionTitle heading='All Articles'>
            </SectionTitle>
            <div>
                <h1 className="text-3xl py-4 pl-10">Total Article:{articles.length}</h1>
                <div className="grid md:grid-cols-2 gap-10">
            {
                    articles.map(item => <AllArticlesItem
                        key={item._id}
                        item={item}
                    ></AllArticlesItem>)
                }
            </div>


            </div>

        </div>

    );
};

export default AllArticles;