import { useGoogleMaps } from "react-hook-google-maps";

const Maps = (mapDetails: any) => {
    const userDetails = mapDetails.mapDetails.queryResults.queryResults[0];
    const geoLat = userDetails.address.geo.lat;
    const geoLng = userDetails.address.geo.lng;

    const { ref } = useGoogleMaps(
        "AIzaSyDotwU2adiNnkpHLGk5Rf9HE0qBUj9YReQ",
        {
            center: { lat: Math.round(geoLat), lng: Math.round(geoLng) },
            zoom: 3,
        },
    );

    return <div ref={ref} style={{ width: 800, height: 300 }} />;
}

export default Maps;