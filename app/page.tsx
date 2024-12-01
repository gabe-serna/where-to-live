import RoutingButton from "@/components/RoutingButton";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-5xl text-gray-50">Where to Live</h1>
      <p className="mb-4 text-gray-400">
        Find the perfect place in world to live based on your preferences.
      </p>
      <RoutingButton route="map">View Map</RoutingButton>
    </div>
  );
}
