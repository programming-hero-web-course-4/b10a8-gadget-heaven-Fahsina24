import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const details = data.find((gadget) => gadget.product_id == id);
  console.log(id, details);
  return <div>dxdgf</div>;
};

export default GadgetDetails;
