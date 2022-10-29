import React, {useRef} from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typing";

type Props = {
  contact:PageInfo
}
export default function Contact({contact}:Props) {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const subject = subjectRef.current?.value
    const message = messageRef.current?.value
    if(!name?.length || !email?.length || !subject?.length || !message?.length){
      alert("Please complete the form before submitted")
      return
    }
    window.location.href = `mailto:vincenthambaya@gmail.com?subject=${subject}&body=Hi, my name is ${name} Here is my message: ${message} (${email})`

    nameRef.current!.value = ""
    emailRef.current!.value = ""
    subjectRef.current!.value = ""
    messageRef.current!.value = ""
  }
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-20">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 md:space-y-10 pt-14 md:pt-0">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="decoration-[#6AF2F0]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 md:space-x-5">
            <PhoneIcon className="text-[#6AF2F0] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm md:text-xl">{contact.phoneNumber}</p>
          </div>
          <div className="flex items-center justify-center space-x-3 md:space-x-5">
            <MapPinIcon className="text-[#6AF2F0] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm md:text-xl">{contact.address}</p>
          </div>

          <div className="flex items-center justify-center space-x-3 md:space-x-5">
            <EnvelopeIcon className="text-[#6AF2F0] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-sm md:text-xl">{contact.email}</p>
          </div>
        </div>

        <form
          onSubmit={e => onSubmit(e)}
          className="flex flex-col space-y-5 w-[95%] md:w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-5 space-x-0 md:space-x-2">
            <input
              className="contactInput"
              placeholder="Name"
              type="text"
              name="name"
              ref={nameRef}
              
            />
            <input
              className="contactInput"
              placeholder="Email"
              type="text"
              name="email"
              ref={emailRef}
              
            />
          </div>
          <input
            className="contactInput"
            placeholder="What can i Help You"
            type="text"
            name="subject"
            ref={subjectRef}
            
          />
          <textarea
            className="contactInput min-h-[120px]"
            placeholder="Let me know more Details"
            name="message"
            ref={messageRef}
            
          />
          <button className="bg-[#6AF2F0] animate-pulse py-2 px-5 md:py-5 md:px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
