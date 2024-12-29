import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBusiness } from "@/hooks/tan-stack/useBuisnesses";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // הוספת ה-import של useNavigate

const NewBusiness = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const { mutate: createBusiness, isLoading } = useCreateBusiness();
  const navigate = useNavigate();  // הגדרת ה-navigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBusiness = { name, description, category, img };

    createBusiness(newBusiness, {
      onSuccess: (data) => {
        console.log(data.data._id);
        
        // אחרי שהעסק נוסף בהצלחה, נווט לדף העסק החדש
        navigate(`/business/${data.data._id}`);
      },
      onError: (error: Error) => {
        console.error("Error creating business", error);
      },
    });
  };

  return (
    <div className="max-w-md p-6 mx-auto text-gray-700 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Create a new business</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Business Name
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <Input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="img" className="block text-sm font-medium">
            Image URL
          </label>
          <Input
            id="img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Business"}
        </Button>
      </form>
    </div>
  );
};

export default NewBusiness;
