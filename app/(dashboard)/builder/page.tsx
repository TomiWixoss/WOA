import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer } from "lucide-react";

export default function BuilderPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Xây Dựng Thế Giới"
        description="Tạo và tùy chỉnh thế giới AI của bạn"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Hammer className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Sắp Ra Mắt</CardTitle>
                  <CardDescription>
                    Tính năng xây dựng thế giới đang được phát triển
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Đây sẽ là nơi bạn có thể thiết kế phòng, thêm vật phẩm và cấu hình quy tắc thế giới.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
