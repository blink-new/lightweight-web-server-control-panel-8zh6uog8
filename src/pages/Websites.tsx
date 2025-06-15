
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AddWebsiteModal } from '@/components/AddWebsiteModal';
import { Globe, Settings, Trash2, PlusCircle, Server, ExternalLink } from 'lucide-react';

interface Website {
  id: string;
  domain: string;
  phpVersion: string;
  status: 'online' | 'offline' | 'pending';
  createdAt: string;
  files?: FileList;
}

const initialWebsites: Website[] = [
  {
    id: '1',
    domain: 'mycoolsite.com',
    phpVersion: '8.1',
    status: 'online',
    createdAt: '2023-10-26',
  },
  {
    id: '2',
    domain: 'anotherproject.dev',
    phpVersion: '8.2',
    status: 'offline',
    createdAt: '2023-11-15',
  },
  {
    id: '3',
    domain: 'test-shop.store',
    phpVersion: '7.4',
    status: 'pending',
    createdAt: '2024-01-20',
  },
];

export const Websites: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [websites, setWebsites] = useState<Website[]>(initialWebsites);

  const handleAddWebsite = (details: { domain: string; phpVersion: string; files?: FileList }) => {
    const newWebsite: Website = {
      id: (websites.length + 1).toString(),
      ...details,
      status: 'pending', // New websites start as pending
      createdAt: new Date().toISOString().split('T')[0],
    };
    setWebsites([newWebsite, ...websites]);
  };

  const handleDeleteWebsite = (id: string) => {
    // In a real app, you would confirm before deleting
    setWebsites(websites.filter(site => site.id !== id));
    // Here you would also call an API to delete the website from the server
  };

  const getStatusColor = (status: Website['status']) => {
    if (status === 'online') return 'bg-green-500';
    if (status === 'offline') return 'bg-red-500';
    return 'bg-yellow-500'; // pending
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Websites</h1>
        <Button onClick={() => setIsModalOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <PlusCircle className="mr-2 h-5 w-5" /> Add New Website
        </Button>
      </div>

      {websites.length === 0 ? (
        <Card className="text-center py-12 bg-card shadow-lg">
          <CardHeader>
            <Server className="mx-auto h-12 w-12 text-muted-foreground" />
            <CardTitle className="mt-4 text-2xl font-semibold text-foreground">No Websites Yet</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">
              Get started by adding your first website.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button onClick={() => setIsModalOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Your First Website
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site) => (
            <Card key={site.id} className="bg-card shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Globe className="w-8 h-8 text-primary mb-2" />
                  <span 
                    className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${getStatusColor(site.status)}`}
                  >
                    {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground truncate" title={site.domain}>{site.domain}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  PHP: {site.phpVersion} | Added: {site.createdAt}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Placeholder for more details or quick stats */}
                <p className="text-sm text-muted-foreground">
                  {site.files ? `${site.files.length} file(s) uploaded.` : 'No files uploaded yet.'}
                </p>
              </CardContent>
              <CardFooter className="border-t border-border pt-4 flex justify-end space-x-2">
                <Button variant="outline" size="sm" className="border-border hover:bg-muted">
                  <ExternalLink className="mr-1 h-4 w-4" /> Visit
                </Button>
                <Button variant="outline" size="sm" className="border-border hover:bg-muted">
                  <Settings className="mr-1 h-4 w-4" /> Manage
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteWebsite(site.id)} className="bg-red-600 hover:bg-red-700 text-white">
                  <Trash2 className="mr-1 h-4 w-4" /> Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <AddWebsiteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddWebsite={handleAddWebsite} 
      />
    </div>
  );
};
