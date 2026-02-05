import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Contact(){
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 text-white">
            <div className="flex flex-col gap-4 w-full justify-center items-center max-w-lg mx-auto">
                <h2 className="text-white text-2xl">Get in touch</h2>
                <Input required name="name" type='text' placeholder="Name"/>
                <Input required name="email" type='email' placeholder="Email"/>
                <Textarea required name="message" placeholder="Message"/>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default Contact;
