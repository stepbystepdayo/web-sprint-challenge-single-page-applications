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
          Name
          <input onChange={change} id="name-input" name="name" type="text" />
        </label>
        <label>
          <select onChange={change} id="size-dropdown" name="size">
            <option>--Select the pizza size--</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </label>
        <label>
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
          <input
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
        {/* <div>{errors.password}</div>
        <div>{errors.agree}</div>  */}
      </div>
      {/* <form onSubmit={submit}>
        <label>
          Name
          <input onChange={change} value={form.name} name="name" type="text" />
        </label>
        <label>
          Email
          <input
            onChange={change}
            value={form.email}
            name="email"
            type="email"
          />
        </label>
        <label>
          Password
          <input
            onChange={change}
            value={form.password}
            name="password"
            type="password"
          />
        </label>
        <label>
          Terms Of Service<span> </span>
          <input
            onChange={change}
            checked={form.agree}
            name="agree"
            type="checkbox"
          />
        </label>
        <button disabled={disabled}>Submit!</button>
      </form> */}
    </div>
  );
}
