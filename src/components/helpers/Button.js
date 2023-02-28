export default function custome_button({label, handleClick, on}){

    const span_css = {padding:'12px 20px', borderRadius:'8px', fontSize:'15px'}

    const on_span_css = {...span_css, ...{color:'var(--white)', backgroundColor: 'var(--marine-blue)'}}
    const off_span_css = {...span_css, ...{color:'var(--marine-blue)', backgroundColor: 'var(--white)'}}

    return (
        <span
            className="button"
            onClick={handleClick} style={on ? on_span_css : off_span_css}>
            {label}
        </span>
    )
}