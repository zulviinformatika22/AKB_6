import React from 'react';
import { 
  Globe, 
  Heart, 
  Gamepad2, 
  PlaneTakeoff, 
  Camera, 
  Star, 
  MessageCircle, 
  Shield, 
  Sun, 
  Bell 
} from 'lucide-react';

export default function IconScreen() {
  const icons = [
    { Icon: Globe, label: 'Globe', color: 'text-blue-500' },
    { Icon: Heart, label: 'Heart', color: 'text-pink-500' },
    { Icon: Gamepad2, label: 'Gamepad', color: 'text-green-500' },
    { Icon: PlaneTakeoff, label: 'Plane', color: 'text-orange-500' },
    { Icon: Camera, label: 'Camera', color: 'text-purple-500' },
    { Icon: Star, label: 'Star', color: 'text-yellow-500' },
    { Icon: MessageCircle, label: 'Message', color: 'text-green-600' },
    { Icon: Shield, label: 'Shield', color: 'text-red-500' },
    { Icon: Sun, label: 'Sun', color: 'text-pink-400' },
    { Icon: Bell, label: 'Bell', color: 'text-cyan-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Greeting Text */}
      <h1 className="text-4xl font-semibold text-gray-700 mb-8">
        Halo Dzulviana
      </h1>

      {/* Icons Row */}
      <div className="flex flex-wrap gap-6 justify-center">
        {icons.map(({ Icon, color, label }, index) => (
          <div key={index} className="flex flex-col items-center group">
            
              className={`w-10 h-10 ${color} group-hover:scale-125 group-hover:animate-bounce transition-transform duration-300 cursor-pointer`} 
            
            <span className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 mt-2 transition-opacity duration-300">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
