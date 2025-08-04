import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Server } from "lucide-react";
import { Microservice } from "@/types/microservice";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Microservice;
}

const statusConfig = {
  UP: {
    color: 'bg-service-up text-black',
    icon: '●',
    label: 'UP'
  },
  DOWN: {
    color: 'bg-service-down text-white',
    icon: '●',
    label: 'DOWN'
  },
  WARNING: {
    color: 'bg-service-warning text-black',
    icon: '●',
    label: 'WARNING'
  },
  UNKNOWN: {
    color: 'bg-service-unknown text-white',
    icon: '●',
    label: 'UNKNOWN'
  }
};

export function ServiceCard({ service }: ServiceCardProps) {
  const config = statusConfig[service.status];
  const timeAgo = new Date().getTime() - service.lastCheck.getTime();
  const minutesAgo = Math.floor(timeAgo / 60000);

  return (
    <Card className="bg-panel-bg border-panel-border hover:border-primary/50 transition-colors duration-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-text-primary text-sm">{service.name}</h3>
          </div>
          <Badge 
            className={cn(
              "text-xs font-bold px-2 py-1 rounded-sm",
              config.color
            )}
          >
            <span className="mr-1">{config.icon}</span>
            {config.label}
          </Badge>
        </div>
        
        <div className="space-y-2">
          {service.description && (
            <p className="text-text-secondary text-xs">{service.description}</p>
          )}
          
          <div className="flex items-center gap-1 text-text-secondary text-xs">
            <Clock className="h-3 w-3" />
            <span>
              {minutesAgo === 0 ? 'Agora mesmo' : `${minutesAgo}min atrás`}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}