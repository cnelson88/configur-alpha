import { useEffect, useState } from 'react';
import { Table } from '../styles/table';

const DefaultData = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((response) => {
            setData(response);
        })
    }, [])

    const dataReturn = (data: any) => {
        return (
            <>
                <Table className='table table__default'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {data.map((item: any, index: any) => (
                    <tbody key={index} >
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    </tbody>
                    ))}
                </Table>
            </>
        )
    }

    return (
        <>
            {dataReturn(data)}
        </>
    )
};

export default DefaultData;