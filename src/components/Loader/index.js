import React from 'react'
import {LoaderMainContainer, SpinningTriangle, Triangle, Line, Heading} from './styles'
import {triangle} from '../../assets'
const Loader = () => {
  return (
    <LoaderMainContainer
    initial = {{opacity:0}}
    animate = {{opacity:1}}
    transition = {{duration:4}}
    >
        <SpinningTriangle src={triangle} alt="triangle"/>

    </LoaderMainContainer>
  )
}

export default Loader