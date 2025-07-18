import { MapPin, Info, Headphones, Phone } from "lucide-react";

export default function HeaderTop() {
  return (
    <div className="w-full bg-white border-b border-gray-200 text-sm lg:text-md">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-4 py-3">
        <div className="flex gap-6 items-center">
          <select className="border px-2 py-1 rounded">
            <option>Select Category</option>
            <option>Furniture</option>
            <option>Electronics</option>
            <option>Stationary</option>
            <option>Kitchen</option>
          </select>
          <a href="/track" className="flex items-center gap-1">
            <MapPin size={18} /> Track Order
          </a>
          <a href="/sell">Sell</a>
          <a href="/buy">Buy</a>
          <a href="/contact" className="flex items-center gap-1">
            <Info size={18} /> Need Help
          </a>
          <a href="/contact" className="flex items-center gap-1">
            <Headphones size={18} /> Support
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={18} />
          <span>+91-965-080-XXXX</span>
        </div>
      </div>
      <div className="hidden px-4 py-2 space-y-2">
        <div className="flex justify-between items-center">
          <select className="border px-2 py-1 rounded text-xs w-1/2">
            <option>Select Category</option>
            <option>Furniture</option>
            <option>Electronics</option>
            <option>Stationary</option>
            <option>Kitchen</option>
          </select>
          <div className="flex items-center gap-1 text-xs">
            <Phone size={16} />
            <span>+91-965-080-XXXX</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs">
          <a href="/track">Track</a>
          <a href="/sell">Sell</a>
          <a href="/buy">Buy</a>
          <a href="/contact">Help</a>
        </div>
      </div>
    </div>
  );
}
