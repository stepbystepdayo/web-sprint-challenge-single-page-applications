import React from "react";

export default function Form(props) {
  const { change, errors, form, submit } = props;

  return (
    <div className="form">
      <div>
        <h1>Build Your Own Pizza 🍕</h1>
      </div>

      <form id="pizza-form" onSubmit={submit}>
        <label>
          Name{" "}
          <input onChange={change} id="name-input" name="name" type="text" />
        </label>
        <label>
          Select The Pizza Size!
          <br />
          <select onChange={change} id="size-dropdown" name="size">
            <option>--Select the pizza size--</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </label>
        <label>
          Please choose toppinngs!
          <br />
          <input
            onChange={change}
            type="checkbox"
            checked={form.sausage}
            name="sausage"
          />
          Sausage
        </label>
        <label>
          <input
            onChange={change}
            type="checkbox"
            checked={form.cheese}
            name="cheese"
          />
          Cheese
        </label>
        <label>
          <input
            onChange={change}
            type="checkbox"
            checked={form.spinach}
            name="spinach"
          />
          Spinach
        </label>
        <label>
          <input
            onChange={change}
            type="checkbox"
            checked={form.pepperoni}
            name="pepperoni"
          />
          Pepperoni
        </label>
        <label>
          Speacial Request
          <br />
          <input
            className="box"
            onChange={change}
            id="special-text"
            name="special"
            type="text"
          />
        </label>
        <button id="order-button">Let's eat 🍕</button>
      </form>

      <div style={{ color: "red" }}>
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
    </div>
  );
}
