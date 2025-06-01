import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AddProductForm } from "@/components/SidebarComponents/AddProductForm";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <SidebarProvider className="w-full h-full flex">
        <AppSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <AddProductForm />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
