import React from "react";

const options = [
  { name: "email", id: 1, label: "Email" },
  { name: "phone", id: 2, label: "Phone" },
  { name: "mail", id: 3, label: "Mail" },
];

const RadioGroup = () => {
  const [checkedItem, setCheckedItem] = React.useState();
  const radioRef = React.useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkedItem);
  };

  const handleSetActiveRadio = (e) => setCheckedItem(e.target.value);

  const changeFocusRadio = React.useCallback(
    (item) => {
      let index = options.findIndex((item) => `${item.id}` === checkedItem);

      if (item === "next") {
        index = index === radioRef.current.length - 1 ? 0 : index + 1;
      } else if (item === "prev") {
        index = index <= 0 ? radioRef.current.length - 1 : index - 1;
      }

      console.log("***", radioRef.current[index]);

      setCheckedItem(radioRef.current[index].dataset.id);
      radioRef.current[index].focus();
    },
    [checkedItem]
  );

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        changeFocusRadio("next");
      }
      case "ArrowUp": {
        e.preventDefault();
        changeFocusRadio("prev");
      }
      default: {
        break;
      }
    }
  };

  const isActive = (index) =>
    (!checkedItem && index === 0) || checkedItem === `${options[index].id}`;

  return (
    <section className="radios">
      <fieldset
        className="radio-group"
        role="radiogroup"
        aria-labelledby="radio-title"
      >
        <legend id="radio-title">
          Please select your preferred contact method
        </legend>
        {options.map(({ id, name, label }, index) => {
          const value = `${id}`;
          return (
            <div
              key={id}
              className="radio-group__wrapper"
              onKeyDown={handleKeyPress}
            >
              <input
                type="radio"
                name={name}
                value={value}
                aria-checked={checkedItem === value}
                aria-labelledby={id}
                data-id={value}
                id={`${id}-${index}`}
                checked={checkedItem === value}
                onChange={handleSetActiveRadio}
                onFocus={handleSetActiveRadio}
                tabIndex={isActive(index) ? "0" : "-1"}
                className="radio-group__item"
                ref={(el) => {
                  radioRef.current[index] = el;
                }}
              />
              <label
                id={id}
                htmlFor={`${id}-${index}`}
                className="radio-group__label"
              >
                {label}
              </label>
            </div>
          );
        })}
      </fieldset>
      <div>
        <button
          type="button"
          className="radio-group__submit"
          onKeyDown={(e) => {
            e.key === "Enter" && handleSubmit(e);
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default RadioGroup;
