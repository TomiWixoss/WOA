import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export default function PlaygroundPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Sân Chơi"
        description="Sân chơi thế giới AI tương tác"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <PlayCircle className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Sắp Ra Mắt</CardTitle>
                  <CardDescription>
                    Tính năng sân chơi đang được phát triển
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Đây sẽ là nơi bạn có thể tương tác với AI trong môi trường thế giới dạng văn bản.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
