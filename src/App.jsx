import { useState } from 'react' 

function App() { 

  return (
    <>
     <div id="main-wrapper">
      <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
          <div class="navbar-header">
            <a
              class="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
              ><i class="ri-close-line ri-menu-2-line fs-6"></i
            ></a>
            <a class="navbar-brand" href="index.html">
              <b class="logo-icon">
                <img
                  src="../../assets/images/logo-icon.png"
                  alt="homepage"
                  class="dark-logo"
                />
                <img
                  src="../../assets/images/logo-light-icon.png"
                  alt="homepage"
                  class="light-logo"
                />
              </b>
              <span class="logo-text">
                <img
                  src="../../assets/images/logo-text.png"
                  alt="homepage"
                  class="dark-logo"
                />
                <img
                  src="../../assets/images/logo-light-text.png"
                  class="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
            <a
              class="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              ><i class="ri-more-line fs-6"></i
            ></a>
          </div>
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a
                  class="nav-link sidebartoggler d-none d-md-block"
                  href="javascript:void(0)"
                  ><i data-feather="menu"></i
                ></a>
              </li>
              <li class="nav-item search-box">
                <a class="nav-link" href="javascript:void(0)">
                  <i data-feather="search"></i>
                </a>
                <form class="app-search position-absolute">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Search &amp; enter"
                  />
                  <a class="srh-btn"
                    ><i
                      data-feather="x-circle"
                      class="feather-sm text-muted"
                    ></i
                  ></a>
                </form>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link nav-sidebar" href="javascript:void(0)">
                  <i data-feather="shopping-cart"></i>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="message-square"></i>
                  <div class="notify">
                    <span class="point bg-warning"></span>
                  </div>
                </a>
                <div
                  class="
                    dropdown-menu
                    mailbox
                    dropdown-menu-end dropdown-menu-animate-up
                  "
                  aria-labelledby="2"
                >
                  <ul class="list-style-none">
                    <li>
                      <div
                        class="rounded-top p-30 pb-2 d-flex align-items-center"
                      >
                        <h3 class="card-title mb-0">Messages</h3>
                        <span class="badge bg-primary ms-3">5 new</span>
                      </div>
                    </li>
                    <li class="p-30 pt-0">
                      <div
                        class="message-center message-body position-relative"
                      >
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle online"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              Roman Joined the Team!
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Congratulate him</span
                            >
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle busy"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              New message received
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Salma sent you new message</span
                            >
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle busy"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              New Payment received
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Check your earnings</span
                            >
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/5.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle away"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              Jolly completed tasks
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Assign her new tasks</span
                            >
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle online"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              Payment deducted
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >$230 deducted from account</span
                            >
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                      </div>
                      <div class="mt-4">
                        <a
                          class="btn btn-info text-white"
                          href="javascript:void(0);"
                        >
                          See all messages
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="bell"></i>
                  <div class="notify">
                    <span class="point bg-primary"></span>
                  </div>
                </a>
                <div
                  class="
                    dropdown-menu dropdown-menu-end
                    mailbox
                    dropdown-menu-animate-up
                  "
                >
                  <ul class="list-style-none">
                    <li>
                      <div
                        class="rounded-top p-30 pb-2 d-flex align-items-center"
                      >
                        <h3 class="card-title mb-0">Notifications</h3>
                        <span class="badge bg-warning ms-3">5 new</span>
                      </div>
                    </li>
                    <li class="p-30 pt-0">
                      <div
                        class="message-center message-body position-relative"
                      >
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                          /></span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              Roman Joined the Team!
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Congratulate him</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              New message received
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Salma sent you new message</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span class="btn btn-light-info text-info btn-circle">
                            <i
                              data-feather="dollar-sign"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              New Payment received
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Check your earnings</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            py-3
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              Jolly completed tasks
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Assign her new tasks</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            py-3
                          "
                        >
                          <span
                            class="btn btn-light-danger text-danger btn-circle"
                          >
                            <i
                              data-feather="credit-card"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              Payment deducted
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >$230 deducted from account</span
                            >
                          </div>
                        </a>
                      </div>
                      <div class="mt-4">
                        <a
                          class="btn btn-info text-white"
                          href="javascript:void(0);"
                        >
                          See all notifications
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item dropdown profile-dropdown">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../../assets/images/users/user.jpg"
                    alt="user"
                    width="30"
                    class="profile-pic rounded-circle"
                  />
                  <div class="d-none d-md-flex">
                    <span class="ms-2"
                      >Hi,
                      <span class="text-dark fw-bold">Johnathan</span></span
                    >
                    <span>
                      <i data-feather="chevron-down" class="feather-sm"></i>
                    </span>
                  </div>
                </a>
                <div
                  class="
                    dropdown-menu dropdown-menu-end
                    mailbox
                    dropdown-menu-animate-up
                  "
                >
                  <ul class="list-style-none">
                    <li class="p-30 pb-2">
                      <div class="rounded-top d-flex align-items-center">
                        <h3 class="card-title mb-0">User Profile</h3>
                        <div class="ms-auto">
                          <a href="javascript:void(0)" class="link py-0">
                            <i data-feather="x-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div
                        class="
                          d-flex
                          align-items-center
                          mt-4
                          pt-3
                          pb-4
                          border-bottom
                        "
                      >
                        <img
                          src="../../assets/images/users/user.jpg"
                          alt="user"
                          width="90"
                          class="rounded-circle"
                        />
                        <div class="ms-4">
                          <h4 class="mb-0">Johnathan Doe</h4>
                          <span class="text-muted">Administrator</span>
                          <p class="text-muted mb-0 mt-1">
                            <i data-feather="mail" class="feather-sm me-1"></i>
                            info@Flexy.com
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="p-30 pt-0">
                      <div
                        class="message-center message-body position-relative"
                        style={{height: "210px"}}
                      >
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="btn btn-light-info btn-rounded-lg text-info"
                          >
                            <i
                              data-feather="dollar-sign"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              My Profile
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Account Settings</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="
                              btn btn-light-success btn-rounded-lg
                              text-success
                            "
                          >
                            <i
                              data-feather="shield"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                                d-flex
                                align-items-center
                              "
                            >
                              My Inbox
                              <span class="mt-n2 ms-1"
                                ><i
                                  class="
                                    mdi mdi-checkbox-blank-circle
                                    fs-1
                                    text-success
                                  "
                                ></i
                              ></span>
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >Messages & Emails</span
                            >
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            px-2
                            d-flex
                            align-items-center
                            border-bottom
                            py-3
                          "
                        >
                          <span
                            class="
                              btn btn-light-danger btn-rounded-lg
                              text-danger
                            "
                          >
                            <i
                              data-feather="credit-card"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5
                              class="
                                message-title
                                mb-0
                                mt-1
                                fs-4
                                font-weight-medium
                              "
                            >
                              My Tasks
                            </h5>
                            <span
                              class="
                                fs-3
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                                text-muted
                              "
                              >To-do and Daily Tasks</span
                            >
                          </div>
                        </a>
                        <div class="mt-4">
                          <a
                            href="javascript:void(0)"
                            class="
                              text-dark
                              fs-3
                              font-weight-medium
                              hover-primary
                            "
                          >
                            Account Settings
                          </a>
                          <a
                            href="javascript:void(0)"
                            class="
                              text-dark
                              fs-3
                              font-weight-medium
                              hover-primary
                            "
                          >
                            Frequently Asked Questions
                          </a>
                          <a
                            href="javascript:void(0)"
                            class="
                              text-dark
                              fs-3
                              font-weight-medium
                              hover-primary
                            "
                          >
                            Pricing
                          </a>
                        </div>
                      </div>
                      <div class="mt-4">
                        <a
                          class="btn btn-info text-white"
                          href="javascript:void(0);"
                        >
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside class="left-sidebar">
        <div class="scroll-sidebar">
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Dashboards</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="index.html"
                  aria-expanded="false"
                >
                  <i data-feather="pie-chart"></i
                  ><span class="hide-menu">Analytical</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="index2.html"
                  aria-expanded="false"
                >
                  <i data-feather="shopping-bag"></i
                  ><span class="hide-menu">eCommerce</span>
                </a>
              </li>

              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Apps</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-calendar.html"
                  aria-expanded="false"
                  ><i data-feather="calendar"></i
                  ><span class="hide-menu">Calendar</span></a
                >
              </li>

              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-chats.html"
                  aria-expanded="false"
                  ><i data-feather="message-circle"></i
                  ><span class="hide-menu">Chat Apps</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-contacts.html"
                  aria-expanded="false"
                  ><i data-feather="phone"></i
                  ><span class="hide-menu">Contact</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-invoice.html"
                  aria-expanded="false"
                  ><i data-feather="file-text"></i
                  ><span class="hide-menu">Invoice</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-notes.html"
                  aria-expanded="false"
                  ><i data-feather="copy"></i
                  ><span class="hide-menu">Notes</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-todo.html"
                  aria-expanded="false"
                  ><i data-feather="trello"></i
                  ><span class="hide-menu">Todo</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-taskboard.html"
                  aria-expanded="false"
                  ><i data-feather="check-square"></i
                  ><span class="hide-menu">Taskboard</span></a
                >
              </li>

              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="inbox"></i
                  ><span class="hide-menu">Inbox </span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="inbox-email.html" class="sidebar-link"
                      ><i class="ri-mail-line"></i
                      ><span class="hide-menu"> Email </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="inbox-email-detail.html" class="sidebar-link"
                      ><i class="ri-mail-open-line"></i
                      ><span class="hide-menu"> Email Detail </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="inbox-email-compose.html" class="sidebar-link"
                      ><i class="ri-mail-add-line"></i
                      ><span class="hide-menu"> Email Compose </span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="bookmark"></i
                  ><span class="hide-menu">Ticket </span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ticket-list.html" class="sidebar-link"
                      ><i class="ri-ticket-line"></i
                      ><span class="hide-menu"> Ticket List </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ticket-detail.html" class="sidebar-link"
                      ><i class="ri-coupon-line"></i
                      ><span class="hide-menu"> Ticket Detail </span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-small-cap">
                <i class="nav-small-line"></i> <span class="hide-menu">UI</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="toggle-right"></i
                  ><span class="hide-menu">Ui Elements </span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ui-notification.html" class="sidebar-link"
                      ><i class="ri-notification-3-line"></i
                      ><span class="hide-menu"> Alert</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-accordian.html" class="sidebar-link"
                      ><i class="ri-window-2-fill"></i
                      ><span class="hide-menu"> Accordian</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-badge.html" class="sidebar-link"
                      ><i class="ri-coupon-2-line"></i
                      ><span class="hide-menu"> Badge</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-buttons.html" class="sidebar-link"
                      ><i class="ri-switch-line"></i
                      ><span class="hide-menu"> Buttons</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-dropdowns.html" class="sidebar-link"
                      ><i class="ri-align-bottom"></i
                      ><span class="hide-menu"> Dropdowns</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-modals.html" class="sidebar-link"
                      ><i class="ri-window-line"></i
                      ><span class="hide-menu"> Modals</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-tab.html" class="sidebar-link"
                      ><i class="ri-repeat-2-fill"></i
                      ><span class="hide-menu"> Tab</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-tooltip-popover.html" class="sidebar-link"
                      ><i class="ri-settings-2-line"></i
                      ><span class="hide-menu"> Tooltip &amp; Popover</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-pagination.html" class="sidebar-link"
                      ><i class="ri-shuffle-line"></i
                      ><span class="hide-menu"> Pagination</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-progressbar.html" class="sidebar-link"
                      ><i class="ri-menu-4-line"></i
                      ><span class="hide-menu"> Progressbar</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-typography.html" class="sidebar-link"
                      ><i class="ri-pen-nib-line"></i
                      ><span class="hide-menu"> Typography</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-bootstrap.html" class="sidebar-link"
                      ><i class="ri-image-line"></i
                      ><span class="hide-menu">Image</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-breadcrumb.html" class="sidebar-link"
                      ><i class="ri-route-line"></i
                      ><span class="hide-menu"> Breadcrumb</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-lists.html" class="sidebar-link"
                      ><i class="ri-list-check-2"></i
                      ><span class="hide-menu"> List Media</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-grid.html" class="sidebar-link"
                      ><i class="ri-layout-grid-line"></i
                      ><span class="hide-menu"> Grid</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-carousel.html" class="sidebar-link"
                      ><i class="ri-clapperboard-line"></i
                      ><span class="hide-menu"> Carousel</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-offcanvas.html" class="sidebar-link"
                      ><i class="ri-artboard-2-line"></i
                      ><span class="hide-menu"> Offcanvas</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-scrollspy.html" class="sidebar-link"
                      ><i class="ri-order-play-line"></i
                      ><span class="hide-menu"> Scrollspy</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-toasts.html" class="sidebar-link"
                      ><i class="ri-chat-smile-2-line"></i
                      ><span class="hide-menu"> Toasts</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-spinner.html" class="sidebar-link"
                      ><i class="ri-loader-2-line"></i
                      ><span class="hide-menu"> Spinner</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="layers"></i
                  ><span class="hide-menu">Cards</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ui-cards.html" class="sidebar-link"
                      ><i class="ri-layout-top-2-line"></i
                      ><span class="hide-menu"> Basic Cards</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-card-customs.html" class="sidebar-link"
                      ><i class="ri-layout-right-2-line"></i
                      ><span class="hide-menu">Custom Cards</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-card-weather.html" class="sidebar-link"
                      ><i class="ri-cloud-line"></i
                      ><span class="hide-menu">Weather Cards</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-card-draggable.html" class="sidebar-link"
                      ><i class="ri-drag-drop-line"></i
                      ><span class="hide-menu">Draggable Cards</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="box"></i
                  ><span class="hide-menu">Components</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="component-sweetalert.html" class="sidebar-link"
                      ><i class="ri-alarm-warning-line"></i
                      ><span class="hide-menu"> Sweet Alert</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="component-nestable.html" class="sidebar-link"
                      ><i class="ri-git-merge-fill"></i
                      ><span class="hide-menu">Nestable</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="component-noui-slider.html" class="sidebar-link"
                      ><i class="ri-slideshow-4-line"></i
                      ><span class="hide-menu">Noui slider</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="component-rating.html" class="sidebar-link"
                      ><i class="ri-star-smile-line"></i
                      ><span class="hide-menu">Rating</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="component-toastr.html" class="sidebar-link"
                      ><i class="ri-notification-badge-line"></i
                      ><span class="hide-menu">Toastr</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="grid"></i
                  ><span class="hide-menu">Widgets </span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="widgets-feeds.html" class="sidebar-link"
                      ><i class="ri-chat-1-line"></i
                      ><span class="hide-menu"> Feed Widgets </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="widgets-apps.html" class="sidebar-link"
                      ><i class="ri-apps-line"></i
                      ><span class="hide-menu"> Apps Widgets </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="widgets-data.html" class="sidebar-link"
                      ><i class="ri-database-line"></i
                      ><span class="hide-menu"> Data Widgets </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="widgets-charts.html" class="sidebar-link"
                      ><i class="ri-pie-chart-box-line"></i
                      ><span class="hide-menu"> Charts Widgets</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Forms</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="file"></i
                  ><span class="hide-menu">Form Elements</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="form-inputs.html" class="sidebar-link"
                      ><i class="ri-text-wrap"></i
                      ><span class="hide-menu"> Forms Input</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-input-groups.html" class="sidebar-link"
                      ><i class="ri-indent-increase"></i
                      ><span class="hide-menu"> Input Groups</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-input-grid.html" class="sidebar-link"
                      ><i class="ri-table-2"></i
                      ><span class="hide-menu"> Input Grid</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="form-custom-checkbox-radio.html"
                      class="sidebar-link"
                      ><i class="ri-checkbox-line"></i
                      ><span class="hide-menu">
                        Custom Checkboxes &amp; Radios</span
                      ></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-checkbox-radio.html" class="sidebar-link"
                      ><i class="ri-checkbox-line"></i
                      ><span class="hide-menu">
                        Checkboxes &amp; Radios</span
                      ></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-bootstrap-touchspin.html" class="sidebar-link"
                      ><i class="ri-refresh-line"></i
                      ><span class="hide-menu"> Bootstrap Touchspin</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-bootstrap-switch.html" class="sidebar-link"
                      ><i class="ri-toggle-line"></i
                      ><span class="hide-menu"> Bootstrap Switch</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-select2.html" class="sidebar-link"
                      ><i class="ri-contrast-line"></i
                      ><span class="hide-menu"> Select2</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-dual-listbox.html" class="sidebar-link"
                      ><i class="ri-file-list-3-line"></i
                      ><span class="hide-menu"> Dual Listbox</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="layout"></i
                  ><span class="hide-menu">Form Layouts</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="form-basic.html" class="sidebar-link"
                      ><i class="ri-file-list-line"></i
                      ><span class="hide-menu"> Basic Forms</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-horizontal.html" class="sidebar-link"
                      ><i class="ri-file-list-2-line"></i
                      ><span class="hide-menu"> Form Horizontal</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-actions.html" class="sidebar-link"
                      ><i class="ri-file-code-line"></i
                      ><span class="hide-menu"> Form Actions</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-row-separator.html" class="sidebar-link"
                      ><i class="ri-file-transfer-line"></i
                      ><span class="hide-menu"> Row Separator</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-bordered.html" class="sidebar-link"
                      ><i class="ri-file-copy-2-line"></i
                      ><span class="hide-menu"> Form Bordered</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-striped-row.html" class="sidebar-link"
                      ><i class="ri-file-upload-line"></i
                      ><span class="hide-menu"> Striped Rows</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-detail.html" class="sidebar-link"
                      ><i class="ri-file-history-line"></i
                      ><span class="hide-menu"> Form Detail</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-material.html" class="sidebar-link"
                      ><i class="ri-file-shield-line"></i
                      ><span class="hide-menu"> Form Material</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-floating-input.html" class="sidebar-link"
                      ><i class="ri-file-cloud-line"></i
                      ><span class="hide-menu"> Form Floating Input</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="file-plus"></i
                  ><span class="hide-menu">Form Addons</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="form-paginator.html" class="sidebar-link"
                      ><i class="ri-shuffle-line"></i
                      ><span class="hide-menu"> Paginator</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-img-cropper.html" class="sidebar-link"
                      ><i class="ri-crop-2-line"></i
                      ><span class="hide-menu"> Image Cropper</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-dropzone.html" class="sidebar-link"
                      ><i class="ri-drag-move-line"></i
                      ><span class="hide-menu"> Dropzone</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-mask.html" class="sidebar-link"
                      ><i class="ri-file-hwp-line"></i
                      ><span class="hide-menu"> Form Mask</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-typeahead.html" class="sidebar-link"
                      ><i class="ri-text-spacing"></i
                      ><span class="hide-menu"> Form Typehead</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="alert-triangle"></i
                  ><span class="hide-menu">Form Validation</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a
                      href="form-bootstrap-validation.html"
                      class="sidebar-link"
                      ><i class="ri-picture-in-picture-2-line"></i
                      ><span class="hide-menu"> Bootstrap Validation</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-custom-validation.html" class="sidebar-link"
                      ><i class="ri-picture-in-picture-exit-line"></i
                      ><span class="hide-menu"> Custom Validation</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="aperture"></i
                  ><span class="hide-menu">Form Pickers</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="form-picker-colorpicker.html" class="sidebar-link"
                      ><i class="ri-palette-line"></i
                      ><span class="hide-menu"> Form Colorpicker</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="form-picker-datetimepicker.html"
                      class="sidebar-link"
                      ><i class="ri-calendar-2-line"></i
                      ><span class="hide-menu"> Form Datetimepicker</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="form-picker-bootstrap-rangepicker.html"
                      class="sidebar-link"
                      ><i class="ri-calendar-check-line"></i
                      ><span class="hide-menu">
                        Form Bootstrap Rangepicker</span
                      ></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="form-picker-bootstrap-datepicker.html"
                      class="sidebar-link"
                      ><i class="ri-calendar-event-line"></i
                      ><span class="hide-menu">
                        Form Bootstrap Datepicker</span
                      ></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="form-picker-material-datepicker.html"
                      class="sidebar-link"
                      ><i class="ri-calendar-todo-line"></i
                      ><span class="hide-menu">
                        Form Material Datepicker</span
                      ></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="edit"></i
                  ><span class="hide-menu">Form Editor</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="form-editor-ckeditor.html" class="sidebar-link"
                      ><i class="ri-file-edit-line"></i
                      ><span class="hide-menu">Ck Editor</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-editor-quill.html" class="sidebar-link"
                      ><i class="ri-image-edit-line"></i
                      ><span class="hide-menu">Quill Editor</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-editor-summernote.html" class="sidebar-link"
                      ><i class="ri-contrast-2-line"></i
                      ><span class="hide-menu">Summernote Editor</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="form-editor-tinymce.html" class="sidebar-link"
                      ><i class="ri-contrast-drop-2-line"></i
                      ><span class="hide-menu">Tinymce Edtor</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="form-wizard.html"
                  aria-expanded="false"
                  ><i data-feather="archive"></i
                  ><span class="hide-menu">Form Wizard</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="form-repeater.html"
                  aria-expanded="false"
                  ><i data-feather="cpu"></i
                  ><span class="hide-menu">Form Repeater</span></a
                >
              </li>
              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Tables</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="sidebar"></i
                  ><span class="hide-menu">Bootstrap Tables</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="table-basic.html" class="sidebar-link"
                      ><i class="ri-layout-line"></i
                      ><span class="hide-menu">Basic Table </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="table-dark-basic.html" class="sidebar-link"
                      ><i class="ri-layout-2-line"></i
                      ><span class="hide-menu">Dark Basic Table </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="table-sizing.html" class="sidebar-link"
                      ><i class="ri-layout-3-line"></i
                      ><span class="hide-menu">Sizing Table </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="table-layout-coloured.html" class="sidebar-link"
                      ><i class="ri-layout-4-line"></i
                      ><span class="hide-menu">Coloured Table Layout</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="hard-drive"></i
                  ><span class="hide-menu">Datatables</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="table-datatable-basic.html" class="sidebar-link"
                      ><i class="ri-layout-5-line"></i
                      ><span class="hide-menu"> Basic Initialisation</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="table-datatable-api.html" class="sidebar-link"
                      ><i class="ri-layout-column-line"></i
                      ><span class="hide-menu"> API</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="table-datatable-advanced.html" class="sidebar-link"
                      ><i class="ri-layout-row-line"></i
                      ><span class="hide-menu">
                        Advanced Initialisation</span
                      ></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="table-jsgrid.html"
                  aria-expanded="false"
                  ><i data-feather="server"></i
                  ><span class="hide-menu">Table Jsgrid</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="table-responsive.html"
                  aria-expanded="false"
                  ><i data-feather="minimize"></i
                  ><span class="hide-menu">Table Responsive</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="table-footable.html"
                  aria-expanded="false"
                  ><i data-feather="maximize"></i
                  ><span class="hide-menu">Table Footable</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="table-editable.html"
                  aria-expanded="false"
                  ><i data-feather="edit-3"></i
                  ><span class="hide-menu">Table Editable</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="table-bootstrap.html"
                  aria-expanded="false"
                  ><i data-feather="octagon"></i
                  ><span class="hide-menu">Table Bootstrap</span></a
                >
              </li>

              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Charts</span>
              </li>

              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="chart-morris.html"
                  aria-expanded="false"
                  ><i data-feather="activity"></i
                  ><span class="hide-menu"> Morris Chart</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="chart-chart-js.html"
                  aria-expanded="false"
                  ><i data-feather="bar-chart-2"></i
                  ><span class="hide-menu">Chartjs</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="chart-sparkline.html"
                  aria-expanded="false"
                  ><i data-feather="bar-chart"></i
                  ><span class="hide-menu">Sparkline Chart</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="chart-chartist.html"
                  aria-expanded="false"
                  ><i data-feather="disc"></i
                  ><span class="hide-menu">Chartist Chart</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="command"></i
                  ><span class="hide-menu">Apex Charts</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="chart-apex-line.html" class="sidebar-link"
                      ><i class="ri-bar-chart-horizontal-line"></i>
                      <span class="hide-menu">Line Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-apex-area.html" class="sidebar-link"
                      ><i class="ri-donut-chart-line"></i>
                      <span class="hide-menu">Area Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-apex-bar.html" class="sidebar-link"
                      ><i class="ri-bar-chart-line"></i>
                      <span class="hide-menu">Bar Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-apex-pie.html" class="sidebar-link"
                      ><i class="ri-pie-chart-line"></i>
                      <span class="hide-menu">Pie Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-apex-radial.html" class="sidebar-link"
                      ><i class="ri-line-chart-line"></i>
                      <span class="hide-menu">Radial Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-apex-radar.html" class="sidebar-link"
                      ><i class="ri-bubble-chart-line"></i>
                      <span class="hide-menu">Radar Chart</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="life-buoy"></i
                  ><span class="hide-menu">C3 Charts</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="chart-c3-axis.html" class="sidebar-link"
                      ><i class="ri-bubble-chart-line"></i>
                      <span class="hide-menu">Axis Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-c3-bar.html" class="sidebar-link"
                      ><i class="ri-bar-chart-grouped-line"></i>
                      <span class="hide-menu">Bar Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-c3-data.html" class="sidebar-link"
                      ><i class="ri-donut-chart-line"></i>
                      <span class="hide-menu">Data Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-c3-line.html" class="sidebar-link"
                      ><i class="ri-line-chart-line"></i>
                      <span class="hide-menu">Line Chart</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="sliders"></i
                  ><span class="hide-menu">Echarts</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="chart-echart-basic.html" class="sidebar-link"
                      ><i class="ri-line-chart-line"></i>
                      <span class="hide-menu">Basic Charts</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-echart-bar.html" class="sidebar-link"
                      ><i class="ri-bar-chart-horizontal-line"></i>
                      <span class="hide-menu">Bar Chart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="chart-echart-pie-doughnut.html"
                      class="sidebar-link"
                      ><i class="ri-pie-chart-line"></i>
                      <span class="hide-menu">Pie &amp; Doughnut Chart</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Sample Pages</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="shopping-bag"></i
                  ><span class="hide-menu">Ecommerce</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="eco-products.html" class="sidebar-link"
                      ><i class="ri-stock-line"></i>
                      <span class="hide-menu">Products</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-cart.html" class="sidebar-link"
                      ><i class="ri-shopping-cart-line"></i>
                      <span class="hide-menu">Products Cart</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-edit.html" class="sidebar-link"
                      ><i class="ri-file-edit-line"></i>
                      <span class="hide-menu">Products Edit</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-detail.html" class="sidebar-link"
                      ><i class="ri-file-list-line"></i>
                      <span class="hide-menu">Product Details</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-orders.html" class="sidebar-link"
                      ><i class="ri-file-list-3-line"></i>
                      <span class="hide-menu">Product Orders</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-checkout.html" class="sidebar-link"
                      ><i class="ri-currency-line"></i>
                      <span class="hide-menu">Products Checkout</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="book-open"></i
                  ><span class="hide-menu">Sample Pages </span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="starter-kit.html" class="sidebar-link"
                      ><i class="ri-artboard-2-line"></i>
                      <span class="hide-menu">Starter Kit</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-animation.html" class="sidebar-link"
                      ><i class="ri-shape-2-line"></i>
                      <span class="hide-menu">Animation</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-search-result.html" class="sidebar-link"
                      ><i class="ri-file-search-line"></i>
                      <span class="hide-menu">Search Result</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-gallery.html" class="sidebar-link"
                      ><i class="ri-gallery-line"></i>
                      <span class="hide-menu">Gallery</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-treeview.html" class="sidebar-link"
                      ><i class="ri-git-branch-line"></i>
                      <span class="hide-menu">Treeview</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-block-ui.html" class="sidebar-link"
                      ><i class="ri-clockwise-2-line"></i>
                      <span class="hide-menu">Block UI</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-session-timeout.html" class="sidebar-link"
                      ><i class="ri-timer-flash-line"></i>
                      <span class="hide-menu">Session Timeout</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="pages-session-idle-timeout.html"
                      class="sidebar-link"
                      ><i class="ri-timer-line"></i>
                      <span class="hide-menu">Session Idle Timeout</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-utility-classes.html" class="sidebar-link"
                      ><i class="ri-question-line"></i>
                      <span class="hide-menu">Helper Classes</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-maintenance.html" class="sidebar-link"
                      ><i class="ri-tools-line"></i>
                      <span class="hide-menu">Maintenance Page</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="clipboard"></i
                  ><span class="hide-menu">Page Layouts </span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-fixed-left-sidebar.html"
                      class="sidebar-link"
                      ><i class="ri-layout-left-2-line"></i
                      ><span class="hide-menu">
                        Inner Fixed Left Sidebar
                      </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-fixed-right-sidebar.html"
                      class="sidebar-link"
                      ><i class="ri-layout-right-2-line"></i
                      ><span class="hide-menu">
                        Inner Fixed Right Sidebar
                      </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-left-sidebar.html"
                      class="sidebar-link"
                      ><i class="ri-layout-left-line"></i
                      ><span class="hide-menu"> Inner Left Sidebar </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-right-sidebar.html"
                      class="sidebar-link"
                      ><i class="ri-layout-right-line"></i
                      ><span class="hide-menu"> Inner Right Sidebar </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="page-layout-fixed-header.html" class="sidebar-link"
                      ><i class="ri-layout-top-line"></i
                      ><span class="hide-menu"> Fixed Header </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="page-layout-fixed-sidebar.html"
                      class="sidebar-link"
                      ><i class="ri-layout-left-line"></i
                      ><span class="hide-menu"> Fixed Sidebar </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="page-layout-fixed-header-sidebar.html"
                      class="sidebar-link"
                      ><i class="ri-layout-5-line"></i
                      ><span class="hide-menu">
                        Fixed Header &amp; Sidebar
                      </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="page-layout-boxed-layout.html" class="sidebar-link"
                      ><i class="ri-layout-bottom-line"></i
                      ><span class="hide-menu"> Box Layout </span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="user-check"></i
                  ><span class="hide-menu">Authentication</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="authentication-login1.html" class="sidebar-link"
                      ><i class="ri-lock-line"></i
                      ><span class="hide-menu"> Login </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="authentication-login2.html" class="sidebar-link"
                      ><i class="ri-lock-2-line"></i
                      ><span class="hide-menu"> Login 2 </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="authentication-login3.html" class="sidebar-link"
                      ><i class="ri-lock-password-line"></i
                      ><span class="hide-menu"> Login 3 </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="authentication-register1.html" class="sidebar-link"
                      ><i class="ri-user-add-line"></i
                      ><span class="hide-menu"> Register</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="authentication-register2.html" class="sidebar-link"
                      ><i class="ri-admin-line"></i
                      ><span class="hide-menu"> Register 2</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="authentication-lockscreen.html"
                      class="sidebar-link"
                      ><i class="ri-door-lock-box-line"></i
                      ><span class="hide-menu"> Lockscreen</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="authentication-recover-password.html"
                      class="sidebar-link"
                      ><i class="ri-lock-password-line"></i
                      ><span class="hide-menu"> Recover password</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="users"></i
                  ><span class="hide-menu">Users</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ui-user-card.html" class="sidebar-link"
                      ><i class="ri-account-box-line"></i>
                      <span class="hide-menu"> User Card </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-profile.html" class="sidebar-link"
                      ><i class="ri-account-pin-box-line"></i
                      ><span class="hide-menu"> User Profile</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-user-contacts.html" class="sidebar-link"
                      ><i class="ri-contacts-line"></i
                      ><span class="hide-menu"> User Contact</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="file-text"></i
                  ><span class="hide-menu">Invoice</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="pages-invoice.html" class="sidebar-link"
                      ><i class="ri-profile-line"></i
                      ><span class="hide-menu"> Invoice Layout </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-invoice-list.html" class="sidebar-link"
                      ><i class="ri-file-list-line"></i
                      ><span class="hide-menu"> Invoice List</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="map-pin"></i
                  ><span class="hide-menu">Maps</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="map-google.html" class="sidebar-link"
                      ><i class="ri-map-pin-line"></i
                      ><span class="hide-menu"> Google Map </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="map-vector.html" class="sidebar-link"
                      ><i class="ri-map-pin-5-line"></i
                      ><span class="hide-menu"> Vector Map</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="target"></i
                  ><span class="hide-menu">Icons</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="icon-feather.html" class="sidebar-link"
                      ><i class="ri-emotion-2-line"></i>
                      <span class="hide-menu"> Feather Icons </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-remix.html" class="sidebar-link"
                      ><i class="ri-emotion-2-line"></i>
                      <span class="hide-menu"> Remix Icons </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-material.html" class="sidebar-link"
                      ><i class="ri-user-smile-line"></i>
                      <span class="hide-menu"> Material Icons </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-fontawesome.html" class="sidebar-link"
                      ><i class="ri-emotion-line"></i
                      ><span class="hide-menu"> Fontawesome Icons</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-bootstrap.html" class="sidebar-link"
                      ><i class="ri-emotion-happy-line"></i
                      ><span class="hide-menu"> Bootstrap Icons</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="clock"></i
                  ><span class="hide-menu">Timeline</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="timeline-center.html" class="sidebar-link"
                      ><i class="ri-clockwise-line"></i>
                      <span class="hide-menu"> Center Timeline </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="timeline-horizontal.html" class="sidebar-link"
                      ><i class="ri-clockwise-2-line"></i
                      ><span class="hide-menu"> Horizontal Timeline</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="timeline-left.html" class="sidebar-link"
                      ><i class="ri-anticlockwise-line"></i
                      ><span class="hide-menu"> Left Timeline</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="timeline-right.html" class="sidebar-link"
                      ><i class="ri-anticlockwise-2-line"></i
                      ><span class="hide-menu"> Right Timeline</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="mail"></i
                  ><span class="hide-menu">Email Template</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="email-templete-alert.html" class="sidebar-link"
                      ><i class="ri-mail-unread-line"></i>
                      <span class="hide-menu"> Alert </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="email-templete-basic.html" class="sidebar-link"
                      ><i class="ri-mail-line"></i
                      ><span class="hide-menu"> Basic</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="email-templete-billing.html" class="sidebar-link"
                      ><i class="ri-mail-send-line"></i
                      ><span class="hide-menu"> Billing</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="email-templete-password-reset.html"
                      class="sidebar-link"
                      ><i class="ri-mail-lock-line"></i
                      ><span class="hide-menu"> Password-Reset</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="alert-circle"></i
                  ><span class="hide-menu">Error Pages</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="error-400.html" class="sidebar-link"
                      ><i class="ri-file-warning-line"></i>
                      <span class="hide-menu"> Error 400 </span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="error-403.html" class="sidebar-link"
                      ><i class="ri-file-warning-line"></i
                      ><span class="hide-menu"> Error 403</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="error-404.html" class="sidebar-link"
                      ><i class="ri-file-warning-line"></i
                      ><span class="hide-menu"> Error 404</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="error-500.html" class="sidebar-link"
                      ><i class="ri-file-warning-line"></i
                      ><span class="hide-menu"> Error 500</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="error-503.html" class="sidebar-link"
                      ><i class="ri-file-warning-line"></i
                      ><span class="hide-menu"> Error 503</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  ><i data-feather="corner-down-right"></i
                  ><span class="hide-menu">Multi level dd</span></a
                >
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link"
                      ><i class="ri-logout-circle-r-line"></i
                      ><span class="hide-menu"> item 1.1</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link"
                      ><i class="ri-logout-circle-r-line"></i
                      ><span class="hide-menu"> item 1.2</span></a
                    >
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                      ><i class="ri-play-list-add-line"></i>
                      <span class="hide-menu">Menu 1.3</span></a
                    >
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link"
                          ><i class="ri-logout-circle-line"></i
                          ><span class="hide-menu"> item 1.3.1</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link"
                          ><i class="ri-logout-circle-line"></i
                          ><span class="hide-menu"> item 1.3.2</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link"
                          ><i class="ri-logout-circle-line"></i
                          ><span class="hide-menu"> item 1.3.3</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link"
                          ><i class="ri-logout-circle-line"></i
                          ><span class="hide-menu"> item 1.3.4</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link"
                      ><i class="ri-list-settings-line"></i
                      ><span class="hide-menu"> item 1.4</span></a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-small-cap">
                <i class="nav-small-line"></i>
                <span class="hide-menu">Extra</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="../../../docs/document.html"
                  aria-expanded="false"
                  ><i data-feather="clipboard"></i
                  ><span class="hide-menu">Documentation</span></a
                >
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="authentication-login1.html"
                  aria-expanded="false"
                  ><i data-feather="log-out"></i
                  ><span class="hide-menu">Log Out</span></a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="sidebar-footer px-3 py-4">
          <div class="bg-light-info buynow-card mb-0 mt-3 w-100">
            <img
              src="../../assets/images/background/sidebar-buynow.png"
              class="mt-n5 buynow-img"
              alt="flexy"
            />
            <div class="sidebar-footer-text">
              <h4 class="fw-bold">Upgrade to</h4>
              <h4 class="fw-bold">Premium</h4>
              <a href="#" class="btn btn-primary mt-2">Upgrade</a>
            </div>
          </div>
        </div>
      </aside>
      <div class="page-wrapper">
        <div class="page-titles">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12 align-self-center">
              <h4 class="text-muted mb-0 fw-normal">Welcome Johnathan</h4>
              <h1 class="mb-0 fw-bold">Analytical Dashboard</h1>
            </div>
            <div
              class="
                col-lg-4 col-md-6
                d-none d-md-flex
                align-items-center
                justify-content-end
              "
            >
              <select
                class="form-select theme-select border-0"
                aria-label="Default select example"
              >
                <option value="1">Today 23 March</option>
                <option value="2">Today 24 March</option>
                <option value="3">Today 25 March</option>
              </select>
              <a
                href="javascript:void(0)"
                class="btn btn-info d-flex align-items-center ms-2"
              >
                <i class="ri-add-line me-1"></i>
                Add New
              </a>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="card welcome-card overflow-hidden bg-light-info border-0"
              >
                <div class="card-body">
                  <h3 class="text-primary position-relative">Hey John,</h3>
                  <h3 class="text-primary position-relative">
                    Download latest report
                  </h3>
                  <a href="#" class="btn btn-info mb-4 mt-3 position-relative"
                    >Download</a
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 d-flex align-items-stretch">
                  <div class="card bg-primary w-100">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <h4 class="card-title text-white">Earnings</h4>
                        <div class="ms-auto">
                          <span
                            class="
                              btn btn-lg btn-info btn-circle
                              d-flex
                              align-items-center
                              justify-content-center
                            "
                          >
                            <i data-feather="dollar-sign"></i>
                          </span>
                        </div>
                      </div>
                      <div class="mt-3">
                        <h2 class="fs-8 text-white mb-0">$93,438.78</h2>
                        <span class="text-white op-5">Monthly revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-stretch">
                  <div class="card w-100 overflow-hidden">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div>
                          <h5 class="fw-normal mb-0 text-muted">
                            Monthly Sales
                          </h5>
                          <h2 class="mb-0">3246</h2>
                        </div>
                        <div class="ms-auto">
                          <span
                            class="
                              btn btn-lg btn-warning btn-circle
                              d-flex
                              align-items-center
                              justify-content-center
                            "
                          >
                            <i data-feather="shopping-bag"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="monthly-sales"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-md-flex align-items-center">
                    <div>
                      <h3 class="card-title">Sales Overview</h3>
                      <h6 class="card-subtitle">Ample admin Vs Pixel admin</h6>
                    </div>
                    <div class="ms-auto">
                      <ul class="list-style-none">
                        <li class="list-inline-item text-primary">
                          <i
                            class="ri-checkbox-blank-circle-fill fs-1 me-1"
                          ></i>
                          Ample
                        </li>
                        <li class="list-inline-item text-info">
                          <i class="ri-checkbox-blank-circle-fill fs-1 me-1"></i
                          >Pixel Admin
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="sales-overview" class="mt-4"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-flex align-items-center pb-3 border-bottom">
                    <div>
                      <h3 class="card-title">Total Sales</h3>
                      <h6 class="card-subtitle mb-0">Overview of Years</h6>
                    </div>
                    <div class="ms-auto">
                      <select
                        class="form-select theme-select border-0"
                        aria-label="Default select example"
                      >
                        <option value="1">March 2023</option>
                        <option value="2">March 2023</option>
                        <option value="3">March 2023</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-4">
                    <h5 class="text-muted fw-normal mb-0">Sales Yearly</h5>
                    <div class="ms-auto">
                      <h2 class="fw-bold mb-0">8,364,398</h2>
                    </div>
                  </div>
                  <div class="position-relative">
                    <div id="total-sales" class="mt-4 pt-2"></div>
                    <i
                      data-feather="shopping-cart"
                      class="total-sales-icon text-muted-lite feather-xl"
                    ></i>
                  </div>
                  <ul
                    class="list-style-none d-flex justify-content-between mt-5"
                  >
                    <li class="list-inline-item">
                      <i
                        class="
                          ri-checkbox-blank-circle-fill
                          text-info
                          fs-1
                          me-1
                        "
                      ></i>
                      2023
                    </li>
                    <li class="list-inline-item">
                      <i
                        class="
                          ri-checkbox-blank-circle-fill
                          text-primary
                          fs-1
                          me-1
                        "
                      ></i
                      >2023
                    </li>
                    <li class="list-inline-item">
                      <i
                        class="
                          ri-checkbox-blank-circle-fill
                          text-warning
                          fs-1
                          me-1
                        "
                      ></i
                      >2019
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-md-flex align-items-center">
                    <div>
                      <h3 class="card-title">Products Performance</h3>
                      <h6 class="card-subtitle mb-0">
                        Ample Admin Vs Pixel Admin
                      </h6>
                    </div>
                    <div class="ms-auto mt-3 mt-md-0">
                      <select
                        class="form-select theme-select border-0"
                        aria-label="Default select example"
                      >
                        <option value="1">March 2023</option>
                        <option value="2">March 2023</option>
                        <option value="3">March 2023</option>
                      </select>
                    </div>
                  </div>
                  <div class="table-responsive mt-4">
                    <table
                      class="
                        table
                        mb-0
                        text-nowrap
                        varient-table
                        align-middle
                        fs-3
                      "
                    >
                      <thead>
                        <tr>
                          <th scope="col" class="px-0 text-muted">Assigned</th>
                          <th scope="col" class="px-0 text-muted">Name</th>
                          <th scope="col" class="px-0 text-muted">Priority</th>
                          <th scope="col" class="px-0 text-muted text-end">
                            Budget
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-0">
                            <div class="d-flex align-items-center">
                              <img
                                src="../../assets/images/users/1.jpg"
                                class="rounded-circle"
                                width="35"
                                alt="flexy"
                              />
                              <div class="ms-3">
                                <h6 class="mb-0 fw-bold">Sunil Joshi</h6>
                                <span class="text-muted fs-9"
                                  >Web Designer</span
                                >
                              </div>
                            </div>
                          </td>
                          <td class="px-0">Elite Admin</td>
                          <td class="px-0">
                            <span class="badge bg-info">Low</span>
                          </td>
                          <td
                            class="px-0 text-dark font-weight-medium text-end"
                          >
                            $3.9K
                          </td>
                        </tr>
                        <tr>
                          <td class="px-0">
                            <div class="d-flex align-items-center">
                              <img
                                src="../../assets/images/users/2.jpg"
                                class="rounded-circle"
                                width="35"
                                alt="flexy"
                              />
                              <div class="ms-3">
                                <h6 class="mb-0 fw-bold">Andrew McDownland</h6>
                                <span class="text-muted fs-9"
                                  >Project Manager</span
                                >
                              </div>
                            </div>
                          </td>
                          <td class="px-0">Real Homes WP Theme</td>
                          <td class="px-0">
                            <span class="badge bg-primary">Medium</span>
                          </td>
                          <td
                            class="px-0 text-dark font-weight-medium text-end"
                          >
                            $24.5K
                          </td>
                        </tr>
                        <tr>
                          <td class="px-0">
                            <div class="d-flex align-items-center">
                              <img
                                src="../../assets/images/users/3.jpg"
                                class="rounded-circle"
                                width="35"
                                alt="flexy"
                              />
                              <div class="ms-3">
                                <h6 class="mb-0 fw-bold">Christopher Jamil</h6>
                                <span class="text-muted fs-9">SEO Manager</span>
                              </div>
                            </div>
                          </td>
                          <td class="px-0">MedicalPro WP Theme</td>
                          <td class="px-0">
                            <span class="badge bg-warning">Hight</span>
                          </td>
                          <td
                            class="px-0 text-dark font-weight-medium text-end"
                          >
                            $12.8K
                          </td>
                        </tr>
                        <tr>
                          <td class="px-0">
                            <div class="d-flex align-items-center">
                              <img
                                src="../../assets/images/users/4.jpg"
                                class="rounded-circle"
                                width="35"
                                alt="flexy"
                              />
                              <div class="ms-3">
                                <h6 class="mb-0 fw-bold">Nirav Joshi</h6>
                                <span class="text-muted fs-9"
                                  >Frontend Engineer</span
                                >
                              </div>
                            </div>
                          </td>
                          <td class="px-0">Hosting Press HTML</td>
                          <td class="px-0">
                            <span class="badge bg-danger">Low</span>
                          </td>
                          <td
                            class="px-0 text-dark font-weight-medium text-end"
                          >
                            $2.4K
                          </td>
                        </tr>
                        <tr>
                          <td class="px-0">
                            <div class="d-flex align-items-center">
                              <img
                                src="../../assets/images/users/5.jpg"
                                class="rounded-circle"
                                width="35"
                                alt="flexy"
                              />
                              <div class="ms-3">
                                <h6 class="mb-0 fw-bold">Micheal Doe</h6>
                                <span class="text-muted fs-9"
                                  >Content Writer</span
                                >
                              </div>
                            </div>
                          </td>
                          <td class="px-0">Helping Hands WP Theme</td>
                          <td class="px-0">
                            <span class="badge bg-success">Low</span>
                          </td>
                          <td
                            class="px-0 text-dark font-weight-medium text-end"
                          >
                            $9.3K
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <img
                  src="../../assets/images/background/blog-bg.jpg"
                  class="card-img-top blog-img"
                  alt="..."
                />
                <div class="card-body">
                  <div class="d-flex align-items-center text-muted-lite">
                    <i data-feather="clock" class="feather-lg me-1"></i>
                    22 March, 2023
                  </div>
                  <h3 class="card-title mt-4">
                    Super awesome, Angular 12 is coming soon!
                  </h3>
                  <ul class="list-style-none mt-3 pt-1 pb-4">
                    <li class="list-inline-item">
                      <span class="badge bg-primary">Medium</span>
                    </li>
                    <li class="list-inline-item">
                      <span class="badge bg-danger">Low</span>
                    </li>
                  </ul>
                  <div class="border-top pt-4 d-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="me-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="John Deo"
                      >
                        <img
                          src="../../assets/images/users/1.jpg"
                          class="rounded-circle"
                          width="35"
                          alt="flexy"
                        />
                      </a>
                      <a
                        href="#"
                        class="me-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Micheal Doe"
                      >
                        <img
                          src="../../assets/images/users/2.jpg"
                          class="rounded-circle"
                          width="35"
                          alt="flexy"
                        />
                      </a>
                      <a
                        href="#"
                        class="
                          me-1
                          round-md
                          rounded-circle
                          d-flex
                          align-items-center
                          justify-content-center
                          bg-light-success
                          text-success
                        "
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add new"
                        ><i data-feather="plus" class="feather-sm"></i
                      ></a>
                    </div>
                    <div class="ms-auto">
                      <a href="javascript:void(0)" class="text-muted-lite">
                        <i data-feather="message-circle" class=""></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card w-100 overflow-hidden">
                <div class="card-body pb-0">
                  <div class="d-flex align-items-start">
                    <div>
                      <h3 class="card-title">Weekly Stats</h3>
                      <h6 class="card-subtitle mb-0">Average sales</h6>
                    </div>
                    <div class="ms-auto">
                      <div class="dropdown">
                        <a
                          href="#"
                          class="text-muted-lite"
                          id="year1-dropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i data-feather="more-horizontal"></i>
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="year1-dropdown"
                        >
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li>
                            <a class="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 pb-3 d-flex align-items-center">
                    <span class="btn btn-primary btn-circle">
                      <i data-feather="shopping-cart"></i>
                    </span>
                    <div class="ms-3">
                      <h5 class="mb-0 fw-bold">Top Sales</h5>
                      <span class="text-muted fs-9">Johnathan Doe</span>
                    </div>
                    <div class="ms-auto">
                      <span class="badge bg-light-secondary text-muted"
                        >+68%</span
                      >
                    </div>
                  </div>
                  <div class="py-3 d-flex align-items-center">
                    <span class="btn btn-warning btn-circle">
                      <i data-feather="star"></i>
                    </span>
                    <div class="ms-3">
                      <h5 class="mb-0 fw-bold">Best Seller</h5>
                      <span class="text-muted fs-9">MaterialPro Admin</span>
                    </div>
                    <div class="ms-auto">
                      <span class="badge bg-light-secondary text-muted"
                        >+68%</span
                      >
                    </div>
                  </div>
                  <div class="pt-3 d-flex align-items-center">
                    <span class="btn btn-success btn-circle">
                      <i data-feather="message-square"></i>
                    </span>
                    <div class="ms-3">
                      <h5 class="mb-0 fw-bold">Most Commented</h5>
                      <span class="text-muted fs-9">Ample Admin</span>
                    </div>
                    <div class="ms-auto">
                      <span class="badge bg-light-secondary text-muted"
                        >+68%</span
                      >
                    </div>
                  </div>
                </div>
                <div id="weekly-stats"></div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-flex align-items-start">
                    <div>
                      <h3 class="card-title">Daily Activities</h3>
                      <h6 class="card-subtitle mb-0">Overview of Years</h6>
                    </div>
                    <div class="ms-auto">
                      <div class="dropdown">
                        <a
                          href="#"
                          class="text-muted-lite"
                          id="year1-dropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i data-feather="more-horizontal"></i>
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="year1-dropdown"
                        >
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li>
                            <a class="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="position-relative mt-5 scrollable"
                    style={{height: "300px"}}
                  >
                    <ul class="timeline-widget">
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-primary
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-muted mt-n1">
                          Payment received from John Doe of $385.90
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="timeline-badge me-3 badge-info flex-shrink-0"
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          Project Meeting
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-warning
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          New Sale recorded
                          <a href="javascript:void(0)" class="text-info"
                            >#ML-3467</a
                          >
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="timeline-badge me-3 badge-danger flex-shrink-0"
                        ></span>
                        <div class="timeline-desc fs-3 text-muted mt-n1">
                          Payment was made of $64.95 to Michael Anderson
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-success
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-muted mt-n1">
                          New payment receipt created for Alphanso Golvo
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-primary
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          New Sale recorded
                          <a href="javascript:void(0)" class="text-info"
                            >#ML-3467</a
                          >
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="timeline-badge me-3 badge-info flex-shrink-0"
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          Project Meeting
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-primary
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-muted mt-n1">
                          Payment received from John Doe of $385.90
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="timeline-badge me-3 badge-info flex-shrink-0"
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          Project Meeting
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-warning
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          New Sale recorded
                          <a href="javascript:void(0)" class="text-info"
                            >#ML-3467</a
                          >
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="timeline-badge me-3 badge-danger flex-shrink-0"
                        ></span>
                        <div class="timeline-desc fs-3 text-muted mt-n1">
                          Payment was made of $64.95 to Michael Anderson
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-success
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-muted mt-n1">
                          New payment receipt created for Alphanso Golvo
                        </div>
                      </li>
                      <li class="timeline-item mb-4">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="
                            timeline-badge
                            me-3
                            badge-primary
                            flex-shrink-0
                          "
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          New Sale recorded
                          <a href="javascript:void(0)" class="text-info"
                            >#ML-3467</a
                          >
                        </div>
                      </li>
                      <li class="timeline-item">
                        <div class="timeline-time fw-bold text-dark fs-2 mt-n1">
                          09.46
                        </div>
                        <span
                          class="timeline-badge me-3 badge-info flex-shrink-0"
                        ></span>
                        <div class="timeline-desc fs-3 text-dark fw-bold mt-n1">
                          Project Meeting
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">2023© All Rights Reserved by Wrappixel</footer>
      </div>
    </div>
    </>
  )
}

export default App
