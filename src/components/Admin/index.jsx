import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
function Admin() {
  const [blogs, setBlogs] = useState([]);
  const [openBlogs, setOpenBlogs] = useState(false);
  const [products, setProducts] = useState([]);
  const [openProducts, setOpenProducts] = useState(true);

  useEffect(() => {
    fetch("https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  function deleteBlog(id) {
    fetch(
      `https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs/${id}`,
      { method: "DELETE" }
    ).then(() =>
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
    );
  }

  function deleteProduct(id) {
    fetch(
      `https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/${id}`,
      { method: "DELETE" }
    ).then(() =>
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      )
    );
  }
  function handleSubmit(values) {
    fetch(
      `https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/`,
      {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then(() => window.location.reload());
  }
  function handleSubmitBlog(values) {
    fetch(
      "https://6573c101f941bda3f2af1e82.mockapi.io/juan-store/api/v1/blogs",
      {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then(() => window.location.reload());
  }
  return (
    <section className="admin">
      <div className="tab-btn">
        <button
          onClick={() => {
            setOpenProducts(true);
            setOpenBlogs(false);
          }}
        >
          products
        </button>
        <button
          onClick={() => {
            setOpenBlogs(true);
            setOpenProducts(false);
          }}
        >
          blogs
        </button>
      </div>

      {openProducts && (
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x.id}>
                  <td>
                    <img src={x.thumbnail} alt="" width={"200"} />
                  </td>
                  <td>{x.name}</td>
                  <td>${x.price}</td>
                  <td>
                    <button onClick={() => deleteProduct(x.id)}>delete</button>
                  </td>
                  <td>
                    <button>update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="add-product">
            <Formik
              initialValues={{
                thumbnail: "",
                name: "",
                price: 0,
                category: "",
                model: "",
                reviews: 0,
                stockStatus: "",
                description: { text: "" },
                information: { color: "", size: "" },
              }}
              validationSchema={Yup.object({
                thumbnail: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                name: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                price: Yup.number()
                  .positive()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                category: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                model: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                stockStatus: Yup.string().required("Required"),
                description: Yup.object({
                  text: Yup.string()
                    .min(2, "Must be 2 characters at least")
                    .required("Required"),
                }),
                information: Yup.object({
                  color: Yup.string()
                    .min(2, "Must be 2 characters at least")
                    .required("Required"),
                  size: Yup.string()
                    .min(2, "Must be 2 characters at least")
                    .required("Required"),
                }),
              })}
              onSubmit={(values, { setSubmitting }) => {
                values.images = [values.thumbnail];
                handleSubmit(values);
                setSubmitting(false);
              }}
            >
              <Form>
                <label htmlFor="thumbnail">Image :</label>
                <Field name="thumbnail" type="text" id="thumbnail" />
                <ErrorMessage name="thumbnail" />

                <label htmlFor="name">Title :</label>
                <Field name="name" type="text" id="name" />
                <ErrorMessage name="name" />

                <label htmlFor="price">Price :</label>
                <Field name="price" type="number" id="price" />
                <ErrorMessage name="price" />

                <label htmlFor="category">Category :</label>
                <Field name="category" type="text" id="category" />
                <ErrorMessage name="category" />

                <label htmlFor="model">Model :</label>
                <Field name="model" type="text" id="model" />
                <ErrorMessage name="model" />

                <span>Stock status :</span>
                <Field
                  name="stockStatus"
                  type="radio"
                  id="stockStatus1"
                  value="In Stock"
                />
                <label htmlFor="stockStatus1">In Stock</label>
                <Field
                  name="stockStatus"
                  type="radio"
                  id="stockStatus2"
                  value="Stock Out"
                />
                <label htmlFor="stockStatus2">Stock Out</label>
                <ErrorMessage name="stockStatus" />

                <label htmlFor="description">Description :</label>
                <Field
                  as="textarea"
                  name="description.text"
                  type="text"
                  id="description"
                />
                <ErrorMessage name="description.text" />

                <label htmlFor="information.color">Color :</label>
                <Field
                  name="information.color"
                  type="text"
                  id="information.color"
                />
                <ErrorMessage name="information.color" />

                <label htmlFor="information.size">Size :</label>
                <Field
                  name="information.size"
                  type="text"
                  id="information.size"
                />
                <ErrorMessage name="information.size" />

                <button type="submit">Add</button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
      {openBlogs && (
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Date</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((y) => (
                <tr key={y.id}>
                  <td>
                    <img src={y.image} alt="" width={"200"} />
                  </td>
                  <td>{y.title}</td>
                  <td>{y.createdAt[0]}</td>
                  <td>
                    <button onClick={() => deleteBlog(y.id)}>delete</button>
                  </td>
                  <td>
                    <button>update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="add-product">
            <Formik
              initialValues={{
                image: "",
                title: "",
                author: "",
                additionalContent: [""],
                description: "",
                blockquote: "",
                createdAt: [new Date().toISOString()],
              }}
              validationSchema={Yup.object({
                image: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                title: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                author: Yup.string()
                  .min(2, "Must be 2 characters at least")
                  .required("Required"),
                additionalContent: Yup.array().of(
                  Yup.string()
                    .min(20, "Must be 20 characters at least")
                    .required("Required")
                ),
                description: Yup.string()
                  .min(100, "Must be 100 characters at least")
                  .required("Required"),
                blockquote: Yup.string()
                  .min(20, "Must be 20 characters at least")
                  .required("Required"),
                createdAt: Yup.array().of(
                  Yup.string().matches(
                    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/,
                    "Invalid date format"
                  )
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmitBlog(values);
                setSubmitting(false);
              }}
            >
              <Form>
                <label htmlFor="image">Image :</label>
                <Field name="image" type="text" id="image" />
                <ErrorMessage name="image" />

                <label htmlFor="title">Title :</label>
                <Field name="title" type="text" id="title" />
                <ErrorMessage name="title" />

                <label htmlFor="author">Author :</label>
                <Field name="author" type="text" id="author" />
                <ErrorMessage name="author" />

                <label htmlFor="description">Description :</label>
                <Field
                  as="textarea"
                  name="description"
                  type="text"
                  id="description"
                />
                <ErrorMessage name="description" />

                <label htmlFor="additionalContent">Additional Content :</label>
                <FieldArray name="additionalContent">
                  {({ push, remove, form }) => (
                    <div>
                      {form.values.additionalContent.map((content, index) => (
                        <div key={index}>
                          <Field
                            as="textarea"
                            name={`additionalContent.${index}`}
                            type="text"
                            id={`additionalContent.${index}`}
                          />
                          <ErrorMessage name={`additionalContent.${index}`} />
                          <button type="button" onClick={() => remove(index)}>
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  )}
                </FieldArray>

                <label htmlFor="blockquote">Blockquote :</label>
                <Field
                  as="textarea"
                  name="blockquote"
                  type="text"
                  id="blockquote"
                />
                <ErrorMessage name="blockquote" />

                <button type="submit">Add</button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </section>
  );
}
export default Admin;
