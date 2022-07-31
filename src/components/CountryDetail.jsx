import React from 'react'
export default function CountryDetail({country}) {
    return(
        <div className='detail'>
            <img src={country.flag} alt = '300px' width='300px' />
            <h1>{country.name}</h1>
            <p>
                <strong>Population:</strong>{country.population}
                <br />
                <strong>Region:</strong>{country.region}
                <br />
                <strong>Capital:</strong>{country.capital}
            </p>
        </div>
    )
};
