import React, {useState} from 'react'
import { Heading, ContactMainContainer, Heading2, SocialsContainer, Text, LocationContainer, TextSmall, SocialsInner, CustomForm, CustomInput, Submit } from './styles'
import {client} from '../../client'
import {useNavigate} from 'react-router-dom'
const ContactPage = () => {
    const navigate = useNavigate()
    const formSubmit = () => {
        const ballot = {
            _type: 'form',
            clientname: name,
            email: email,
            topic: topic,
            message: message
        
          };
          
          if (!formSubmitted){
          client.create(ballot).then(
            setFormSubmitted(true)
          )
          
            .then(
              setTimeout(() => {
                navigate("/")
              }, 2000), 
              )
            }
            // .catch(((err) => Swal.fire({
            //   title: 'Error!',
            //   text: 'Something went wrong. Please try again later.',
            //   icon: 'error',
            //   confirmButtonText: 'Continue'
            //   })));
        };
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [message, setMessage] = useState('')
    const [formSubmitted,setFormSubmitted] = useState(false)
    
  return (
    <ContactMainContainer>

<Heading2
initial = {{opacity:0, y:10}}
whileInView = {{opacity:1, y:0}}
transition = {{duration:1}}
viewport = {{once: true}}

>Shall we get started?</Heading2>
<SocialsContainer>
<CustomForm>
<CustomInput placeholder='Name' name='name' id='name' required onChange ={(e) => setName(e.target.value)}/>
<CustomInput placeholder='Email' name='email' id='name' required onChange ={(e) => setEmail(e.target.value)}/>
<CustomInput placeholder='Topic' name='topic' id='topic' className={true} required onChange ={(e) => setTopic(e.target.value)}/>
<CustomInput placeholder='Message' name='message' id='message' className={true} required onChange ={(e) => setMessage(e.target.value)}/>
<Submit onClick={formSubmit}>Submit </Submit>
{formSubmitted && <TextSmall>Thank you for your submission!</TextSmall>}

</CustomForm>
<SocialsInner>
<Text>Riyadh, Saudi Arabia</Text>
<Text> Wonderlust Location Agency </Text>


        
        </SocialsInner>
</SocialsContainer>
    </ContactMainContainer>
  )
}

export default ContactPage