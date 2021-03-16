import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Userorder() {
  const [addrtype, setAddrType] = useState("In process");
  function handleAddrTypeChange(e) {
    setAddrType(e.target.value);
  }
  //console.log(addrtype);
  //   fetch API:
  const [List, setList] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setloading(true);
      var checked = [];
      const res = await axios.get("http://localhost:58564/api/TbInvoices");
      res.data.forEach((e) => {
        // console.log(e);
        if (
          parseInt(sessionStorage.getItem("User")) === e.userId &&
          e.process === addrtype //"In process"
        ) {
          return checked.push(e);
        }
      });
      setList(checked);
      setloading(false);
    };

    fetch();
  }, [addrtype]);

  return (
    <div>
      <h2>All 🛒 payment by cash {loading}</h2>
      <select
        defaultValue={addrtype}
        onChange={handleAddrTypeChange}
        className="browser-default custom-select"
      >
        <option selected value="In process">
          In process
        </option>
        <option value="Delayed">Delayed</option>
        <option value="Finished">Finished</option>
      </select>
      <div class="_298G_L"></div>
      {List.map((e, key) => {
        return (
          <div class="alert alert-light alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">
              &times;{key + 1}
            </button>
            <div class="alert alert-success">
              <strong>Address: </strong> {e.address}
            </div>
            <div class="alert alert-info">
              <strong>Consignee: </strong> {e.consignee}
            </div>
            <div class="alert alert-warning">
              <strong>Description: </strong> {e.description}
            </div>
            <div class="alert alert-danger">
              <strong>Process: </strong> {e.process}
            </div>
            <div class="alert alert-primary">
              <strong>Telephone number: </strong> {e.sdt}
            </div>
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure? Invoices will be deleted (canceled) forever !!! "
                  )
                ) {
                  try {
                    const url = "http://localhost:58564/api/TbInvoices/" + e.id;
                    const response = axios.delete(url);
                    alert(response + " Deleted successfully");
                    window.location.assign("/user");
                  } catch (error) {
                    console.log("Failed to delete: ", error);
                  }
                } else {
                  return;
                }
              }}
              className="btn btn-outline-red"
            >
              Delete invoice
</button>
          </div>
        );
      })}
    </div>
  );
}

export default Userorder;