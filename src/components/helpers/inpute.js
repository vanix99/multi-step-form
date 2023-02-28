export default function custome_inpute(props){


    const inpute_css = {padding: '12px 12px', borderRadius: '6px', marginTop:'6px', gridColumn:'1/3', gridRow:'2/3'}

    const valide_inpute = {...inpute_css, ...{border:'1px solid var(--gray)'}}
    const invalid_inpute = {...inpute_css, ...{border:'1px solid red'}}
    

    return (


        <div style={{display:'grid', gridTemplateColumns:'auto max-content'}}>
            <label className="label" htmlFor={props.label} style={{fontSize: '14px', color:'var(--marine-blue)'}}>{props.label}</label>
            
            <input 
                onClick={props.inpute} 
                onChange={props.handle} 
                id={props.label} 
                style={props.error ? invalid_inpute : valide_inpute} 
                value={props.value} 
                placeholder={props.placeholder} />

            {props.error ? <span className="span" style={{fontSize:'13px', color:'red'}}>
                {props.value.length === 0 ? 'The field is required' : `Invalide ${props.label}`}
            </span> : ''}

        </div>
    )
}