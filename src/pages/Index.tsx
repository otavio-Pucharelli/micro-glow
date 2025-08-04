import { useState, useEffect } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { DashboardStats } from "@/components/DashboardStats";
import { mockServices } from "@/data/mockServices";
import { Microservice } from "@/types/microservice";
import { RefreshCw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [services, setServices] = useState<Microservice[]>(mockServices);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simula uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simula mudanças aleatórias no status
    const updatedServices = services.map(service => {
      const random = Math.random();
      if (random < 0.1) { // 10% de chance de mudança
        const statuses = ['UP', 'DOWN', 'WARNING', 'UNKNOWN'] as const;
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        return {
          ...service,
          status: newStatus,
          lastCheck: new Date()
        };
      }
      return service;
    });
    
    setServices(updatedServices);
    setLastUpdate(new Date());
    setIsRefreshing(false);
  };

  // Auto-refresh a cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 30000);

    return () => clearInterval(interval);
  }, [services]);

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Monitoramento de Microsserviços
            </h1>
            <p className="text-text-secondary text-sm">
              Última atualização: {lastUpdate.toLocaleTimeString('pt-BR')}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              onClick={refreshData}
              disabled={isRefreshing}
              variant="outline"
              size="sm"
              className="bg-panel-bg border-panel-border hover:bg-secondary"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="bg-panel-bg border-panel-border hover:bg-secondary"
            >
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>

        {/* Stats */}
        <DashboardStats services={services} />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary text-xs">
            Dashboard de Monitoramento • {services.length} serviços sendo monitorados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;