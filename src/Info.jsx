import React from 'react'

export default function Info({country,show}) {
    return(
        <div onClick = {show}>
            <img src={country.flag} alt="" />
            <h1>{country.name}</h1>
            <p>{country.nativeName}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.capital}</p>
            <p>{country.topleveldomain}</p>
            <p>{country.currencies}</p>
            <p>{country.borders}</p>
        </div>
    )
};
