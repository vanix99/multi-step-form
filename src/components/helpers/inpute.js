export default function custome_inpute(props){

    const inpute_css = {
        padding: '12px 12px', 
        borderRadius: '6px', 
        borderWidth: '1px', 
        marginTop:'6px', 
        borderColor:'var(--gray)',
        gridColumn:'1/3',
        gridRow:'2/3'
    }

    const inpute_click = () => document.getElementById(props.label).removeAttribute('required');
    

    return (
        <div style={{display:'grid', gridTemplateColumns:'auto max-content'}}>
            <label className="label" htmlFor={props.label} style={{fontSize: '14px', color:'var(--marine-blue)'}}>{props.label}</label>
            <input onClick={inpute_click} onChange={props.handle} id={props.label} style={inpute_css} value={props.value} type="text" placeholder={props.placeholder} />
            <span className="span" style={{fontSize:'13px', display:'none'}}>The field is required</span>
        </div>
    )
}