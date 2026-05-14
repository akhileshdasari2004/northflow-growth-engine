"use client";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    label: "New York",
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    src: "https://randomuser.me/api/portraits/men/44.jpg",
    label: "Los Angeles",
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    src: "https://randomuser.me/api/portraits/women/65.jpg",
    label: "Chicago",
  },
  {
    lat: 29.7604,
    lng: -95.3698,
    src: "https://randomuser.me/api/portraits/men/22.jpg",
    label: "Houston",
  },
  {
    lat: 33.4484,
    lng: -112.074,
    src: "https://randomuser.me/api/portraits/women/33.jpg",
    label: "Phoenix",
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    src: "https://randomuser.me/api/portraits/men/55.jpg",
    label: "Denver",
  },
  {
    lat: 47.6062,
    lng: -122.3321,
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    label: "Seattle",
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    src: "https://randomuser.me/api/portraits/men/77.jpg",
    label: "San Francisco",
  },
  {
    lat: 32.7767,
    lng: -96.797,
    src: "https://randomuser.me/api/portraits/women/28.jpg",
    label: "Dallas",
  },
  {
    lat: 25.7617,
    lng: -80.1918,
    src: "https://randomuser.me/api/portraits/men/11.jpg",
    label: "Miami",
  },
  {
    lat: 38.9072,
    lng: -77.0369,
    src: "https://randomuser.me/api/portraits/women/55.jpg",
    label: "Washington DC",
  },
  {
    lat: 36.1627,
    lng: -86.7816,
    src: "https://randomuser.me/api/portraits/men/88.jpg",
    label: "Nashville",
  },
];

export default function Globe3DDemo() {
  return (
    <Globe3D
      markers={sampleMarkers}
      config={{
        atmosphereColor: "#4da6ff",
        atmosphereIntensity: 20,
        bumpScale: 5,
        autoRotateSpeed: 0.3,
      }}
      onMarkerClick={(marker) => {
        console.log("Clicked marker:", marker.label);
      }}
      onMarkerHover={(marker) => {
        if (marker) {
          console.log("Hovering:", marker.label);
        }
      }}
    />
  );
}
