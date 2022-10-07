import { useForm } from "@formspree/react";

function Contact(){
    const [ state, handleSubmit ] = useForm(process.env.REACT_APP_FORMSPREE_LINK)

    const popUpMessageStyle = {
        width: '350px',
        height: state.succeeded ? '32px' : '85%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#007989',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        visibility: ( state.submitting || state.succeeded ) ? 'visible' : 'hidden',
        opacity: ( state.submitting || state.succeeded ) ? '100%' : '0',
        transition: 'all 0.5s ease',
        userSelect: 'none'
    }
    
    return(
        <form style={{ position: 'relative' }} onSubmit={handleSubmit} className='contactContainer'>
            <h2  className='contactHeader'>Get in touch</h2>
            <input required={true} name='name' placeholder='Name' className='contactSectionName' type='text'/>
            <input required={true} name='email' placeholder='Email' className='contactSectionEmail' type='email'/>
            <textarea required={true} name='message' placeholder='Message' className='contactSectionMessage' type='text' style={{resize: 'none'}}/>
            <div style={popUpMessageStyle}>
                {state.submitting && '...'}
                {state.succeeded && 'Message sent!'}
            </div>
            <button type='submit' disabled={state.submitting} className='sendButton'>
              Submit
            </button>
        </form>
    )
}

export default Contact;