import moment from "moment/moment";


const Time = () => {
    return (
        <div>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            
        </div>
    );
};

export default Time;