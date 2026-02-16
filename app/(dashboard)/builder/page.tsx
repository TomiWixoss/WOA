import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer } from "lucide-react";

export default function BuilderPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="World Builder"
        description="Create and customize your AI world"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Hammer className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    The world builder feature is under development
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This will be where you can design rooms, add objects, and configure world rules.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
