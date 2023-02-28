import InfoTemplate from "./templates/InfoTemplate"
import PlanTemplate from "./templates/planTemplate"
import OnsTemplate from "./templates/onsTemplate"
import SummaryTemplate from "./templates/summaryTemplate"
import { forwardRef, useImperativeHandle, useRef } from "react";

const Main_step = forwardRef(({updatestep, data, index}, steps_ref) =>
{
    const info_ref = useRef()

    useImperativeHandle(steps_ref, () => ({
        next() {
            info_ref.current.next()
        },
    }));

    const Templates = [
        <InfoTemplate ref={info_ref} step={index} updatestep={updatestep}/>, 
        <PlanTemplate step={index} updatestep={updatestep}/>, 
        <OnsTemplate step={index} updatestep={updatestep}/>, 
        <SummaryTemplate step={index} updatestep={updatestep}/>
    ]

    return(
        <div style={{width: '450px', margin:'auto'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop:'30px', marginBottom: '30px'}}>
                <span style={{color:'var(--marine-blue)', fontSize:'28px'}}>{data && data.main_title}</span>
                <span style={{color:'var(--gray)', fontSize:'13px'}}>{data && data.description}</span>
            </div>
            <>
                {Templates[index]}
            </>
        </div>
    )
})

export default Main_step