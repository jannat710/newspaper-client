import { useEffect, useState } from "react";
import AllPublisher from "./AllPublisher";
import Plans from "./Plans";
import Statistic from "./Statistic";
import TrendingArticles from "./TrendingArticles";
import News from "./MoreFeature/News";
import Marquee from "react-fast-marquee";
import BreakingNews from "./MoreFeature/breakingNews";
import Banner from "./Banner";





const Home = () => {


    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        fetch('http://localhost:5001/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);
            });
    }, [])

    return (
        <div>
           
           

            


            <BreakingNews></BreakingNews>
            <Banner></Banner>

            <div className="flex p-7">
                <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true}>
                    {
                        news.map(item => <News
                            key={item._id} item={item}></News>)
                    }
                </Marquee>
            </div>
            <TrendingArticles></TrendingArticles>
            <AllPublisher></AllPublisher>
            <Plans></Plans>
            <Statistic></Statistic>

        </div>
    );
};

export default Home;