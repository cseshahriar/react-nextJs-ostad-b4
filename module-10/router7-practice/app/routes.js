import { index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("about", "routes/about.jsx"),

    layout(
        "dashboard/layout.jsx",
        prefix("dashboard", [
            // route("/", "dashboard/dashboard.jsx"),
            index("dashboard/dashboard.jsx"),
            route("brands", "dashboard/brands.jsx"),
            route("brands/:id", "dashboard/brandDetails.jsx"),
            route("products", "dashboard/Products.jsx"),
            route("categories", "dashboard/categories.jsx"),
        ])

    ),
];
