import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Home, Plus, Package, ListOrdered, CheckCircle, XCircle, FileText, MoreHorizontal } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="h-screen border-r shadow-sm">
      {/* Header */}
      <SidebarHeader className="p-4 border-b">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </SidebarHeader>

      {/* Main Content */}
      <SidebarContent className="flex flex-col gap-4 p-4">
        <SidebarGroup className="flex flex-col gap-3">
          <Button  className="w-full justify-start gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
          <Button className="w-full justify-start gap-2">
            <ListOrdered className="w-4 h-4" />
            See Orders
          </Button>
          <Button className="w-full justify-start gap-2">
            <Package className="w-4 h-4" />
            See Products
          </Button>
        </SidebarGroup>

        <SidebarGroup className="flex flex-col gap-3">
          <Button className="w-full justify-start gap-2">
            <CheckCircle className="w-4 h-4" />
            Completed Orders
          </Button>
          <Button className="w-full justify-start gap-2">
            <XCircle className="w-4 h-4" />
            Canceled Orders
          </Button>
        </SidebarGroup>

        <SidebarGroup className="flex flex-col gap-3">
          <Button className="w-full justify-start gap-2">
            <FileText className="w-4 h-4" />
            Logs
          </Button>
          <Button className="w-full justify-start gap-2">
            <MoreHorizontal className="w-4 h-4" />
            Others
          </Button>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t text-sm text-muted-foreground">
        &copy; 2025 Admin Panel
      </SidebarFooter>
    </Sidebar>
  );
}
