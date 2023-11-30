

const AllArticlesItem = ({ item }) => {
    const { articleTitle, authorName, authorEmail, authorPhoto, postedDate, status, publisher } = item;
    return (

        <div className="pl-10">
            <div className="card w-96 bg-base-100 border shadow-xl">

                <div className="card-body">
                    
                    <img className="w-full mx-auto h-44" src={authorPhoto} alt="" />
                    <h2 className="card-title h-12">Title : {articleTitle}</h2>
                    <p>Author Name : {authorName}</p>
                    <p className="">Email : {authorEmail}</p>
                    <p>Date : {postedDate}</p>
                    <p>Status :{status}</p>
                    <p>Publisher : {publisher}</p>
                    <div className=" gap-1 justify-center">
                        <div className="badge badge-primary">Approve</div>
                        <div className="badge text-white badge-error">Decline</div>
                        <div className="badge text-white badge-error">Delete</div>
                        <div className="badge text-white badge-success">Make Premium</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllArticlesItem;