import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Form from "./Form.js";
import Home from "./Home.js";
import * as yup from "yup";
import axios from "axios";

const initialForm = {
  name: "",
  size: "",
  sausage: false,
  cheese: false,
  spinach: false,
  pepperoni: false,
  special: "",
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Please chose the size"),
  sausage: yup.boolean(),
  cheese: yup.boolean(),
  spinach: yup.boolean(),
  pepperoni: yup.boolean(),
  special: yup.string(),
});

const App = () => {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState(initialForm);

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const onChange = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newPizza = {
      name: form.name.trim(),
      size: form.size,
      cheese: form.cheese,
      spinach: form.spinach,
      pepperoni: form.pepperoni,
      special: form.special,
    };
    console.log(newPizza);

    axios
      .post(`https://reqres.in/api/orders`, newPizza)
      .then((response) => {
        setForm(initialForm);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link id="order-pizza" to="/pizza">
            Order
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form
            change={onChange}
            errors={errors}
            form={form}
            submit={onSubmit}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      {/* We need to show the form */}
    </>
  );
};
export default App;
