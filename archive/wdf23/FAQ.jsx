import React from 'react'
import './FAQ.css'

export default function FAQ() {
    return (
    	<div className='faq'>
    		<div className='faq-title'>FAQ</div>
            <div className='faq-container'>
                <QA
                    question={'1. Who can participate in WDF?'}
                    answer={'Any UCSB student (undergraduate or graduate) can participate in WDF! You will be required to register using a valid school (ucsb.edu) email address.'}
                />
                <QA
                    question={'2. Can I participate in a team?'}
                    answer={'Unfortunately, we are not accepting team submissions for WDF — if you’re interested in designing in a team, look out for information regarding our spring designathon in the near future!'}
                />
                <QA
                    question={'3. Where is WDF taking place?'}
                    answer={'WDF is conducted asynchronously and remotely — you are expected to work on submissions on your own time. However, we will be hosting workshops and a designated in-person work time where you can get help and feedback from SB Creative Lab members.'}
                />
                <QA
                    question={'4. Can I create (multiple) submissions for both prompts?'}
                    answer={'Yes! Please note, however, that you will only be judged for one submission. If you create multiple, lease only submit the piece you are most proud of that you’d like to be evaluated for; if you submit the project submission form multiple times only the first submission will be judged.'}
                />
                <QA
                    question={'5. Can I still participate if I didn’t fill out the registration form?'}
                    answer={'Please fill out the registration form! This will allow you to have access to all the important information, as well as the actual project submission form where you will be sending us your final product.'}
                />
            </div>
    	</div>
    )
}

function QA({ question, answer }) {
    return (
        <div>
            <div className='faq-question'>{question}</div>
            <div className='faq-answer'>{answer}</div>
        </div>
    )
}