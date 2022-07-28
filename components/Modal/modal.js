import React from "react";
import * as focusTrap from "focus-trap";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = React.useRef();

  let trap;

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  const handleKeyPress = (e) => {
    if (isModalOpen && e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  const createFocusTrap = React.useCallback(() => {
    trap = focusTrap.createFocusTrap(modalRef.current);
    trap?.activate();
  }, []);

  const removeTrap = React.useCallback(() => {
    if (trap?.active) {
      trap.deactivate();
    }
  }, []);

  React.useEffect(() => {
    isModalOpen ? createFocusTrap() : removeTrap();
  }, [isModalOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="modal__btn"
      >
        Open modal window
      </button>
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby={isModalOpen ? "modal-title" : undefined}
        aria-describedby={isModalOpen ? "modal-desc" : undefined}
        className={`modal ${isModalOpen ? "modal--open" : "modal--disabled"}`}
        onKeyDown={handleKeyPress}
      >
        <div className="modal__content">
          <h2 className="modal__title" id="modal-title" tabIndex={-1}>
            Modal Title
          </h2>
          <p id="modal-desc">
            Modal window is a user experience pattern that is useful when you
            want to bring the user&apos;s attention to something important
            without leaving the current context/page.
          </p>
          <div>
            <p>
              Recommendation: You might also learn more about the dialog role.{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role"
                aria-label="Redirect to dialog role documentation"
              >
                Click here
              </a>{" "}
              to learn more.
            </p>
            <button
              type="button"
              id="modal-1-close-btn"
              className="modal__close-btn"
              onClick={handleCloseButtonClick}
              aria-label="Close modal"
            >
              <span dangerouslySetInnerHTML={{ __html: "&#215;" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
