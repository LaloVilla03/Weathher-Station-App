import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function Map() {
    return (
        <MapContainer center={[19.248789, -103.697367]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[19.248789, -103.697367]}>
                <Popup>hola</Popup>
            </Marker>
        </MapContainer>
    )
}