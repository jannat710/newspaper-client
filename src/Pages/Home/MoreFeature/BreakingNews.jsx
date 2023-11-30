import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Time from './Time';


const BreakingNews = () => {
    //typewriter
    const [text] = useTypewriter({
        words: ['Major Breakthrough in Cancer Research Promises New Treatment Options','World Leaders Gather for Historic Peace Summit','Scientists Discover New Species in Unexplored Rainforest','Record-Breaking Heatwave Sweeps Across the Globe'],
        loop: 10,
        typeSpeed:120,
        deleteSpeed:60,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div>
            <h1 className="py-8 text-sm flex justify-start gap-4 items-center">
                <Time></Time>
                <div className='bg-[#dc0003] text-white p-1 rounded-sm ml-10'>Breaking :</div>
                <span className="font-medium text-sm"> {text}</span><Cursor/>
            </h1>

        </div>
    );
};

export default BreakingNews;