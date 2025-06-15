
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, HardDrive, MemoryStick, Server } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'CPU Usage',
      value: '25%', // Mock data
      icon: <Cpu className="w-6 h-6 text-primary" />,
      description: 'Current CPU load',
    },
    {
      title: 'RAM Usage',
      value: '4.2 GB / 16 GB', // Mock data
      icon: <MemoryStick className="w-6 h-6 text-primary" />,
      description: 'Memory currently in use',
    },
    {
      title: 'Disk Space',
      value: '120 GB / 500 GB', // Mock data
      icon: <HardDrive className="w-6 h-6 text-primary" />,
      description: 'Available disk storage',
    },
    {
      title: 'Websites Online',
      value: '3', // Mock data
      icon: <Server className="w-6 h-6 text-primary" />,
      description: 'Number of active websites',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground pt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for quick actions or other dashboard widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2 px-4 rounded-md transition-colors duration-300 mb-3">
              Add New Website
            </button>
            <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium py-2 px-4 rounded-md transition-colors duration-300">
              Manage Backups
            </button>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">System Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">System activity will appear here. (Coming soon)</p>
            <div className="mt-4 h-32 bg-muted/50 rounded-md p-2 overflow-y-auto">
              <p className="text-xs text-muted-foreground">[INFO] Server started successfully.</p>
              <p className="text-xs text-muted-foreground">[WARN] Disk space nearing capacity.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
