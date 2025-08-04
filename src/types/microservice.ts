export type ServiceStatus = 'UP' | 'DOWN' | 'WARNING' | 'UNKNOWN';

export interface Microservice {
  id: string;
  name: string;
  status: ServiceStatus;
  lastCheck: Date;
  url?: string;
  description?: string;
}