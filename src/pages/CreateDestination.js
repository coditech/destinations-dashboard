import React, { useContext } from "react";
import DestinationsContext from "../context/DestinationsContext/DestinationsContext";

export default function CreateDestination() {
  const {
    actions: { createD },
  } = useContext(DestinationsContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.files[0];
    const continent_id = form.continent_id.value;
    createD(title, image, description, price, continent_id);
  };
  return (
    <div class="row tm-mt-big">
      <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
        <div class="bg-white tm-block">
          <div class="row">
            <div class="col-12">
              <h2 class="tm-block-title d-inline-block">Add Product</h2>
            </div>
          </div>
          <div class="row mt-4 tm-edit-product-row">
            <div class="col-xl-7 col-lg-7 col-md-12">
              <form class="tm-edit-product-form" onSubmit={onSubmit}>
                <div class="input-group mb-3">
                  <label
                    for="name"
                    class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                  />
                </div>
                <div class="input-group mb-3">
                  <label
                    for="description"
                    class="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div class="input-group mb-3">
                  <label
                    for="category"
                    class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
                  >
                    Continent
                  </label>
                  <input
                    id="continent_id"
                    name="continent_id"
                    type="text"
                    class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                  />
                </div>

                <div class="input-group mb-3">
                  <label
                    for="stock"
                    class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    class="form-control validate col-xl-9 col-lg-8 col-md-7 col-sm-7"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 mx-auto mb-4">
                  <div class="tm-product-img-dummy mx-auto">
                    <i class="fas fa-5x fa-cloud-upload-alt"></i>
                  </div>
                  <div class="custom-file mt-3 mb-3">
                    <input
                      type="file"
                      class="btn btn-primary d-block mx-auto"
                      name="image"
                      id="image"
                    />
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="ml-auto col-xl-8 col-lg-8 col-md-8 col-sm-7 pl-0">
                    <button type="submit" class="btn btn-primary">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
