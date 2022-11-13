import axios from "axios";
const Remove = ({ id, getData }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`).then(() => {
      getData();
    });
  };
  return <div onClick={() => handleDelete(id)}>x</div>;
};
export { Remove };
