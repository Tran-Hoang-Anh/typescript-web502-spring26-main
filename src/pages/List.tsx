import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
type Movie ={
  id: number;
  title: string;
  poster: string;
  duration: number;
  category: string;
}


function ListPage() {

  const [movies, setMovies] = useState<Movie[]>([]);


  const handleDelete = async (id: number) => {
    try {
      if(confirm("co muon xoa khong")) {
        await axios.delete(`http://localhost:3000/movies/${id}`);
        setMovies(movies.filter((item) => item.id !== id));  
        toast.success("xoa thanh cong");
      }
    } catch (error) {}
      
    };
  useEffect(() =>{ 
    const getAll = async () => {
      try {
        const {data} =await axios.get("http://localhost:3000/movies");
        setMovies(data);
      }catch (error){
        console.log(error);
      }
    };
    getAll();
    
  },[]);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                title
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                poster
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                duration
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                category
              </th>
            </tr>
          </thead>

          <tbody>
            {movies.map((item) => (
              <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{item.id}</td>
              <td className="px-4 py-2 border border-gray-300">{item.title}</td>
              <td className="px-4 py-2 border border-gray-300">{item.poster}</td>
              <td className="px-4 py-2 border border-gray-300">{item.duration}</td>
              <td className="px-4 py-2 border border-gray-300">{item.category}</td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                    onClick={() => handleDelete(item.id)}
                    className="ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    <a href={`/edit/${item.id}`}>Edit</a>
                  </button>
              </td>
              
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListPage;
