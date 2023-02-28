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

  const [errors, setErrors] = useState({name:false, email:false, phone:false})

  const regex_email = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
  const regex_name = new RegExp('[a-zA-Z]{3,}')
  const regex_phone = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')

  useImperativeHandle(info_ref , () => ({
    next() {

      if(!regex_name.test(name)) setErrors({...errors, name:true})
      else if(!regex_email.test(email)) setErrors({...errors, email:true})
      else if(!regex_phone.test(phone)) setErrors({...errors, phone:true})

      else {
        dispatch(register({name:name, email:email, phone:phone}))
        updatestep(step + 1)
      }
      
    }
  }))



    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <CustomeInpute inpute={() => setErrors({...errors, name:false})} value={name} error={errors.name} handle={(event) => setName(event.target.value)}  label="Name" placeholder="Personal name"/>
                <CustomeInpute inpute={() => setErrors({...errors, email:false})} value={email} error={errors.email} handle={(event) => setEmail(event.target.value)}  label="Email Address" placeholder="e.g exemple@ix.netcom.com"/>
                <CustomeInpute inpute={() => setErrors({...errors, phone:false})} value={phone} error={errors.phone} handle={(event) => setPhone(event.target.value)} label="Phone Number" placeholder="e.g + 1 234 567 890"/>
            </div>
        </>
    )
})

export default Template