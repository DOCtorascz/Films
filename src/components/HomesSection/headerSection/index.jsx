import DialogPopupAuthoriz from "../../popup/loginPopup"

export default function HeaderSection(popup) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <ul className="header__menu">
              <li className="header__menu-list">
                <a className="header__menu-list__item" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                  Home
                </a>
              </li>
              <li className="header__menu-list">
                <button onClick={() => popup.popups(true)} className="header__bt">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}