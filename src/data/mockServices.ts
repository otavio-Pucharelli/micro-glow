import { Microservice } from "@/types/microservice";

export const mockServices: Microservice[] = [
  {
    id: '1',
    name: 'Auth Service',
    status: 'UP',
    lastCheck: new Date(Date.now() - 30000),
    description: 'Serviço de autenticação e autorização'
  },
  {
    id: '2',
    name: 'Payment Gateway',
    status: 'UP',
    lastCheck: new Date(Date.now() - 45000),
    description: 'Gateway de pagamentos'
  },
  {
    id: '3',
    name: 'User Management',
    status: 'DOWN',
    lastCheck: new Date(Date.now() - 120000),
    description: 'Gerenciamento de usuários'
  },
  {
    id: '4',
    name: 'Notification Service',
    status: 'UP',
    lastCheck: new Date(Date.now() - 15000),
    description: 'Serviço de notificações'
  },
  {
    id: '5',
    name: 'API Gateway',
    status: 'WARNING',
    lastCheck: new Date(Date.now() - 60000),
    description: 'Gateway principal da API'
  },
  {
    id: '6',
    name: 'Database Cluster',
    status: 'UP',
    lastCheck: new Date(Date.now() - 20000),
    description: 'Cluster principal do banco de dados'
  },
  {
    id: '7',
    name: 'File Storage',
    status: 'UP',
    lastCheck: new Date(Date.now() - 90000),
    description: 'Serviço de armazenamento de arquivos'
  },
  {
    id: '8',
    name: 'Analytics Engine',
    status: 'DOWN',
    lastCheck: new Date(Date.now() - 300000),
    description: 'Motor de analytics e relatórios'
  },
  {
    id: '9',
    name: 'Message Queue',
    status: 'UP',
    lastCheck: new Date(Date.now() - 10000),
    description: 'Fila de mensagens assíncronas'
  },
  {
    id: '10',
    name: 'Cache Layer',
    status: 'UNKNOWN',
    lastCheck: new Date(Date.now() - 600000),
    description: 'Camada de cache distribuído'
  },
  {
    id: '11',
    name: 'Load Balancer',
    status: 'UP',
    lastCheck: new Date(Date.now() - 25000),
    description: 'Balanceador de carga'
  },
  {
    id: '12',
    name: 'Monitoring Service',
    status: 'UP',
    lastCheck: new Date(Date.now() - 5000),
    description: 'Serviço de monitoramento'
  }
];