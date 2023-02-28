import background_img from '../assets/bg-sidebar-desktop.svg'

export default function Aside({step_index, aside_data}){

    const circul_css = {
        borderRadius: '100%',
        boxSizing: 'border-box',
        width:'31px',
        height:'31px', 
        display: 'grid', 
        placeItems: 'center', 
        fontSize:'14px',
        userSelect: "none"
    }
    
    const active_circul_css = {
        ...circul_css, ...{backgroundColor: 'var(--light-blue)', color:'black'}
    }

    const off_circul_css = {
        ...circul_css, ...{ backgroundColor: 'transparent', color:'white', border: '1px solid white'}
    }

    const aside_items = aside_data.map((element, index) =>

        <div key={index} style={{display: 'flex',gap: '14px', width: '100%', paddingLeft: '28px'}}>
            <div style={ step_index === index ? active_circul_css : off_circul_css}>
                <span>{index + 1}</span>
            </div>

            <div style={{display: 'grid', gridColumn: '1', gap:'1px', fontSize: '13px'}}>
                <span style={{fontSize: '12px', color: 'var(--gray)'}}>STEP {index + 1}</span>
                <span style={{color: 'var(--magnolia)'}}>{element}</span>
            </div>
        </div>
    )

    return (
        <>
            <div className="steps-div" style={{ backgroundImage: `url(${background_img})` }}>
                <div style={{paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '30px'}}>
                    {aside_items}
                </div>
            </div>
        </>
    )
}