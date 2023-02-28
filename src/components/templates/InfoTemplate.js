import CustomeInpute from "../helpers/inpute"
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useDispatch } from 'react-redux'
import { register } from '../../slices/userSlice'

const Template = forwardRef(({step, updatestep}, info_ref) =>
{
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const regex_email = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
  const regex_name = new RegExp('[a-zA-Z]{3,}')
  const regex_phone = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')

  useImperativeHandle(info_ref , () => ({
    next() {
      if(
        regex_name.test(name) &&
        regex_email.test(email) &&
        regex_phone.test(phone)
        
      ){
        dispatch(register({name:name, email:email, phone:phone}))
        updatestep(step + 1)
      }
      
      else alert('Invalide')
    }
  }))



    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <CustomeInpute value={name} handle={(event) => setName(event.target.value)}  label="Name" placeholder="Personal name"/>
                <CustomeInpute value={email} handle={(event) => setEmail(event.target.value)}  label="Email Address" placeholder="e.g exemple@ix.netcom.com"/>
                <CustomeInpute value={phone} handle={(event) => setPhone(event.target.value)} label="Phone Number" placeholder="e.g + 1 234 567 890"/>
            </div>
        </>
    )
})

export default Template