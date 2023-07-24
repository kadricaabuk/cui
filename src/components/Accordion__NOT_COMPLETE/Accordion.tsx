import React from 'react'

// TODO: NOT COMPLETE

interface AccordionProps {
    className?: string;
    buttonId?: string;
}

const Accordion = ({ className = "", buttonId = "id" }: AccordionProps) => {
    return (
        <div className={`CUI_Accordion ${className}`} id={`${buttonId}`}>
            <div className="CUI_AccordionItem">
                <h2 className="CUI_AccordionItem">
                    <button className="CUI_AccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent={`#${buttonId}`}>
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion