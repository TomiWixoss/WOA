import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

export default function AIMindPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="AI Mind"
        description="View AI thoughts and decision-making process"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    The AI mind visualization feature is under development
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This will be where you can see AI internal thoughts, reasoning, and memory.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
