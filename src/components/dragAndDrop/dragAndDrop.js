import React, {Component} from 'react'
import './style.scss'
import dropIcon from './images/dropIcon.png'
class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = { dragging: false }
        this.dragCounter = 0
        this.dropRef = React.createRef()
    
    }
    handleDrag = e => {
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragIn = e => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if(e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({
                dragging: true
            })
        }
    }
    handleDragOut = e => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        if(this.dragCounter  === 0) 
        this.setState({dragging: false})
    }
    
    handleDrop = e => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({dragging:false})
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
            this.dragCounter = 0
        }
    }
    componentDidMount() {
        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }
    
    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.hangleDragIn)
        div.removeEventListener('dragleave', this.handleOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }
    
    render() {
        return (
            <div style={{ display: 'inline-block', position: 'relative', ...this.props.style }} ref={this.dropRef}>
                {this.state.dragging?
                    <div className='dragAndDropText'>
                            DROP IT <br/>
                            <img style={{height:'2em'}} src={dropIcon}/>
                    </div>
                :
                    <div className='dragAndDropText'>
                            DRAG PHOTO HERE
                    </div>
                }
            {this.props.children}
            </div>
        ) 
    
    }
}
export default DragAndDrop;
  