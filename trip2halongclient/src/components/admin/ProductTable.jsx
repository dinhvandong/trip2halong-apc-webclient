import React from "react";
import { productData } from "./productdata";

const ProductTable = () => {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Product
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Views
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Statistic
            </th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b flex flex-row space-x-2 items-center">
                <img className="w-[5%]" src={item.image} alt="" />{" "}
                <div>{item.product}</div>
              </td>
              <td className="px-6 py-4 border-b">{item.views}</td>
              <td className="px-6 py-4 border-b text-green-600 font-bold">
                {item.statistic}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
