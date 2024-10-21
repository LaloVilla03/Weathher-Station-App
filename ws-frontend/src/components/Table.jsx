import { supabase } from '../supabaseClient.js';
import { useState, useEffect } from 'react';
import Map from './Map.jsx'


export default function Table() {

    const [datos, setDatos] = useState([]);

    //USAR useEffect PARA EVITAR TANTO RENDER CON useState
    useEffect(() => {

        async function request() {

            const { data, error } = await supabase
                .from('measurements')
                .select()
            setDatos(data);
        }
        request();

    }, []);


    return (
        <>
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>ID de estacion</th>
                            <th>Temperatura</th>
                            <th>Humedad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos && (
                            datos.map(i => (
                                <tr key={i.id}>
                                    <td>{i.station_id}</td>
                                    <td>{i.temperature}</td>
                                    <td>{i.humidity}</td>
                                </tr >
                            ))
                        )}
                    </tbody>
                </table>

            </div>

            <div >

                <Map />

            </div>

        </>

    )
}