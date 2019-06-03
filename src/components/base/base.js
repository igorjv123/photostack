import React from 'react'
import DragAndDropWrapper from 'components/dragAndDropWrapper/dragAndDropWrapper'

 class FileBase64 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(e) {

    let files = e.target.files;

    var allFiles = [];
      let file = files[0];

      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };
        allFiles.push(fileInfo);

        if(allFiles.length === files.length){
          if(this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone();

        }  
    }
  }

  render() {
    return (
      <DragAndDropWrapper
        onDone = {this.props.onDone}
        multiple={ this.props.multiple } 
      />
    );
  }
}
export default FileBase64;

