import React  from "react"
import './faq.css'
import num1 from './imgs/num1.svg'
import num2 from './imgs/num2.svg'
import num3 from './imgs/num3.svg'
import num4 from './imgs/num4.svg'
import num5 from './imgs/num5.svg'
import plane from './imgs/faq-plane.svg'

export default function FAQ() {
    return(
        <div className="faq-background">
            <h1>FAQ</h1>
            <div className="faqs">
                {/* <div className="faq-plane"> */}
                    <img className="faq-plane"src={plane}></img>
                {/* </div>  */}
                <div className="faq-container">
                    <img src={num1}></img>
                    <div>
                        <p className="faq-bold">
                            Who can participate?
                        </p>
                        <p className="faq-normal">
                            All UCSB students can participate, regardless of major! This challenge is limited to UCSB students only. 
                        </p>
                    </div>
                </div>
                <div className="faq-container">
                    <img src={num2}></img>
                    <div>
                        <p className="faq-bold">
                        Do I need to have any graphic design skills?
                        </p>
                        <p className="faq-normal">
                        Nope! All levels of graphic design experience are encouraged to participate! SBCL will be hosting events throughout the challenge for students to learn more about graphic design as they go!
                        </p>
                    </div>
                </div>
                <div className="faq-container">
                    <img src={num4}></img>
                    <div>
                        <p className="faq-bold">
                            How many stickers am I allowed to submit?
                        </p>
                        <p className="faq-normal">
                            Please submit one (1) sticker per person.
                        </p>
                    </div>
                </div>
                <div className="faq-container">
                    <img src={num5}></img>
                    <div>
                        <p className="faq-bold">
                            How will the sticker be judged?
                        </p>
                        <p className="faq-normal">
                            Please refer to our rubric listed above!
                        </p>
                    </div>
                </div>
                <div className="faq-container">
                    <img src={num3}></img>
                    <div>
                        <p className="faq-bold">
                            Will I have the chance to ask for feedback or advice? 
                        </p>
                        <p className="faq-normal">
                            Yes! Our <a className="faq-semibold-link" href='https://discord.com/invite/fc8Rrn7VdV' target='_blank'>Discord channel</a> will be open for participants to chat with each other and with the SBCL team. We will also be hosting <a className="faq-semibold" href="https://sbcreativelab.notion.site/c6e99f7316ad4958b65095937bcb8342?v=46b0ff1789654ab096f8bc12b9bd71e5" target="_blank">Studio Hours</a> every week in the Library to get feedback from the SBCL team in-person!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}