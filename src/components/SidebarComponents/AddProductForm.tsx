"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isHotSale, setIsHotSale] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discountAmount, setDiscountAmount] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSKU] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;
        resolve(result);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const base64Image = await convertToBase64(image as File);

    const productData = {
      name,
      description,
      price: parseFloat(price),
      category,
      hotSale: isHotSale,
      discount: hasDiscount ? parseFloat(discountAmount) : 0,
      stock: parseInt(stock),
      sku,
      status,
      image: base64Image,
    };

    console.log("Submitted Product Data:", productData);
  };

  return (
    <div className="h-full overflow-auto px-5">
      <Card className="mt-8 border border-black">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-black"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border border-black"
              />
            </div>

            <div>
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="border border-black"
              />
            </div>

            <div className="w-full">
              <Label className="w-full" htmlFor="category">
                Category
              </Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger className="w-full border border-black">
                  {" "}
                  {/* Ensures full width */}
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {" "}
                  {/* Optional, only if needed for dropdown */}
                  <SelectItem value="men">Men's Clothing</SelectItem>
                  <SelectItem value="women">Women's Clothing</SelectItem>
                  <SelectItem value="children">Children's Clothing</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="hotsale"
                checked={isHotSale}
                onCheckedChange={(val) => setIsHotSale(!!val)}
              />
              <Label htmlFor="hotsale">Hot Sale</Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="discount"
                checked={hasDiscount}
                onCheckedChange={(val) => setHasDiscount(!!val)}
              />
              <Label htmlFor="discount">Discount Available?</Label>
            </div>

            {hasDiscount && (
              <div>
                <Label htmlFor="discountAmount">Discount Amount (%)</Label>
                <Input
                  id="discountAmount"
                  type="number"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  min="0"
                  max="100"
                  className="border border-black"
                />
              </div>
            )}

            <div>
              <Label htmlFor="stock">Stock Quantity</Label>
              <Input
                id="stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                className="border border-black"
              />
            </div>

            <div>
              <Label htmlFor="sku">SKU</Label>
              <Input
                id="sku"
                value={sku}
                onChange={(e) => setSKU(e.target.value)}
                required
                className="border border-black"
              />
            </div>

            <div>
              <Label htmlFor="image">Product Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="border border-black"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus} required>
                <SelectTrigger className="border border-black w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
