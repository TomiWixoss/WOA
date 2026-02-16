"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Save, ExternalLink, Info } from "lucide-react";
import { toast } from "sonner";

interface ApiKeyFormProps {
  apiKey: string;
  onSave: (key: string) => void;
}

export function ApiKeyForm({ apiKey, onSave }: ApiKeyFormProps) {
  const [key, setKey] = useState(apiKey);

  const handleSave = () => {
    if (!key.trim()) {
      toast.error("Vui lòng nhập API key");
      return;
    }
    onSave(key.trim());
    toast.success("Đã lưu API key");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cấu Hình API</CardTitle>
        <CardDescription>
          Cấu hình Nvidia API key để sử dụng với tất cả agents
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            Lấy API key miễn phí tại{" "}
            <a
              href="https://build.nvidia.com/settings/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium underline"
            >
              Nvidia NIM
              <ExternalLink className="h-3 w-3" />
            </a>
          </AlertDescription>
        </Alert>

        <div className="space-y-2">
          <Label htmlFor="apiKey">Nvidia API Key</Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="nvapi-..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        <div className="rounded-md bg-muted p-3 text-sm">
          <p className="font-medium mb-1">Thông tin:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Provider: Nvidia NIM</li>
            <li>Model: Step 3.5 Flash</li>
            <li>Max Tokens: 16,384</li>
          </ul>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="mr-2 h-4 w-4" />
          Lưu API Key
        </Button>
      </CardContent>
    </Card>
  );
}
