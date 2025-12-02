import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <br />
      <div className="list-group">
        
        <Link
          to="/admin/"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-list fs-4"></i>
          <span className="float-end">Home</span>
        </Link>{" "}
        <Link
          to="/admin/maincategory"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-list fs-4"></i>
          <span className="float-end">Maincategory</span>
        </Link>{" "}
        <Link
          to="/admin/subcategory"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-list fs-4"></i>
          <span className="float-end">Subcategory</span>
        </Link>{" "}
        <Link
          to="/admin/brand"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-list fs-4"></i>
          <span className="float-end">Barand</span>
        </Link>{" "}
        <Link
          to="/admin/product"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-list fs-4"></i>
          <span className="float-end">Product</span>
        </Link>{" "}
        <Link
          to="/admin/testimonial"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-star fs-4"></i>
          <span className="float-end">Testimonial</span>
        </Link>{" "}
        <Link
          to="/admin/user"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-user fs-4"></i>
          <span className="float-end">User</span>
        </Link>

<Link
          to="/admin/newlatter"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-envelope fs-4"></i>
          <span className="float-end">Newlatter</span>
        </Link><Link
          to="/admin/contactus"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-phone fs-4"></i>
          <span className="float-end">ContactUs</span>
        </Link><Link
          to="/admin/checkouts"
          className="list-group-item list-group-item-action active mb-1"
          aria-current="true"
        >
          <i className="fa fa-shopping-bag fs-4"></i>
          <span className="float-end">Checkouts</span>
        </Link>

      </div>
    
    </>
  );
}
