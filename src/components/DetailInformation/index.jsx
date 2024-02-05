import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailInformation({ detailsProduct }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="tab-container">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="tab-head"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs"
        >
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="INFORMATION" {...a11yProps(1)} />
          <Tab label="REVIEWS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="tab-body">
        <p>{detailsProduct.description?.text}</p>
        <div className="info">
          <img src={detailsProduct.thumbnail} alt="product image" />
          <ul>
            {detailsProduct.description?.list ? (
              <span>Product Information :</span>
            ) : null}
            {detailsProduct.description?.list?.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="tab-body">
        <table>
          <tbody>
            <tr>
              <td>Color</td>
              <td>{detailsProduct.information?.color}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{detailsProduct.information?.size}</td>
            </tr>
          </tbody>
        </table>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="tab-body">
        <div className="review-detail">
          <h4>
            1 Review For <span>{detailsProduct.name}</span>
          </h4>
          <div className="user-comment">
            <img
              src="https://htmldemo.net/juan/juan/assets/img/about/avatar.jpg"
              alt="avatar"
            />
            <div className="content">
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>
              <div className="comment-author">
                <p>Admin - 30 Nov, 2018</p>
              </div>
              <div className="comment-text">
                <p>
                  Aliquam fringilla euismod risus ac bibendum. Sed sit amet sem
                  varius ante feugiat lacinia. Nunc ipsum nulla, vulputate ut
                  venenatis vitae, malesuada ut mi. Quisque iaculis, dui congue
                  placerat pretium, augue erat accumsan lacus
                </p>
              </div>
            </div>
          </div>
          <div className="add-comment-form">
            <Formik
              initialValues={{ name: "", email: "", review: "", rating: "" }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(5, "Must be 5 characters at least")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                review: Yup.string()
                  .min(5, "Must be 5 characters at least")
                  .required("Required"),
                rating: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              <Form>
                <div className="form">
                  <label htmlFor="name">Your Name</label>
                  <Field name="name" type="text" />
                  <ErrorMessage name="name" component={"span"} />
                </div>
                <div className="form">
                  <label htmlFor="email">Your Email</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" component={"span"} />
                </div>
                <div className="form">
                  <label htmlFor="lastreviewName">Your Review</label>
                  <Field name="review" type="text" as="textarea" />
                  <ErrorMessage name="review" component={"span"} />
                </div>
                <div className="radio-group">
                  <span>Rating</span>
                  <label>
                    Bad
                    <Field type="radio" name="rating" value="One" />
                    <Field type="radio" name="rating" value="Two" />
                    <Field type="radio" name="rating" value="Three" />
                    <Field type="radio" name="rating" value="Four" />
                    <Field type="radio" name="rating" value="Five" />
                    Good
                  </label>
                  <ErrorMessage name="rating" component={"p"} />
                </div>
                <button type="submit">Continue</button>
              </Form>
            </Formik>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
