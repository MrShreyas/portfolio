import emailjs from '@emailjs/browser';

function Footer() {

    const sendMail = ()=>{
      const mailData = {
        name : document.getElementById('name').value, 
        email : document.getElementById('email').value, 
        message : document.getElementById('message').value
      } 
      console.log(mailData);
      const serviceId = "service_egjixuz";
      const templateId = "template_ys84inc";
      const publicKey = "0zxFCcxTKeLVEDG4T";

      emailjs.send(serviceId,templateId ,mailData,publicKey)
       .then((response) => {
        console.log("SUCCESS!", response)
        alert("Message Sent");
        
       })
       .catch((err) => {console.log(err)});
    }
    
    return(
        <div className="flex flex-col items-center px-16 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pt-12 mb-5 w-full border-t-2 border-solid border-t-black border-t-opacity-20 max-w-[1080px] max-md:max-w-full">
          <div className="mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <div className="text-3xl font-semibold leading-10 text-cyan-500 whitespace-nowrap">
                    Let’s work together
                  </div>
                  <div className="mt-10 text-lg leading-7 text-teal-700">
                    This is a template Figma file, turned into code using Anima.
                    Learn more at AnimaApp.com This is a template Figma file,
                    turned into code using Anima. Learn more at AnimaApp.com
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b48a472060fbfd2eb633f7d67972dab5e47f2a6ba9670a7c936fac0f3ef0e29?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&"
                    className="mt-16 max-w-full aspect-[6.25] w-[232px] max-md:mt-10"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-lg leading-7 text-teal-700 max-md:mt-10 max-md:max-w-full">
                  <input id="name" type="text" className="bg-colour5  focus:outline-none focus:border-colour1 focus:ring-colour1 focus:ring-1 focus:border-[1px] justify-center placeholder:text-colour1 px-8 py-5 whitespace-nowrap bg-zinc-100 max-md:px-5 max-md:max-w-full" placeholder="Name" ></input>
                  <input id="email" type="text" className="mt-4 bg-colour5  focus:outline-none focus:border-colour1 focus:ring-colour1 focus:ring-1 focus:border-[1px] justify-center placeholder:text-colour1 px-8 py-5 whitespace-nowrap bg-zinc-100 max-md:px-5 max-md:max-w-full" placeholder="Email" ></input>
                  <textarea id="message" className="mt-4 bg-colour5  focus:outline-none focus:border-colour1 focus:ring-colour1 focus:ring-1 focus:border-[1px] justify-center placeholder:text-colour1 px-8 py-5 whitespace-nowrap bg-zinc-100 max-md:px-5 max-md:max-w-full" placeholder="Type your message here" ></textarea>
                  <button onClick={sendMail} className="justify-center bg-colour3 text-colour6 items-center px-16 py-6 mt-10 max-w-full text-xl font-semibold leading-8 text-center text-white whitespace-nowrap bg-cyan-500 w-[235px] max-md:px-5">
                    Submit
                </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;