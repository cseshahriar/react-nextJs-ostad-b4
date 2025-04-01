import React from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [active, setActive] = React.useState("home");

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (Only on Mobile) */}
        <button
          className="absolute top-5 right-3 p-1 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          ❌
        </button>
        {/** Sidebar Header */}
        <div className="flex items-center space-x-[9px] mb-6 p-4">
          <img src="./dash.png" alt="img" className="w-9 h-9" />
          <h2 className="text-[25px] font-extrabold text-[#343C6A]">
            BankDash.
          </h2>
        </div>

        {/** Sidebar Items */}
        <nav>
          <ul className="space-y-3">
            <li
              className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                active === "home"
                  ? "border-[#2D60FF] rounded-tr-lg rounded-br-lg fill-[#2D60FF] text-[#2D60FF] hover:bg-blue-200"
                  : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
              }`}
              onClick={() => setActive("home")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="current"
              >
                <g clipPath="url(#clip0_0_326)">
                  <path
                    d="M24.3254 10.8738C24.3248 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4983 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678111 10.8667C0.674678 10.8702 0.671244 10.8738 0.667811 10.8772C-0.224828 11.775 -0.223302 13.2317 0.672198 14.1272C1.08132 14.5365 1.62168 14.7736 2.19941 14.7984C2.22287 14.8006 2.24652 14.8018 2.27037 14.8018H2.67682V22.3066C2.67682 23.7917 3.88513 25 5.37057 25H9.36036C9.76472 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1115 25 22.3198 23.7917 22.3198 22.3066V14.8018H22.6967C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2207 13.2305 25.2211 11.7714 24.3254 10.8738Z"
                    fill="current"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_326">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-lg font-semibold leading-normal">Home</span>
            </li>
            <li
              className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                active === "transactions"
                  ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                  : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
              }`}
              onClick={() => setActive("transactions")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="current"
              >
                <g clipPath="url(#clip0_0_294)">
                  <path
                    d="M5.20831 22.9167C5.20897 23.469 5.42867 23.9985 5.81923 24.3891C6.20979 24.7797 6.73931 24.9994 7.29165 25H17.7083C18.2606 24.9994 18.7902 24.7797 19.1807 24.3891C19.5713 23.9985 19.791 23.469 19.7916 22.9167V22.0052H5.20831V22.9167Z"
                    fill="current"
                  />
                  <path
                    d="M19.7916 2.08333C19.791 1.531 19.5713 1.00148 19.1807 0.610917C18.7902 0.220358 18.2606 0.00065473 17.7083 0L7.29165 0C6.73931 0.00065473 6.20979 0.220358 5.81923 0.610917C5.42867 1.00148 5.20897 1.531 5.20831 2.08333V3.125H19.7916V2.08333Z"
                    fill="current"
                  />
                  <path
                    d="M24.7097 6.70052L21.5847 3.44531L20.0819 4.88802L21.3893 6.25H19.7916V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7778 8.07926 24.857 7.96602 24.912 7.8407C24.9671 7.71538 24.9968 7.58045 24.9997 7.44361C25.0026 7.30677 24.9784 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7097 6.70052Z"
                    fill="current"
                  />
                  <path
                    d="M16.6666 6.24999H19.7916V4.16666H5.20831V16.6667H8.33331V18.75H5.20831V20.8333H19.7916V8.33332H16.6666V6.24999ZM15.625 10.4167H11.9791C11.841 10.4167 11.7085 10.4715 11.6109 10.5692C11.5132 10.6669 11.4583 10.7994 11.4583 10.9375C11.4583 11.0756 11.5132 11.2081 11.6109 11.3058C11.7085 11.4035 11.841 11.4583 11.9791 11.4583H13.0208C13.6666 11.4577 14.2896 11.697 14.7689 12.1299C15.2482 12.5627 15.5495 13.1582 15.6144 13.8008C15.6793 14.4433 15.5032 15.087 15.1201 15.607C14.7371 16.127 14.1745 16.4861 13.5416 16.6146V17.7083H11.4583V16.6667H9.37498V14.5833H13.0208C13.1589 14.5833 13.2914 14.5285 13.3891 14.4308C13.4868 14.3331 13.5416 14.2006 13.5416 14.0625C13.5416 13.9244 13.4868 13.7919 13.3891 13.6942C13.2914 13.5965 13.1589 13.5417 13.0208 13.5417H11.9791C11.3333 13.5423 10.7103 13.303 10.2311 12.8701C9.75179 12.4372 9.45045 11.8417 9.38555 11.1992C9.32064 10.5567 9.4968 9.91293 9.87983 9.39297C10.2629 8.87301 10.8254 8.51392 11.4583 8.38541V7.29166H13.5416V8.33332H15.625V10.4167Z"
                    fill="current"
                  />
                  <path
                    d="M3.49828 16.6667L4.88734 15.3354L3.44593 13.8312L0.320931 16.826C0.222115 16.9207 0.142929 17.034 0.0879011 17.1593C0.0328728 17.2846 0.00308028 17.4195 0.000226477 17.5564C-0.00262733 17.6932 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2007 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49828Z"
                    fill="current"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_294">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                Transactions
              </span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
