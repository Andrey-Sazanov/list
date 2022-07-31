import React,{useEffect} from 'react'

export default function Filter({country,setFilter,value,setValue}) {

    useEffect(()=>{
        if(value===''){
            setFilter(country);
            return;
        }
        const filtred = country.filter((country)=>country.region.includes(value))
        setFilter(filtred )
    },[value])


    return(
        <div className='filter'>
            <h1>Filter by region :</h1>
            <button onClick={()=>setValue('')}>ALL</button>
            <button onClick={()=>setValue('Africa')}>Africa</button>
            <button onClick={()=>setValue('America')}>America </button>
            <button onClick={()=>setValue('Asia')}>Asia</button>
            <button onClick={()=>setValue('Europe')}>Europe</button>
            <button onClick={()=>setValue('Oceania')}>Oceania</button>
        </div>
    )
};
