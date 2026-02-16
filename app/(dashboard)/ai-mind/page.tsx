import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

export default function AIMindPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Tâm Trí AI"
        description="Xem suy nghĩ và quá trình ra quyết định của AI"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Sắp Ra Mắt</CardTitle>
                  <CardDescription>
                    Tính năng trực quan hóa tâm trí AI đang được phát triển
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Đây sẽ là nơi bạn có thể thấy suy nghĩ nội tâm, lý luận và trí nhớ của AI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
