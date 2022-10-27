import React from 'react'

const Payment = () => {
  return (
    <div>
        <form className='form'>
            <h1>Payment Form</h1>
            <label>Enter number:</label>
            <input type="text" placeholder="0712345678"/>
            <label>Enter amount:</label>
            <input type="text" placeholder="500"/>
            <button>Send money</button>
            <a href='/register'>Go back</a>
        </form>
    </div>
  )
}

export default Payment