import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Phân Tích"
        description="Xem thống kê sử dụng và chỉ số hiệu suất"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Sắp Ra Mắt</CardTitle>
                  <CardDescription>
                    Dashboard phân tích đang được phát triển
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Đây sẽ là nơi bạn có thể theo dõi sử dụng token, chi phí và chỉ số hiệu suất.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
