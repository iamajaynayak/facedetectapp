import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange , onButtonSubmit}) => {
	return (
		
		
		<div style={{
			marginTop: `5em`
		}}>
		<div className='center form pa4 ba3 shadow-5' style={{
			width: `90vw`
		}}>
		<input className='f4 ba0 pa2 center w-70' type='text' placeholder='Paste image link here' onChange={onInputChange}/>
		<button onClick={onButtonSubmit} className='grow ba0 f4 link ph3 pv2 dib w-30  bg-washed-green'>Go</button>
		</div>
		</div>
		
		)
}

export default ImageLinkForm;