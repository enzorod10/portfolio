import { useForm } from "@formspree/react";

function Contact(){
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_LINK);

    let buttonText;
    if (state.submitting) {
        buttonText = 'Submitting...';
    } else if (state.errors.length > 0) {
        buttonText = 'Something went wrong...';
    } else if (state.succeeded) {
        buttonText = 'Message successfully sent!';
    } else {
        buttonText = 'Submit';
    }

    return (
        <form style={{ position: 'relative' }} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 w-full justify-center items-center">
                <h2 className="text-white text-2xl">Get in touch</h2>
                <input 
                    disabled={state.submitting || state.succeeded} 
                    required 
                    name="name" 
                    placeholder="Name" 
                    className="contactSectionName" 
                    type="text" 
                />
                <input 
                    disabled={state.submitting || state.succeeded} 
                    required 
                    name="email" 
                    placeholder="Email" 
                    className="contactSectionEmail" 
                    type="email" 
                />
                <textarea 
                    disabled={state.submitting || state.succeeded} 
                    required 
                    name="message" 
                    placeholder="Message" 
                    className="contactSectionMessage" 
                    style={{ resize: 'none' }} 
                />
                <button 
                    disabled={state.submitting || state.succeeded} 
                    type="submit" 
                    className="sendButton"
                >
                    {buttonText}
                </button>
            </div>
        </form>
    );
}

export default Contact;
