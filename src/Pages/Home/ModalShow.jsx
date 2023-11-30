
// import { useEffect, useState } from 'react';
// import Modal from 'react-modal';
// import { Link } from 'react-router-dom';
// const ModalShow = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [timer, setTimer] = useState(null);

//     useEffect(() => {
//         setTimer(
//             setTimeout(() => {
//                 setShowModal(true);
//             }, 10000)
//         );

//         return () => clearTimeout(timer);
//     }, [timer]);
//     return (
//         <div>
//             {/* <div>
//                 {showModal && (
//                     <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
//                         <div className="p-6 h-[25vh] w-1/2 mx-auto">
//                             <h2 className="text-lg font-bold mb-4">Subscribe to our newsletter</h2>
//                             <p className="mb-4">Get the latest news and updates delivered straight to your inbox.</p>
//                             <Link
//                                 to="/subscription"
//                                 className="btn btn-primary"
//                                 onClick={() => setShowModal(false)}
//                             >
//                                 Subscribe now
//                             </Link>
//                         </div>
//                     </Modal>
//                 )}
//             </div> */}

//         </div>
//     );
// };

// export default ModalShow;