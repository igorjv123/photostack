
import React, {Component} from 'react'
import DragAndDrop from 'components/dragAndDrop/dragAndDrop'

class DragAndDropWrapper extends Component {
  
    constructor(props) {
        super(props);
    this.state = {
        file: {}
    }
  }


handleDrop = file => {
  let reader = new FileReader();
    file = file[0]
  reader.readAsDataURL(file);

  reader.onload = () => {

    let fileInfo = {
      name: file.name,
      type: file.type,
      size: Math.round(file.size / 1000) + ' kB',
      base64: reader.result,
      file: file,
    };
    if(this.props.multiple) this.props.onDone(fileInfo);
    else this.props.onDone(fileInfo);
  }
}

    render(){
        return (
          <div>
            <DragAndDrop handleDrop={this.handleDrop} style={{
                border: 'dashed grey 4px',
                backgroundColor: 'rgba(255,255,255,.8)'}}>
                <div style={{ height: 400, width: 450 }}>
                </div>
            </DragAndDrop>
          </div>
        )
    }

}
export default DragAndDropWrapper;