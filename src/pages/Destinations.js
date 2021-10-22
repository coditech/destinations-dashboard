import React, { useContext } from "react";
import DestinationsContext from "../context/DestinationsContext/DestinationsContext";

export default function Destinations() {
  const {
    data: { destinations },
    actions: { deleteD },
  } = useContext(DestinationsContext);

  return (
    <>
      <div class="row tm-content-row tm-mt-big">
        <div>
          <div class="bg-white tm-block h-100">
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <h2 class="tm-block-title d-inline-block">Products</h2>
              </div>
              <div class="col-md-4 col-sm-12 text-right">
                <a href="add-product.html" class="btn btn-small btn-primary">
                  Add New Product
                </a>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-hover table-striped tm-table-striped-even mt-3">
                <thead>
                  <tr class="tm-bg-gray">
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Destination Name</th>
                    <th scope="col" class="text-center">
                      Price
                    </th>
                    <th scope="col" class="text-center">
                      Description
                    </th>
                    <th scope="col">Continent Name</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations &&
                    destinations.map((destination) => (
                      <tr>
                        <td class="text-center">{destination.id}</td>
                        <th scope="row">
                          {/*  <input type="checkbox" aria-label="Checkbox" /> */}
                          <img
                            style={{ width: "100px" }}
                            src={`http://localhost:8000/storage/images/destinations/${destination.continent_id}/${destination.image}`}
                          ></img>
                        </th>
                        <td class="tm-product-name">{destination.name}</td>

                        <td class="text-center">{destination.price}</td>
                        <td>{destination.description}</td>
                        <td class="tm-product-name">
                          {destination.continent.name}
                        </td>
                        <td>
                          <button
                            class="fas fa-trash-alt tm-trash-icon"
                            onClick={() => deleteD(destination.id)}
                          ></button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
