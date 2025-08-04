import { Card } from "@/components/ui/card";
import { Microservice } from "@/types/microservice";
import { Activity, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface DashboardStatsProps {
  services: Microservice[];
}

export function DashboardStats({ services }: DashboardStatsProps) {
  const stats = {
    total: services.length,
    up: services.filter(s => s.status === 'UP').length,
    down: services.filter(s => s.status === 'DOWN').length,
    warning: services.filter(s => s.status === 'WARNING').length,
    unknown: services.filter(s => s.status === 'UNKNOWN').length
  };

  const uptime = ((stats.up / stats.total) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <Card className="bg-panel-bg border-panel-border p-4">
        <div className="flex items-center gap-3">
          <Activity className="h-5 w-5 text-primary" />
          <div>
            <p className="text-text-secondary text-xs font-medium">Total</p>
            <p className="text-text-primary text-lg font-bold">{stats.total}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-panel-bg border-panel-border p-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-service-up" />
          <div>
            <p className="text-text-secondary text-xs font-medium">Online</p>
            <p className="text-service-up text-lg font-bold">{stats.up}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-panel-bg border-panel-border p-4">
        <div className="flex items-center gap-3">
          <XCircle className="h-5 w-5 text-service-down" />
          <div>
            <p className="text-text-secondary text-xs font-medium">Offline</p>
            <p className="text-service-down text-lg font-bold">{stats.down}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-panel-bg border-panel-border p-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-service-warning" />
          <div>
            <p className="text-text-secondary text-xs font-medium">Alertas</p>
            <p className="text-service-warning text-lg font-bold">{stats.warning + stats.unknown}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-panel-bg border-panel-border p-4">
        <div className="flex items-center gap-3">
          <Activity className="h-5 w-5 text-primary" />
          <div>
            <p className="text-text-secondary text-xs font-medium">Uptime</p>
            <p className="text-text-primary text-lg font-bold">{uptime}%</p>
          </div>
        </div>
      </Card>
    </div>
  );
}