import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MyMap({ position, description }) {
  const positionArray = position.split(',').map(p => Number(p))

  return (
    <div>
      <MapContainer center={positionArray} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionArray}>
          <Popup>
            {description}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}