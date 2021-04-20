import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup, Map, useMapEvents } from 'react-leaflet'
import './App.css'
import { map } from 'leaflet'

const MapPage = () => {

  const API_KEY = 'ec5f933788ec2e550fc16821c27da3f6'
  const [lng, setLng] = useState(20)
  const [lat, setLat] = useState(30)
  const [position, setPosition] = useState([lng, lat])



  useEffect(() => {
    
  }, [position])

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
        console.log(position)
      },
      locationfound(e) {
        setPosition({...position, lng : parseInt(lng), lat : parseInt(lat)})
        console.log(position)
        map.flyTo(position, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  const changePosition = (e) => {
    e.preventDefault()

    // const map = useMapEvents({
    //   locationfound(){
    //     setPosition({lat, lng})
    //     map.flyTo(position, map.getZoom())

    //   }
    // })
  }





  return(
    <>
      <form onSubmit={(e) => changePosition(e)}>
      <input type='number' onChange={(e) => setLng(e.target.value)} />
      <input type='number' onChange={(e) => setLat(e.target.value)} />
      <button>
        New position
      </button>
      </form>
    <div>
    <MapContainer
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
</>
  )

  
}

export default MapPage