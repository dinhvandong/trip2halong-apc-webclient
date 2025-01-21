import React from "react";
import { bookingData } from "./bookingdata";

const BookingTable = () => {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Email
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Phone Number
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Package
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Request
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b ">{item.email}</td>
              <td className="px-6 py-4 border-b">{item.phone}</td>
              <td className="px-6 py-4 border-b ">{item.package}</td>
              <td className="px-6 py-4 border-b ">{item.request}</td>
              <td className="px-6 py-4 border-b ">
                <div className={`border-[1px] p-2 rounded-full text-center ${item.status.startsWith('Processed') ? 'text-green-600 border-green-600 bg-green-100':'text-orange-500 border-orange-500 bg-orange-100'}`}>{item.status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
