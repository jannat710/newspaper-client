import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";


const MyArticle = () => {
    return (
        <div>
            <Helmet>
                <title>NewsFlash | My Article</title>
            </Helmet>
            <SectionTitle heading='My Article'>
            </SectionTitle>
            
        </div>
    );
};

export default MyArticle;