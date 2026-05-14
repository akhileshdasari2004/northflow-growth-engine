"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className="w-full">
      <WorldMap
        dots={[
          {
            start: {
              lat: 40.7128,
              lng: -74.006,
            },
            end: {
              lat: 34.0522,
              lng: -118.2437,
            },
          },
          {
            start: { lat: 34.0522, lng: -118.2437 },
            end: { lat: 41.8781, lng: -87.6298 },
          },
          {
            start: { lat: 41.8781, lng: -87.6298 },
            end: { lat: 29.7604, lng: -95.3698 },
          },
          {
            start: { lat: 29.7604, lng: -95.3698 },
            end: { lat: 33.4484, lng: -112.074 },
          },
          {
            start: { lat: 33.4484, lng: -112.074 },
            end: { lat: 39.7392, lng: -104.9903 },
          },
          {
            start: { lat: 39.7392, lng: -104.9903 },
            end: { lat: 47.6062, lng: -122.3321 },
          },
          {
            start: { lat: 47.6062, lng: -122.3321 },
            end: { lat: 37.7749, lng: -122.4194 },
          },
          {
            start: { lat: 37.7749, lng: -122.4194 },
            end: { lat: 32.7767, lng: -96.797 },
          },
        ]}
      />
    </div>
  );
}
