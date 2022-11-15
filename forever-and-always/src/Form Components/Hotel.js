import React from 'react'

function Hotel({title, imageUrl, body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-body'>
                        <p>{body}</p>
                </div>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
            </div> 
            <div className='btn'>
            </div>
            <div className='btn'>
                <button>
                    <a>

                    </a>
                </button>
            </div>
        </div>
    )
}

export default Hotel;