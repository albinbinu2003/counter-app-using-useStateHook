
import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button'
import './Header.css'


const Header = () => {

   
    const [count,setCount] = useState(0)
    
  


    const countUp =() =>
    {
        setCount (count+1)
    }

    const countDown =()=>
    {
        setCount(count-1)
    }
  return (
<div className='head1'>
    
        <h1>Counter App</h1>
        <Button className='bg-success' onClick={countUp}>+</Button>
        <Button className='bg-danger' onClick={countDown}>-</Button>
        <h3> Counter value = {count}</h3>

       </div>
    
  ) 
}

export default Header   