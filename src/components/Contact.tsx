import { useForm } from "@formspree/react";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
        <form onSubmit={handleSubmit} className="p-4 text-white">
            <div className="flex flex-col gap-4 w-full justify-center items-center max-w-lg mx-auto">
                <h2 className="text-white text-2xl">Get in touch</h2>
                <Input disabled={state.submitting || state.succeeded} required name="name" type='text' placeholder="Name"/>
                <Input disabled={state.submitting || state.succeeded} required name="email" type='email' placeholder="Email"/>
                <Textarea disabled={state.submitting || state.succeeded} required name="message" placeholder="Message"/>
                <Button variant="secondary" disabled={state.submitting || state.succeeded} type="submit">
                    {buttonText}
                </Button>
            </div>
        </form>
    );
}

export default Contact;
