
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UploadCloud } from 'lucide-react';

interface AddWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWebsite: (details: { domain: string; phpVersion: string; files?: FileList }) => void;
}

export const AddWebsiteModal: React.FC<AddWebsiteModalProps> = ({ isOpen, onClose, onAddWebsite }) => {
  const [domain, setDomain] = React.useState('');
  const [phpVersion, setPhpVersion] = React.useState('8.2');
  const [files, setFiles] = React.useState<FileList | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (domain) {
      onAddWebsite({ domain, phpVersion, files: files || undefined });
      setDomain('');
      setPhpVersion('8.2');
      setFiles(null);
      if(fileInputRef.current) fileInputRef.current.value = ''; // Reset file input
      onClose();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-foreground">Add New Website</DialogTitle>
          <DialogDescription>
            Enter the details for your new website.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="domain" className="text-right text-muted-foreground">
              Domain
            </Label>
            <Input 
              id="domain" 
              value={domain} 
              onChange={(e) => setDomain(e.target.value)} 
              className="col-span-3 bg-input text-foreground border-border"
              placeholder="example.com"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phpVersion" className="text-right text-muted-foreground">
              PHP Version
            </Label>
            <Select value={phpVersion} onValueChange={setPhpVersion}>
              <SelectTrigger className="col-span-3 bg-input text-foreground border-border">
                <SelectValue placeholder="Select PHP Version" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8.3">PHP 8.3</SelectItem>
                <SelectItem value="8.2">PHP 8.2</SelectItem>
                <SelectItem value="8.1">PHP 8.1</SelectItem>
                <SelectItem value="8.0">PHP 8.0</SelectItem>
                <SelectItem value="7.4">PHP 7.4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right text-muted-foreground">
              Website Files
            </Label>
            <div className="col-span-3">
              <Button variant="outline" className="w-full border-border hover:bg-muted" onClick={triggerFileInput}>
                <UploadCloud className="mr-2 h-4 w-4" /> 
                {files ? `${files.length} file(s) selected` : 'Upload Files (Optional)'}
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                multiple 
                className="hidden" 
                accept=".zip,.tar.gz,.html,.php,image/*,text/*"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Upload a ZIP archive or individual files.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-border hover:bg-muted">Cancel</Button>
          <Button onClick={handleSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90">Add Website</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
