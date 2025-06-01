"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AddProductForm } from "@/components/SidebarComponents/AddProductForm";
import Navbar from "@/components/Navbar/Navbar";
import { useSidebarStore } from "@/store/useSidebar";
import SeeProducts from "@/components/SidebarComponents/SeeProducts";
import { Logs } from "lucide-react";
import { CompletedOrders } from "@/components/SidebarComponents/CompletedOrders";
import { CanceledOrders } from "@/components/SidebarComponents/CanceledOrders";
import { PlacedOrders } from "@/components/SidebarComponents/PlacedOrders";
import { NewOrders } from "@/components/SidebarComponents/NewOrders";
export default function Home() {
  const { sidebarItem } = useSidebarStore();

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <SidebarProvider className="w-full h-full flex">
        <AppSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            {sidebarItem === "add-product" && <AddProductForm />}
            {sidebarItem === "new-orders" && <NewOrders />}
            {sidebarItem === "placed-orders" && <PlacedOrders />}
            {sidebarItem === "see-products" && <SeeProducts />}
            {sidebarItem === "completed-orders" && <CompletedOrders />}
            {sidebarItem === "canceled-orders" && <CanceledOrders />}
            {sidebarItem === "logs" && <Logs />}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
