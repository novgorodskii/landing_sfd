import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../components/Form";

const Home = () => {

  const [ show, setShow ] = useState(false)
  const { push } = useRouter()
  let goApp = () => process?.env?.NEXT_PUBLIC_VERSION === "prod"
    ? setShow(true) : push(`${process?.env?.NEXT_PUBLIC_LINK_APP}`);

  return (
    <div>
    { show ? <Form close={setShow} /> : null}
    <header className="header offset-xl">
      <div className="container">
        <img
          className="header-image"
          src="/images/header.png"
          alt="header-image"
        />
        <img
          className="header-burger-menu-image"
          src="/images/header-burger-menu.png"
          alt="header-burger-menu-image"
        />
        <div className="wrapper-header offset-xxl">
          <img
            className="logo-image"
            src="/images/logo-dark.svg"
            alt="logo-image"
          />
          <div className="wrapper-menu">
            <ul className="list-menu">
              <li className="list-item">
                <a className="link-menu font-size-xs font-weight-md">Learn</a>
              </li>
              <li className="list-item">
                <a className="link-menu font-size-xs font-weight-md">Develop</a>
              </li>
              <li className="list-item">
                <a className="link-menu font-size-xs font-weight-md">Blog</a>
              </li>
            </ul>
            <div onClick={() => goApp()} className="wrapper-link-button text-md font-weight-md">
              Launch App
              <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
            </div>
          </div>
          <div className="wrapper-burger-menu">
            <input type="checkbox" id="check-menu" />
            <p className="logo-name font-size-xs font-weight-md">Menu</p>
            <label className="title-burger-menu" htmlFor="check-menu"></label>
            <div className="burger-line one"></div>
            <div className="burger-line two"></div>
            <div className="burger-line three"></div>
            <div className="burger-line four"></div>
            <nav className="main-menu">
              <img
                className="image-burger-menu"
                src="/images/burger-menu.png"
                alt="image-burger-menu"
              />
              <div className="wrapper-burger-menu">
                <ul className="list-menu">
                  <li className="list-item">
                    <a className="link-menu font-size-xs font-weight-md">Learn</a>
                  </li>
                  <li className="list-item">
                    <a className="link-menu font-size-xs font-weight-md">Develop</a>
                  </li>
                  <li className="list-item">
                    <a className="link-menu font-size-xs font-weight-md">Blog</a>
                  </li>
                  <li className="list-item">
                    <div
                      onClick={() => goApp()}
                      className="wrapper-link-button text-md font-weight-md">
                      Start Trading
                      <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="header-intro">
          <img className="image-dots" src="/images/dots.svg" alt="image-dots" />
          <h2 className="title-intro font-secondary font-size-xxl font-weight-lg">
            Smart CFDs
          </h2>
          <h1
            className="title-header-intro font-secondary font-size-xxxl font-weight-lg"
          >
            Decentralized Contracts for Differences protocol
          </h1>
          <div onClick={() => goApp()} className="wrapper-link-button text-md font-weight-md">
            Start Trading
            <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
          </div>
        </div>
      </div>
    </header>
    <section className="about offset-xl">
      <div className="container">
        <div className="wrapper-text-section-about offset-lg">
          <img
            className="image-about-mobile"
            src="/images/about-mobile.svg"
            alt="image-about-mobile"
          />
          <div className="col-sm">
            <p
              className="title-section-about font-secondary font-size-xxxl font-weight-lg"
            >
              What is CFD
            </p>
          </div>
          <div className="col-lg">
            <p
              className="text-section-about font-size-md font-weight-sm text-opacity"
            >
              A contract for difference (CFD) is a contract between a buyer and
              a seller that stipulates that the buyer must pay the seller the
              difference between the current value of an asset and its value at
              contract time. FDs allow traders and investors an opportunity to
              profit from price movement without owning the underlying assets.
              The value of a CFD contract does not consider the asset`&apos;`s
              underlying value: only the price change between the trade entry
              and exit.
            </p>
          </div>
        </div>
        <div className="wrapper-cards-section-about">
          <div className="col-lg">
            <table className="table-about">
              <thead className="head">
                <tr className="head-row">
                  <th className="head-cell font-weight-lg font-secondary">
                    Old system
                  </th>
                  <th className="head-cell font-weight-lg font-secondary">
                    Smart CFDs
                  </th>
                </tr>
              </thead>
              <tbody className="body">
                <tr className="body-row">
                  <td className="body-cell">
                    Agent`s problem. You give control of your funds to the
                    broker, bank and exchange.
                  </td>
                  <td className="body-cell">
                    All funds are kept on blockchain in smart contracts. Our
                    platform or devs cannot seize your money.
                  </td>
                </tr>
                <tr className="body-row">
                  <td className="body-cell">
                    Asymmetry of information. Some market participants have
                    better or faster access to the information and can use it on
                    their behalf.
                  </td>
                  <td className="body-cell">
                    All transactions are transparent and become visible for
                    everyone at the same time.
                  </td>
                </tr>
                <tr className="body-row">
                  <td className="body-cell">
                    KYC, AML and other restrictions are applied for the sake of
                    major market players.
                  </td>
                  <td className="body-cell">
                    All you need to start trading is your Metamask wallet.
                  </td>
                </tr>
                <tr className="body-row">
                  <td className="body-cell">
                    Withdrawals are often delayed and data leaked to the third
                    parties.
                  </td>
                  <td className="body-cell">
                    All withdrawals are available anytime in automatic mode.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mobile-cards-wrapper">
              <div className="text-wrapper">
                <h3
                  className="title-cards-section-about font-weight-lg font-secondary"
                >
                  Old system
                </h3>
                <h3
                  className="title-cards-section-about font-weight-lg font-secondary"
                >
                  Smart CFDs
                </h3>
              </div>
              <ul className="about-cards-list">
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  Agent`s problem. You give control of your funds to the broker,
                  bank and exchange.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  All funds are kept on blockchain in smart contracts. Our
                  platform or devs cannot seize your money.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  Asymmetry of information. Some market participants have better
                  or faster access to the information and can use it on their
                  behalf.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  All transactions are transparent and become visible for
                  everyone at the same time.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  KYC, AML and other restrictions are applied for the sake of
                  major market players.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  All you need to start trading is your Metamask wallet.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  Withdrawals are often delayed and data leaked to the third
                  parties.
                </li>
                <li
                  className="list-item-about list-item-old-system list-item-smart-cfds font-size-sm font-weight-sm"
                >
                  All withdrawals are available anytime in automatic mode.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm">
            <img
              className="about-image"
              src="/images/section-about.svg"
              alt="about-image"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="how-it-works offset-sm">
      <div className="container">
        <div className="wrapper-section-how-it-works offset-md">
          <div className="col-md">
            <img
              className="how-it-works-img"
              src="/images/how-it-works.svg"
              alt="how-it-works"
            />
            <div className="col-wrapper-item">
              <h2 className="font-secondary font-size-xxl font-weight-lg offset-xs">
                How it works
              </h2>
              <p
                className="text-opacity text-section-how-it-works font-size-md offset-xs"
              >
                When entering the smart CFD both parties agree on the maturity
                date, the exercise price and the maximum deviation from the
                current price covered by the contract.
              </p>
              <div onClick={() => goApp()} className="wrapper-link-button text-md font-weight-md">
                Start Trading
                <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
              </div>
            </div>
            <ul className="how-it-works-list">
              <li className="how-it-works-list-item offset-xs">
                <p
                  className="how-it-works-list-item-text font-secondary font-weight-lg font-size-xxl"
                >
                  5
                </p>
                <div className="how-it-works-list-item-card">
                  <p className="font-weight-md font-size-lg">Take your profit!</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h3 className="font-secondary font-size-xl font-weight-lg offset-sm">
              How to start:
            </h3>
            <ul className="how-it-works-list">
              <li className="how-it-works-list-item offset-xs">
                <p
                  className="how-it-works-list-item-text font-secondary font-weight-lg font-size-xxl"
                >
                  1
                </p>
                <div className="how-it-works-list-item-card">
                  <p className="font-weight-md font-size-lg">
                    Realize your vision of the asset price.
                  </p>
                </div>
              </li>
              <li className="how-it-works-list-item offset-xs">
                <p
                  className="how-it-works-list-item-text font-secondary font-weight-lg font-size-xxl"
                >
                  2
                </p>
                <div className="how-it-works-list-item-card">
                  <p className="font-weight-md font-size-lg">
                    Create or take Smart CFD order.
                  </p>
                </div>
              </li>
              <li className="how-it-works-list-item offset-xs">
                <p
                  className="how-it-works-list-item-text font-secondary font-weight-lg font-size-xxl"
                >
                  3
                </p>
                <div className="how-it-works-list-item-card">
                  <p className="font-weight-md font-size-lg">
                    Transfer collateral.
                  </p>
                </div>
              </li>
              <li className="how-it-works-list-item offset-xs">
                <p
                  className="how-it-works-list-item-text font-secondary font-weight-lg font-size-xxl"
                >
                  4
                </p>
                <div className="how-it-works-list-item-card">
                  <p className="font-weight-md font-size-lg">
                    Let time and fortune do their job.
                  </p>
                </div>
              </li>
              <li className="how-it-works-list-item offset-xs">
                <p
                  className="how-it-works-list-item-text font-secondary font-weight-lg font-size-xxl"
                >
                  5
                </p>
                <div className="how-it-works-list-item-card">
                  <p className="font-weight-md font-size-lg">Take your profit!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper-bottom">
          <div className="col-md">
            <img
              className="wrapper-bottom-desktop-img"
              src="/images/how-it-works-bottom-desktop.png"
              alt="how-it-works-bottom-desktop"
            />
            <img
              className="wrapper-bottom-mobile-img"
              src="/images/how-it-works-bottom-mobile.png"
              alt="how-it-works-bottom-mobile"
            />
          </div>
          <div className="col-md">
            <h5 className="font-size-md font-weight-md offset-xxs">
              There is no delivery of physical goods or securities with CFDs.
            </h5>
            <h5 className="font-size-md font-weight-md offset-xxs">
              No delivery - less transaction cost.
            </h5>
            <h5 className="font-size-md font-weight-md offset-xxs">
              CFDs are created to get pure profit.
            </h5>
            <h5
              className="font-size-md font-weight-md offset-sm wrapper-bottom-text-gradient"
            >
              Trade as a professional!
            </h5>
            <div onClick={() => goApp()} className="wrapper-link-button text-md font-weight-md">
              Launch App
              <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="for-developers offset-lg">
      <img
        className="for-developers-desktop-img"
        src="/images/for-developers-desktop.png"
        alt="for-developers-desktop"
      />
      <img
        className="for-developers-mobile-img"
        src="/images/for-developers-mobile.png"
        alt="for-developers-mobile"
      />
      <div className="container">
        <div className="col-sm">
          <div className="wrapper-section-for-developers">
            <h2 className="font-secondary font-weight-lg font-size-xxl offset-xs">
              For Developers
            </h2>
            <ul className="for-developers-list">
              <li className="for-developers-list-item offset-xs">
                <a className="for-developers-list-link" href="https://www.notion.so/godefx/White-Paper-546075bcb492495b999f53cac37fd9ea">
                  <h4 className="font-size-lg font-weight-md">White paper</h4>
                  <img
                    className="arrow-top-img"
                    src="/images/arrow-top.svg"
                    alt="arrow-top"
                  />
                  <img
                    className="for-developers-card-img"
                    src="/images/for-developers-card.jpg"
                    alt="for-developers-card"
                  />
                </a>
              </li>
              <li className="for-developers-list-item offset-xs">
                <a className="for-developers-list-link" href="https://www.notion.so/godefx/DeForex-Public-Documentation-e07c7cf03fae4a9c933e2a990b1da551">
                  <h4 className="font-size-lg font-weight-md">Documentation</h4>
                  <img
                    className="arrow-top-img"
                    src="/images/arrow-top.svg"
                    alt="arrow-top"
                  />
                  <img
                    className="for-developers-card-img"
                    src="/images/for-developers-card.jpg"
                    alt="for-developers-card"
                  />
                </a>
              </li>
              <li className="for-developers-list-item offset-xs">
                <a className="for-developers-list-link" href="https://www.notion.so/godefx/Github-DeForex-dd0f107aee6b40738aa5d21ea0987b75">
                  <h4 className="font-size-lg font-weight-md">GitHub</h4>
                  <img
                    className="arrow-top-img"
                    src="/images/arrow-top.svg"
                    alt="arrow-top"
                  />
                  <img
                    className="for-developers-card-img"
                    src="/images/for-developers-card.jpg"
                    alt="for-developers-card"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="footer">
      <div className="container">
        <div className="wrapper-footer-lg">
          <div className="col-md">
            <div className="wrapper-footer-logo">
              <img
                className="image-logo-footer"
                src="/images/logo-dark.svg"
                alt="image-logo-footer"
              />
              <div onClick={() => goApp()} className="wrapper-link-button text-md font-weight-md">
                Launch App
                <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="wrapper-footer-column">
              <div className="wrapper-col-links">
                <h3 className="title-footer font-size-xxs font-weight-md">Links</h3>
                <ul className="list-footer">
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#">Learn</a>
                  </li>
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >Develop</a
                    >
                  </li>
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >Blog</a
                    >
                  </li>
                </ul>
              </div>
              <div className="wrapper-col-social">
                <h3 className="title-footer font-size-xxs font-weight-md">
                  Social
                </h3>
                <ul className="list-footer">
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >Twitter</a
                    >
                  </li>
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >Discord</a
                    >
                  </li>
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >Telegram</a
                    >
                  </li>
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >Medium</a
                    >
                  </li>
                  <li className="list-item-footer">
                    <a className="link-footer font-size-xxs font-weight-md" href="#"
                      >GitHub</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-footer-sm">
          <img
            className="image-logo-footer"
            src="/images/logo-dark.svg"
            alt="image-logo-footer"
          />
          <div className="wrapper-footer-column">
            <div className="wrapper-col-links">
              <h3 className="title-footer font-size-xxs font-weight-md">Links</h3>
              <ul className="list-footer">
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Learn</a
                  >
                </li>
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Develop</a
                  >
                </li>
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Blog</a
                  >
                </li>
              </ul>
            </div>
            <div className="wrapper-col-social">
              <h3 className="title-footer font-size-xxs font-weight-md">Social</h3>
              <ul className="list-footer">
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Twitter</a
                  >
                </li>
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Discord</a
                  >
                </li>
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Telegram</a
                  >
                </li>
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >Medium</a
                  >
                </li>
                <li className="list-item-footer">
                  <a className="link-footer font-size-xxs font-weight-md" href="#"
                    >GitHub</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div className="wrapper-link-button text-md font-weight-md"
            onClick={() => goApp()}
            >Launch App
            <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home