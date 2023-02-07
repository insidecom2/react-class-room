import { useState } from 'react';
import { useEffect } from 'react';

const useFetchTable = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const data = await fetch('https://randomuser.me/api/?results=1000')
            .then((response) => response.json())
            .then((data) => data.results);

        const dataFinal = await data.map((data) => {
            return {
                name: `${data.name.first} ${data.name.last}`,
                email: data.email,
                gender: data.gender,
                key: data.login.uuid
            }
        })
        setTableData(dataFinal)
    }

    return {
        tableData,
        fetchApi
    }
}

export default useFetchTable;