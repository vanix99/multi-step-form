// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Aside from './components/aside'
import MainStep from './components/main_step'
import data from './stepsData.json'
import CustomeButton from './components/helpers/Button';
import { useSelector } from 'react-redux'

function App() {


  const user = useSelector((state) => state.user)
  console.log(user)

  const steps_ref = useRef();

  const [step_index, update_step_index] = useState(0);

  const [current_step, update_current_step] = 
  useState(<MainStep ref={steps_ref} updatestep={update_step_index} data={data[step_index]} index={step_index}/>);
  
  const step_back = () => step_index && update_step_index(step_index - 1)

  useEffect(() => update_current_step(<MainStep ref={steps_ref} updatestep={update_step_index} data={data[step_index]} index={step_index}/>), [step_index]);

  const styles = {flex : "1", height:'100%', width:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}


  return (
    <div className="App">
      <div className="root-form">

        <Aside step_index={step_index}  aside_data={data.map(item => item.circule_title)}/>

        <div style={styles}>
          <div> {current_step} </div>

          <div style={{width: '400px', display:'flex', margin:'12px auto', cursor:'pointer', alignItems:'center', justifyContent:'space-between'}}>
            <CustomeButton label="Back" handleClick={step_back} on={false}/>
            <CustomeButton label="Next Step" handleClick={() => steps_ref.current.next()} on={true}/>
          </div>

        </div>

      </div>
    </div>
  );

}

export default App;
