import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function EditPage() {
  const {reset} = useForm();
  const {id} = useParams();
useEffect(() => {
  const getDetail = async () => {
      try {
        const {data} =await axios.get("http://localhost:3000/movies/"+id);
        reset(data);
      }catch (error){
        console.log(error);
      }
    };
    getDetail();
}, [id]);
  

  return (
    <div>
      <h1>Cập nhật</h1>
    </div>
  );
}

export default EditPage;
