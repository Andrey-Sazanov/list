import React,{useState,useEffect} from 'react'
import Filter from './Filter'
import CountryDetail from './CountryDetail'
export default function List() {
    const[country,setCountry] = useState([])
    const [item,setItem]  = useState('')
    const [filter,setFilter] = useState([])
    const[value,setValue] = useState('')
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(json=>{
            setCountry(json)
            setFilter(json)
        }) 
    },[])

    

    return(
        <div className='list'>
            <Filter country = {country} setFilter = {setFilter} value = {value} setValue = {setValue} />
            <div className='search'><input type="text" placeholder='search for a country' onChange={(event)=>{setItem(event.target.value)}} /></div>
            {filter.filter((val)=>{
                if(item=='')
                    return val
                else if(val.name.toLowerCase().includes(item.toLowerCase()))
                    return val

            }).map((country)=>(
                <CountryDetail country={country} />
            ))}
        </div>
    )
};
