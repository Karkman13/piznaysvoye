import React, { Component, ChangeEvent } from 'react';
import { storage } from '../../firebase/indexfirebase';

interface ImgProps {
    updateData: (value: boolean) => any,
    _path: string
}

interface ImgState {
    file: File | null,
    imagePreviewUrl: string,
    isload: boolean,
    progress: number
}

class FirebaseImageUpload extends Component<ImgProps, ImgState>{
    constructor(props: ImgProps) {
        super(props)
        this.state = {
            file: null,
            imagePreviewUrl: '',
            isload: true,
            progress: 0
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleImageChange(event: any) {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result as string
            });
        }
        console.log(this.state.file?.name);
        reader.readAsDataURL(file)
    }

    _handleSubmit(event: React.MouseEvent) {
        event.preventDefault();
        console.log(this.state.file?.name);
        storage.ref(`images/${this.props._path}/${this.state.file?.name}`).put(this.state.file);
        console.log('done');

        // snapshot => {
        //     const progres =  Math.round(
        //         (snapshot.bytesTransferred / snapshot.totalBytes ) *100
        //     );
        //     this.setState(
        //         {
        //             progress: progres
        //         }
        //     );
        // }
        // this.setState({isload:false});
        
        const vvoid = () =>{
            this.setState({
                isload:false
            })
        }

        console.log(this.state.isload);
        this.props.updateData(this.state.isload)
        this.props.updateData(false);
    }

    render() {

        return (
            <div>
                {/* <progress value={this.state.progress} max='100' /> */}
                <input accept='image/*' type="file" onChange={this._handleImageChange} />
                <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
            </div>
        )
    }
}

export default FirebaseImageUpload;