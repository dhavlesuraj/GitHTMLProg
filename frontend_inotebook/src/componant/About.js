import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Alert from './Alert';

const About = () => {
    const a=useContext(noteContext);
  return (
    <div>
      This is About {a.name} and he is in {a.class}.
    </div>
  )
}

export default About
