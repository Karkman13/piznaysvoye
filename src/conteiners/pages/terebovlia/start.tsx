// import React, { Component, useState } from 'react';
// import {storage} from '../../../firebase/indexfirebase';
// import axios from 'axios';
// import { EROFS } from 'constants';
// import { start } from 'repl';

// // class Start extends Component {
// //     state ={
// //         selectedFile:null
// //     }

// //     fileSelectHandler (event:any){
// //         this.setState({})
// //         selectedFile: event.target.file
// //     }

// //     // fileUploadHendler (){
// //     //     axios.post()
// //     // }

// //     render() {
// //         return (
// //             <div className="Load">
// //                 <input accept="image/*" type="file"  onChange={this.fileSelectHandler}/>
// //                 <button onClick={this.fileSelectHandler}>Upload</button>
// //             </div>
// //         );
// //     }
// // }

// // export default Start;

// const ReactFirebaseUpload = () =>{
//     const [image, setImage] = useState("");
//     const [url, setUrl] = useState("");
//     let [progress, setProgres] = useState(0);

// const handleChange = (event:any) => {
//     if(event.target.files[0]){
//         setImage(event.target.files[0]);
//     }
// };

// const handlUpload = () => {

//     const uploadTask = storage.ref('images/').put(image);
//     // uploadTask.on(
//     //     // "state_change",
//     // (snapshot:any) => {
//     //         progress = Math.round(
//     //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//     //         );
//     //         setProgres(progress);
//     //     },
//     //     (error:any) => {
//     //         console.log(error);
//     //     },
//     //     ()=> {
//     //         storage.ref("images").child('image').getDownloadURL().then((url:any)=>{
//     //             console.log(url);
//     //             setUrl(url)
//     //         });
//     //     }
//     //     // storage.ref("images").child(image).getDownloadURL().then((url:any)=>{
//     //     //     console.log(url);
//     //     //     setUrl(url)
//     //     // })
//     // )
// };



// console.log("image:", image);

// return (
//     <div>
//         <progress value={progress} max="100" />
//         <br/>
//         <br/>
//         <input accept="image/*" type="file" onChange={handleChange} />
//         <button onClick={handlUpload}>Upload</button>
//         <input accept="image/*" type="file" />
//     </div>

// )
// }

// export default ReactFirebaseUpload;

import React, { Component} from 'react';

class Start extends Component{
    render(){
        return(
            <div>
                <div>
                Квест починається на Автостанції за адресою Князя Василька, 75. Там ви знайдете перший QR-код.
                </div> 
                <div>
                    Бажаємо успіху!
                </div>
            </div>
        )
    }
}

export default Start;



