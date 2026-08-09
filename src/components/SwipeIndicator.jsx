import { ArrowRight } from "lucide-react";

export default function SwipeIndicator({ text = "Deslize para ver mais" }) {
  return (
    <div className="swipe-indicator">
      <span>{text}</span>
      <ArrowRight size={18} />
    </div>
  );
}