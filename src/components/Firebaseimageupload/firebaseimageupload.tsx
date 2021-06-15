import axios from 'axios';
import firebase from 'firebase';
import React, { Component, ChangeEvent } from 'react';
import { storage } from '../../firebase/indexfirebase';
import ProgressBar from '../ProgressBar/ProgressBar';

interface ImgProps {
    updateData: (value: boolean) => any,
    _path: string
}

interface ImgState {
    file: File | null,
    imagePreviewUrl: string,
    isload: boolean,
    progress: number,
    ishiddenpb: boolean
}

class FirebaseImageUpload extends Component<ImgProps, ImgState>{
    constructor(props: ImgProps) {
        super(props)
        this.state = {
            file: null,
            imagePreviewUrl: '',
            isload: true,
            progress: 0,
            ishiddenpb: true
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
                imagePreviewUrl: reader.result as string,
                ishiddenpb: false
            }, ()=>{
                console.log(this.state.file?.name);
                console.log(this.state.file?.type==`image`);
            });
        }
        reader.readAsDataURL(file)
    }

    _handleSubmit(event: React.MouseEvent) {
        event.preventDefault();
        console.log(this.state.file?.name);
        const upload = storage.ref(`images/${this.props._path}/${this.state.file?.name}`).put(this.state.file);
        upload.on('state_changed', (snapshot:any) => {
            this.setState({
                progress: Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            }, ()=>{
                if(this.state.progress==100){
            console.log('load finished');
            console.log(this.state.isload);
            this.props.updateData(!this.state.isload);
        }
            })
            console.log('Upload is ' + this.state.progress + '% done');
        })
    }

    render() {

        return (
            <div>
                <input accept='image/*' type="file" onChange={this._handleImageChange} />
                <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                <ProgressBar bgcolor='#ef6c00' completed={this.state.progress} ishidden={this.state.ishiddenpb}/>
            </div>
        )
    }
}

export default FirebaseImageUpload;