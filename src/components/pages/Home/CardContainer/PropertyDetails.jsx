import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const properties = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const property = properties.find((p) => p.id === idInt);

  return (
    <div>
      <h1 className=" text-4xl text-center mt-10">Title: {property.title}</h1>
    </div>
  );
};

export default PropertyDetails;
