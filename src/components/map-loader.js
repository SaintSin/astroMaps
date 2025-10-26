export default async function initializeMap(
  lat,
  lng,
  zoom,
  mapId,
  markerTitle,
) {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return;

  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: zoom,
    streetViewControl: false,
    fullscreenControl: false,
    mapId: mapId,
  });

  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  new AdvancedMarkerElement({
    map: map,
    position: { lat, lng },
    title: markerTitle,
  });
}
