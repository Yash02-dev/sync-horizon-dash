interface DestinationCardProps {
  image: string;
  name: string;
  country: string;
  bookings: number;
  rating: number;
  delay?: number;
}

const DestinationCard = ({ image, name, country, bookings, rating, delay = 0 }: DestinationCardProps) => {
  return (
    <div
      className="group rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-36 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground font-display">{name}</h3>
        <p className="text-sm text-muted-foreground">{country}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{bookings}</span> bookings
          </span>
          <span className="text-xs font-medium text-accent">★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
