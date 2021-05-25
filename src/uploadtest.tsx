import React, {Component, ChangeEvent} from 'react';
import {storage} from './firebase/indexfirebase';

interface MyProps{
}

interface MyState{
    file: File | null,
    imagePreviewUrl: string
}

class ImageUpload extends Component <MyProps, MyState>{
    constructor(props:any) {
      super(props);
      this.state = {
        file: null,
        imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleSubmit(event:any) {
      event.preventDefault();
      // TODO: do something with -> this.state.file
      // let obj:File = JSON.parse(this.state.file);
      // console.log(this.state.file)
      // console.log(obj.name);
      // console.log(typeof this.state.file);
      // console.log()
      console.log(this.state.file?.name);
      // const uploadTask = storage.ref('images/'+this.state.file?.name).put(this.state.file);
      storage.ref(`images/${this.state.file?.name}`).put(this.state.file);
      // uploadTaskon(
      //   storage.ref("images").
      // )
    }
  
    _handleImageChange(event:any) {
      event.preventDefault();
      let reader = new FileReader();
      let file = event.target.files[0];

  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result as string
        });
        // let ttype:File = file;
        // console.log(typeof ttype)
        // console.log(ttype.name);
        // console.log(typeof file);
        // console.log(file.name);
        // console.log(this.state.file);
        // console.log(this.state.file?.name);
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      }
  
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
          </form>
          {$imagePreview}
        </div>
      )
    }
  
  }

  export default ImageUpload;