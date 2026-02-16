import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export default function PlaygroundPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Playground"
        description="Interactive AI world playground"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <PlayCircle className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    The playground feature is under development
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This will be where you can interact with AI in a text-based world environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
