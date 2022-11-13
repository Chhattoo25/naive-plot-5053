import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchDiv from "./SearchDiv";
const base_url = process.env.REACT_APP_API_URL;
const Search = () => {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "price", order: "desc" });
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        // const url = `${base_url}?page=${page}&sort=${sort.sort},$${
        //   sort.order
        // }&type=${filter.toString()}&search=${search}`;
        const url = `${base_url}`
        const { data } = await axios.get(url);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProduct();
  }, [sort, filter, page, search]);
  return <div>
    <SearchDiv setSearch={(search)=>setSearch(search)} />
  </div>;
};

export default Search;
